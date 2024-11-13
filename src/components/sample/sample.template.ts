export function getTemplate(count?: number): HTMLTemplateElement {
    const template = document.createElement('template');

    template.innerHTML = String.raw`
        <h1>Sample Component!</h1>
    `;

    if (count) {
        template.innerHTML += String.raw`
        <h3>Count: ${count}</h3>
        `;
    }

    return template;
}