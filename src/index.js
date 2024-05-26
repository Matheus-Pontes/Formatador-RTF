const conteudoRft = document.getElementById("conteudo");
const preview = document.getElementById("preview");
const btnCopy = document.getElementById("copy");
let selectedText;

let actionsEditor = {
    conteudoFormatado: "",
    bold: () => {
        if (selectedText != "") {
            actionsEditor.conteudoFormatado = " \\b " + selectedText + " \\b0 ";
            conteudoRft.value = conteudoRft.value.replace(selectedText, actionsEditor.conteudoFormatado);
            preview.innerHTML = formatContextRTFToHTML(conteudoRft.value);
        }
    },
    italic: () => {
        if (selectedText != "") {
            actionsEditor.conteudoFormatado = " \\i " + selectedText + " \\i0 ";
            conteudoRft.value = conteudoRft.value.replace(selectedText, actionsEditor.conteudoFormatado);
            preview.innerHTML = formatContextRTFToHTML(conteudoRft.value);
        }
    },
    underline: () => {
        if (selectedText != "") {
            actionsEditor.conteudoFormatado = " \\ul " + selectedText + " \\ul0 ";
            conteudoRft.value = conteudoRft.value.replace(selectedText, actionsEditor.conteudoFormatado);
            preview.innerHTML = formatContextRTFToHTML(conteudoRft.value);
        }
    },
    subscript: () => {
        if (selectedText != "") {
            actionsEditor.conteudoFormatado = " \\sub " + selectedText + " \\sub0 ";
            conteudoRft.value = conteudoRft.value.replace(selectedText, actionsEditor.conteudoFormatado);
            preview.innerHTML = formatContextRTFToHTML(conteudoRft.value);
        }
    },
    superscript: () => {
        if (selectedText != "") {
            actionsEditor.conteudoFormatado = " \\super " + selectedText + " \\super0 ";
            conteudoRft.value = conteudoRft.value.replace(selectedText, actionsEditor.conteudoFormatado);
            preview.innerHTML = formatContextRTFToHTML(conteudoRft.value);
        }
    }
}

function formatContextRTFToHTML(text) {
    return text.replace("\\b", "<b>")
               .replace("\\b0", "</b>")
               .replace("\\i", "<i>")
               .replace("\\i0", "</i>")
               .replace("\\ul", "<u>")
               .replace("\\ul0", "</u>")
               .replace("\\sub", "<sub>")
               .replace("\\sub0", "</sub>")
               .replace("\\super", "<sup>")
               .replace("\\super0", "</sup>");
}

conteudoRft.addEventListener("input", function(e) {
    preview.innerHTML = formatContextRTFToHTML(conteudoRft.value);
});

btnCopy.addEventListener("click", function() {
    let range = document.createRange();
    range.selectNode(document.getElementById("conteudo"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Texto copiado com sucesso. ' + range);
    } catch (err) {
        alert('Não foi possível copiar!');
    }
});

document.getElementById("actions").addEventListener('click', function(e) {
    if(!e.target.matches('[data-action]')) {
        return;
    } 

    const action = e.target.dataset.action;
    actionsEditor[action]();
});


document.addEventListener('mouseup', () => {
    const selection = window.getSelection();
    selectedText = selection.toString();
});

document.addEventListener('selectionchange', () => {
    const selection = window.getSelection();
    selectedText = selection.toString();
});