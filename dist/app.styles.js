export function getStyle() {
    const style = document.createElement('template');
    style.innerHTML = String.raw `
        <style>
        </style>
    `;
    return style;
}
