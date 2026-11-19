(() => {
  "use strict";

  const header = document.querySelector(".cabecalho");
  const navigation = document.querySelector("#navegacao");
  const toggle = document.querySelector(".menu-toggle");
  const links = [...navigation.querySelectorAll('a[href^="#"]')];
  const sections = links.map((link) =>
    document.querySelector(link.getAttribute("href")),
  );
  const desktop = window.matchMedia("(min-width: 1060px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function setMenu(open, restoreFocus = false) {
    navigation.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Fechar menu de navegação" : "Abrir menu de navegação",
    );
    if (restoreFocus) toggle.focus();
  }

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setMenu(open);
    // A navegação precede o botão no DOM: levar o foco ao primeiro link
    // garante que Tab percorra o menu assim que ele é aberto.
    if (open) links[0].focus();
  });
  links.forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    )
      setMenu(false, true);
  });
  document.addEventListener("click", (event) => {
    if (
      !header.contains(event.target) &&
      toggle.getAttribute("aria-expanded") === "true"
    )
      setMenu(false);
  });
  desktop.addEventListener("change", () => setMenu(false));

  // Sem JavaScript a navegação permanece visível; só recolhemos após ativar os eventos.
  toggle.hidden = false;
  document.documentElement.classList.add("js");

  let scrollPending = false;
  function updateActiveSection() {
    const offset = header.getBoundingClientRect().height + 130;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section;
    }
    for (const link of links) {
      if (link.hash === `#${current.id}`)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
    scrollPending = false;
  }
  function scheduleActiveSection() {
    if (!scrollPending) {
      scrollPending = true;
      window.requestAnimationFrame(updateActiveSection);
    }
  }
  window.addEventListener("scroll", scheduleActiveSection, { passive: true });
  window.addEventListener("resize", scheduleActiveSection);
  window.addEventListener("load", updateActiveSection);
  updateActiveSection();

  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-ready");
        observer.observe(element);
      }
    });
    // Tab e busca interna devem revelar conteúdo ainda não observado.
    document.addEventListener("focusin", (event) => {
      const element = event.target.closest(".reveal-ready");
      if (element) {
        element.classList.remove("reveal-ready");
        observer.unobserve(element);
      }
    });
    reducedMotion.addEventListener("change", (event) => {
      if (event.matches) {
        observer.disconnect();
        document
          .querySelectorAll(".reveal-ready")
          .forEach((element) => element.classList.add("is-visible"));
      }
    });
  }

  document.querySelector("#ano").textContent = new Intl.DateTimeFormat(
    "pt-BR",
    {
      year: "numeric",
      timeZone: "America/Sao_Paulo",
    },
  ).format(new Date());
})();
