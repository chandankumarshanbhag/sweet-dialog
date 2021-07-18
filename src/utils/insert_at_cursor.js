export default function insertAtCursor(input, insertChar) {
    input.focus();
    if (input.selectionStart || input.selectionStart == '0') {

        var startPos = input.selectionStart;
        var endPos = input.selectionEnd;
        return (input?.value?.substring(0, startPos)|| "")
            + (insertChar || "")
            + (input?.value?.substring(endPos, input.value.length)||"");
    } else {
        return (input?.value||"") + insertChar;
    }
};