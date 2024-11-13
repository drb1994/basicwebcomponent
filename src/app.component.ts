import { WebComponent } from "./classes/WebComponent.js";
import { getTemplate } from "./app.template.js";
import { getStyle } from "./app.styles.js";

export class AppComponent extends WebComponent {
    
    constructor() {
        super();
        this.render(getTemplate(), getStyle());
    }

    connectedCallback() {
        console.log('AppComponent added to DOM!');
    }

}

customElements.define('app-component', AppComponent);