export class WebComponent extends HTMLElement {

    render(template: HTMLTemplateElement, styles: HTMLTemplateElement) {
        const shadow = this.shadowRoot || this.attachShadow({ mode: "open" });
        while (shadow.firstChild) {
            shadow.removeChild(shadow.firstChild);
        }
        shadow.appendChild(styles.content.cloneNode(true));
        shadow.appendChild(template.content.cloneNode(true));
    }
    
}