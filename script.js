const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

function btnEncrypt() {
    const encryptedText = encrypt(textArea.value)
    message.value = encryptedText;
    textArea.value = "";
    message.style.backgroundImage = none;
}

function encrypt(stringEncrypted) {
    let matrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase()

    for (i = 0; i < matrix.length; i++) {
        if (stringEncrypted.includes(matrix[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(matrix[i][0], matrix[i][1])
        }
    }
    return stringEncrypted;
}

function btnDecrypt() {
    const encryptedText = decrypt(textArea.value)
    message.value = encryptedText;
    textArea.value = "";
}

function decrypt(stringDecrypted) {
    let matrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase()

    for (i = 0; i < matrix.length; i++) {
        if (stringDecrypted.includes(matrix[i][1])) {
            stringDecrypted = stringDecrypted.replaceAll(matrix[i][1], matrix[i][0])
        }
    }
    return stringDecrypted;
}
