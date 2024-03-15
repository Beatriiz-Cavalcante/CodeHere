

class contentDin extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "content-area");

        const first = document.createElement("div");
        first.setAttribute("class", "first-content");

        const second = document.createElement("div");
        second.setAttribute("class", "second-content");

        componentRoot.appendChild(first);
        componentRoot.appendChild(second);

        const titulo = document.createElement("h3");
        titulo.textContent = this.getAttribute("titulo");

        const conteudo = document.createElement("p");
        conteudo.textContent = this.getAttribute("conteudo");

        first.appendChild(titulo);
        first.appendChild(conteudo);

        const type = document.createElement("div");
        type.setAttribute("class", "type");

        second.appendChild(type);

        const photo = document.createElement("div");
        photo.setAttribute("class", "photo");

        const nomeLinguagem = document.createElement("h3");
        nomeLinguagem.textContent = this.getAttribute("nomeLinguagem");

        type.appendChild(photo);
        type.appendChild(nomeLinguagem);

        const logo = document.createElement("img");
        logo.src = this.getAttribute("logo");

        photo.appendChild(logo);

        return componentRoot;
    }
    style(){
        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "contentDin.css");
        return link;
    }
}
customElements.define('conteudo-dinamico', contentDin);
