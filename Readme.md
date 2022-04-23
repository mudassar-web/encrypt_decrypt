# Encryption Decryption using Caesar Cipher (Modified Form)

## Cryptography:
```
Cryptography is used to secure and protect data during communication. It is helpful to prevent unauthorized person or group of users from accessing any confidential data. Encryption and decryption are the two essential functionalities of cryptography.
```

## Encryption
```
Encryption is a process which transforms the original information into an unrecognizable form. This new form of the message is entirely different from the original message. That’s why a hacker is not able to read the data as senders use an encryption algorithm.
```

## Decryption
```
Decryption is a process of converting encoded/encrypted data in a form that is readable and understood by a human or a computer. This method is performed by un-encrypting the text manually or by using keys used to encrypt the original data.
```

## About the Code
The Repo contains code **test.js** which will encrypt and decrypt data based on caesar cipher technique. Original caesar cipher take only 26 charachters for creating chiper text and shift the 3rd letter ahead of the original character in plain text (Eg. ‘A’ will become ‘C’ in chiper text and so on). This code is created with some modification. Instead of using fixed 3rd letter shift there a random generated (between 1-9) used as a shift value and instead of using only 26 characters, chiper text is created levearging the ASCII values of characters and adding shift value to generated new characters. 
Chiper text contains the random number with its data and used a symmetric key for converting back to plain text.

## To Execute
Run `node test.js` in **encrypt_decrypt/** directory in terminal.
