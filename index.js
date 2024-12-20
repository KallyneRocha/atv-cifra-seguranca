const readline = require("readline");

function Cifra() {
    //Definindo alfabeto na ordem especificada:
    const alfabetoCifra = (
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,;._"
    );

    // "A cifra deverá validar se os caracteres recebidos são válidos e lançar um erro caso algum caractere não seja válido dentro alfabeto especificado acima."
    //Segue função de validação:
    function validaCaracteres(mensagem) {
        for (const char of mensagem) {
            if (!alfabetoCifra.includes(char)) {
                throw new Error(`Caracter inválido: ${char}`);
            }
        }
    }

    // Configuração do readline para receber input
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite uma mensagem: ", (inputUsuario) => {
        try {
            validaCaracteres(inputUsuario);
            console.log("Mensagem válida!");
        } catch (error) {
            console.error(error.message);
        }
        rl.close();
    });
}

Cifra();