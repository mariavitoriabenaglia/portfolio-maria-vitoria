import { readFile, mkdir, copyFile, cp, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import vm from "node:vm";

const root = fileURLToPath(new URL("../", import.meta.url));
const html = await readFile(path.join(root, "index.html"), "utf8");
const css = await readFile(path.join(root, "style.css"), "utf8");
const js = await readFile(path.join(root, "script.js"), "utf8");
new vm.Script(js, { filename: "script.js" });

// Os mercados compartilham escopos; a oferta internacional fica preparada na fonte.
const offers = JSON.parse(
  await readFile(path.join(root, "data/web-offers.json"), "utf8"),
);
const packageIds = new Set(offers.packages.map((offer) => offer.id));
for (const market of Object.values(offers.markets)) {
  for (const offer of market.offers) {
    if (!packageIds.has(offer.packageId) || !(offer.amount > 0)) {
      throw new Error("Oferta com escopo ou valor inválido.");
    }
    if (market.published) {
      const card = html.match(
        new RegExp(
          `<article\\b(?=[^>]*\\bdata-offer-id="${offer.packageId}")[\\s\\S]*?</article>`,
        ),
      )?.[0];
      const price = card?.match(
        /<data\b(?=[^>]*\bclass="offer-price")[^>]*>/,
      )?.[0];
      const amount = Number(price?.match(/\bvalue="([^"]+)"/)?.[1]);
      const currency = price?.match(/\bdata-currency="([^"]+)"/)?.[1];
      if (amount !== offer.amount || currency !== market.currency) {
        throw new Error(
          `Preço publicado divergente da configuração: ${offer.name}.`,
        );
      }
    }
  }
}

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
if (new Set(ids).size !== ids.length)
  throw new Error("IDs duplicados no HTML.");
if ([...html.matchAll(/<h1\b/g)].length !== 1)
  throw new Error("A página deve ter um título principal.");
JSON.parse(
  html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1],
);

const references = [
  ...[...html.matchAll(/\b(?:src|href|srcset)="([^"]+)"/g)].map(
    (match) => match[1],
  ),
  ...[...css.matchAll(/url\(["']?([^"')]+)["']?\)/g)].map((match) => match[1]),
];
const assets = new Set();
for (const reference of references) {
  if (reference.startsWith("#")) {
    if (!ids.includes(reference.slice(1)))
      throw new Error(`Âncora inexistente: ${reference}`);
    continue;
  }
  if (/^(?:https?:|data:|mailto:|tel:)/.test(reference)) continue;
  const resolved = path.resolve(root, reference);
  if (!resolved.startsWith(root))
    throw new Error(`Referência fora do projeto: ${reference}`);
  if (!(await stat(resolved)).isFile())
    throw new Error(`Arquivo ausente: ${reference}`);
  assets.add(reference);
}
for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
  if (!/rel="[^"]*noopener/.test(tag[0]))
    throw new Error("Link externo sem noopener.");
}

const output = path.join(root, "dist");
await mkdir(output, { recursive: true });
for (const file of ["index.html", "style.css", "script.js", "favicon.svg"]) {
  await copyFile(path.join(root, file), path.join(output, file));
}
for (const directory of ["images", "fonts"]) {
  await cp(path.join(root, directory), path.join(output, directory), {
    recursive: true,
  });
}
console.log(
  `Build concluído: dist/ · ${assets.size} arquivos referenciados · âncoras e JavaScript validados.`,
);
