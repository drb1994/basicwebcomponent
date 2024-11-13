import { SampleComponent } from "./components/sample/sample.component.js";
export function getTemplate(): HTMLTemplateElement {
    
    //dummy references to include in compilation
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    [SampleComponent].forEach(() => {});

    const template = document.createElement('template');

    template.innerHTML = String.raw`
        <sample-component></sample-component>
        <sample-component></sample-component>        
        <sample-component></sample-component>
        <sample-component></sample-component>
    `;

    return template;
}