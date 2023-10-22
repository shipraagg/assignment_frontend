let isLocked = false;
const editor = document.getElementById("editor");

function copyCode() {
    // Select the textarea content and copy
    editor.select();
    document.execCommand('copy');
}

function saveCode() {
    // This will just alert the content, you can modify to save it as per your needs
    alert(editor.value);
}

function toggleLock() {
    isLocked = !isLocked;

    // Disable or enable the textarea based on the lock status
    editor.disabled = isLocked;

    // Change the lock button text based on the status
    const lockButton = document.querySelector(".code-editor__btn--lock");
    lockButton.textContent = isLocked ? "Unlock" : "Lock";
}
