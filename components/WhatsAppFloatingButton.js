(() => {
  "use strict";

  const iconUrl = new URL("../images/whatsapp.svg", document.currentScript.src)
    .href;

  class WhatsAppFloatingButton extends HTMLElement {
    static get observedAttributes() {
      return ["href", "label"];
    }

    connectedCallback() {
      if (!this.querySelector(".whatsapp-floating-link")) this.createLink();
      this.updateLink();
    }

    attributeChangedCallback() {
      if (this.isConnected) this.updateLink();
    }

    createLink() {
      const link = document.createElement("a");
      link.className = "whatsapp-floating-link";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const image = document.createElement("img");
      image.className = "whatsapp-floating-icon";
      image.alt = "";
      image.width = 28;
      image.height = 28;
      image.setAttribute("aria-hidden", "true");

      const label = document.createElement("span");
      label.className = "whatsapp-floating-label";
      link.append(image, label);
      this.append(link);
    }

    updateLink() {
      const link = this.querySelector(".whatsapp-floating-link");
      if (!link) return;

      // Reutiliza o contato cadastrado no cabeçalho; href permite usar o
      // mesmo componente em outras páginas com um contato explícito.
      const source = document.querySelector(
        '.header-cta[href^="https://wa.me/"]',
      );
      const href = this.getAttribute("href") || source?.href || link.href;
      const label = this.getAttribute("label") || "Vamos conversar";

      if (href) link.href = href;
      link.setAttribute(
        "aria-label",
        `${label} pelo WhatsApp (abre em nova aba)`,
      );
      link.querySelector(".whatsapp-floating-label").textContent = label;
      link.querySelector("img").src = iconUrl;
    }
  }

  if (!customElements.get("whatsapp-floating-button")) {
    customElements.define("whatsapp-floating-button", WhatsAppFloatingButton);
  }
})();
