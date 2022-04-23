const msg = 'The quick brown fox jumps over the lazy dog'

const encrypt = (plainText) => {
    let chiperText = "";
    let x = Math.floor((Math.random() * 9) + 1);
    for (let i = 0; i < plainText.length; i++) {
        let existingCharCode = plainText.charCodeAt(i)
        let newCharCode = existingCharCode + x
        let newChars = String.fromCharCode(newCharCode)
        chiperText += newChars
    }
    return `${x}${chiperText}`
}

const decrypt = (chiperText) => {
    let plainText = ""
    let x = chiperText.charAt(0)
    for (let i = 1; i < chiperText.length; i++) {
        let existingCharCode = chiperText.charCodeAt(i)
        let newCharCode = existingCharCode - x
        let newChars = String.fromCharCode(newCharCode)
        plainText += newChars
    }
    return plainText
}
const encryptText = encrypt(msg);
const decryptText = decrypt(encryptText)
console.log('Original Msg:', msg, '\nencryptText:', encryptText, '\ndecryptText:', decryptText)