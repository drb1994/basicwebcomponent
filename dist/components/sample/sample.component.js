import { WebComponent } from "../../classes/WebComponent.js";
import { SampleService } from "../../services/sample.service.js";
import { getStyle } from "./sample.styles.js";
import { getTemplate } from "./sample.template.js";
export class SampleComponent extends WebComponent {
    constructor() {
        super();
        this.sampleService = SampleService.get();
        this.render(getTemplate(), getStyle());
        //listen for events
        this.sampleService.countChangeEventTarget.addNumberListener('numberChanged', (e) => {
            this.count = e.detail;
            this.render(getTemplate(this.count), getStyle());
        });
    }
    connectedCallback() {
        console.log('SampleComponent added to DOM!');
        this.sampleService.incrementCount();
    }
}
customElements.define('sample-component', SampleComponent);
