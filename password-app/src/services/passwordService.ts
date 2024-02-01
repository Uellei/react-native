// passwordService.ts
export default function generatePassword(passwordLength: number, includeUppercase: boolean, includeLowercase: boolean, includeNumbers: boolean, includeSymbols: boolean) {
    let password: string = ""
    let characters: string = ""

    if (includeUppercase) characters += "ABCDEFGHJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characters += "abcdefghijkmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*";
    console.log(passwordLength)

    for(let index = 0; index < passwordLength; index++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return password
}
