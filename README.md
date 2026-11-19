# Portfólio — Maria Vitória Benaglia

Portfólio profissional para apresentar serviços de assistência pessoal e virtual, organização administrativa, atendimento e desenvolvimento web.

## Tecnologia e estrutura

O site mantém HTML5 e CSS3, com JavaScript puro para melhoria progressiva da navegação. Não utiliza framework nem bibliotecas em produção.

- `index.html`: conteúdo semântico, metadados e dados estruturados.
- `style.css`: tokens de identidade, componentes e regras mobile-first.
- `script.js`: menu mobile, seção ativa e entradas suaves opcionais.
- `images/`: fotografia e screenshots reais, com originais preservados.
- `fonts/`: Manrope variável hospedada localmente, com licença OFL.
- `scripts/build.mjs`: validação e geração do site estático em `dist/`.
- `vercel.json`: build e diretório de publicação na Vercel.

## Executar o build

Requer Node.js 20 ou superior. Não há dependências para instalar.

```sh
npm run build
```

O build verifica a sintaxe do JavaScript, IDs duplicados, referências locais, âncoras, dados estruturados e a proteção de links externos. Em seguida, copia os arquivos públicos para `dist/`.

Para uma consulta rápida, abra `index.html` no navegador. Para revisar o build com carregamento de fontes e comportamento equivalente à publicação, sirva `dist/` por um servidor HTTP estático.

## Direção de UI/UX

- Azul-marinho `#142B4A` para hierarquia; azul royal `#2563EB` para ações; branco e off-white para leitura.
- Manrope para clareza de interface e serifas pontuais para dar personalidade à apresentação.
- Fotografia real no Hero, em vez de painéis decorativos.
- Assistência pessoal e administrativa em destaque; desenvolvimento web como competência complementar.
- Projetos administrativos em dupla e sites em apresentações amplas. Capturas completas podem ser ampliadas.
- Detalhes nativos expansíveis mantêm as funcionalidades e a participação no projeto disponíveis sem sobrecarregar a leitura inicial.
- Contato com uma ação principal no WhatsApp e canais secundários identificados.

## Projetos

1. Painel Comercial.
2. Gestão de Alunos e Pagamentos.
3. Capacita Manaus — Site Institucional: https://capacita-manaus.vercel.app/
4. Studio Dona Bella — Site-vitrine: https://studio-dona-bella.vercel.app/

As interfaces administrativas apresentam dados fictícios ou anonimizados. As descrições usam informações fornecidas pela autora, sem métricas de resultado ou tecnologias não confirmadas.

## Acessibilidade e desempenho

- Link para pular ao conteúdo, foco visível, navegação por teclado e estado da seção ativa.
- Menu mobile com `aria-expanded`, fechamento por Escape, seleção e clique externo.
- Navegação e detalhes dos projetos utilizáveis sem JavaScript.
- Preferência `prefers-reduced-motion` respeitada; conteúdo revelado imediatamente quando recebe foco pelo teclado.
- Imagens com dimensões explícitas e textos alternativos; carregamento lazy nos projetos.
- Screenshots em WebP para exibição, com PNG como alternativa e acesso aos originais. Os quatro arquivos de exibição passaram de 8.488.324 para 552.872 bytes, redução de 93,5%.
- Fontes e ícones locais, sem requisições a bibliotecas ou serviços de fontes.

## Verificação da reformulação — 19/11/2026

Build executado com sucesso. Verificação de navegador em Edge/Chromium nas larguras 320, 390, 640, 768, 1024, 1440 e 1920 px, incluindo menu por teclado, seção ativa, imagens WebP, detalhes expansíveis e destinos do WhatsApp.

Auditoria axe-core nas regras WCAG 2 A/AA e 2.1 A/AA em 390 e 1440 px: nenhuma violação automatizada detectada após as correções. Essa auditoria complementa a revisão visual e por teclado; não equivale a uma certificação de acessibilidade.

Experiência sem JavaScript e preferência por redução de movimento também verificadas.

Os sites Capacita Manaus e Studio Dona Bella e os perfis GitHub e Instagram responderam com HTTP 200. O LinkedIn retornou HTTP 999 para a consulta automatizada; seu endereço original foi preservado.

## Publicação

- Vercel: https://portfolio-maria-vitoria.vercel.app/
- GitHub Pages: https://mariavitoriabenaglia.github.io/portfolio-maria-vitoria/
- Repositório: https://github.com/mariavitoriabenaglia/portfolio-maria-vitoria

A Vercel executa `npm run build` e publica `dist/`. O GitHub Pages pode continuar servindo os arquivos estáticos da raiz na branch `main`.

## Uso de inteligência artificial

A inteligência artificial foi utilizada como apoio no planejamento, na estruturação do conteúdo, no desenvolvimento, na reformulação de UI/UX e nas verificações técnicas. Informações pessoais, serviços e projetos foram preservados a partir dos dados fornecidos pela autora.
