const words = ["parasail", "slider", "carnation", "delta", "echo", "foxtrot"];

// Função para capitalizar a primeira letra de uma palavra
const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

// Função para adicionar um número aleatório
const addNumber = () => Math.floor(Math.random() * 100);

// Função para gerar o username
export default function generateUsername(numberOfWords: number, separator: string, capitalizeWords: boolean, includeNumbers: boolean) {
    let usernameParts = [];

    for (let i = 0; i < numberOfWords; i++) {
        // Escolhe uma palavra aleatória do array
        const word = words[Math.floor(Math.random() * words.length)];
        // Capitaliza se necessário
        const wordToAdd = capitalizeWords ? capitalize(word) : word;
        usernameParts.push(wordToAdd);
    }

    // Adiciona um número, se necessário
    if (includeNumbers) {
        usernameParts.push(addNumber());
    }

    // Junta todas as partes com o separador escolhido
    return usernameParts.join(separator);
};