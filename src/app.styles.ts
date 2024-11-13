export function getStyle(): HTMLTemplateElement {
    const style = document.createElement('template');
    
    style.innerHTML = String.raw`
        <style>
        </style>
    `;
    return style;
}