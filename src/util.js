export function controleDeTeclaParaFormatacao(event, tecla) {
    if (event.ctrlKey && tecla === 'b') return "bold";

    if (event.ctrlKey && tecla === 'i') return "italic";

    if (event.ctrlKey && tecla === 'u') return "underline";

    if (event.ctrlKey && tecla === 'x') return "subscript";

    if (event.ctrlKey && tecla === 'w') return "superscript";

    return "";
}