const template = document.createElement("template");

template.innerHTML = "<div><h1>Oferta: ALIENS <span id='nombreOferta'></span></h1></div>";

class OfertaElemento extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    //this.textContent="oferta";
    //this.append(template.content);
    const templateContent = template.content.cloneNode(true);
    shadow.append(templateContent);

    console.log("Constructor", this);
  }
}

customElements.define("oferta-elemento", OfertaElemento);
