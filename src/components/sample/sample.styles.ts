export function getStyle(): HTMLTemplateElement {
    const style = document.createElement('template');
    
    style.innerHTML = String.raw`
        <style>
            :host {
                width: 20vw;
                height: 20vh;
                background-color: red;
                display: block;
            }
        </style>
    `;
    return style;
}