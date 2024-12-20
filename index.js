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

    function Cifrar(mensagem, chave) {
        validaCaracteres(mensagem);
        validaCaracteres(chave);

        let mensagemCifrada = "";
        for (let i = 0; i < mensagem.length; i++) {
            const indexMensagem = alfabetoCifra.indexOf(mensagem[i]);
            const indexChave = alfabetoCifra.indexOf(chave[i % chave.length]);

            // Calcula o índice novo 
            const novoIndex = (indexMensagem + indexChave) % alfabetoCifra.length;
            mensagemCifrada += alfabetoCifra[novoIndex];
        }

        return mensagemCifrada;
    }

    function Decifrar(mensagemCifrada, chave) {
        validaCaracteres(mensagemCifrada);
        validaCaracteres(chave);

        let mensagemDecifrada = "";
        for (let i = 0; i < mensagemCifrada.length; i++) {
            const indexMensagemCifrada = alfabetoCifra.indexOf(mensagemCifrada[i]);
            const indexChave = alfabetoCifra.indexOf(chave[i % chave.length]);

            // Calcula o índice original
            const novoIndex = (indexMensagemCifrada - indexChave + alfabetoCifra.length) % alfabetoCifra.length;
            mensagemDecifrada += alfabetoCifra[novoIndex];
        }

        return mensagemDecifrada;
    }

    rl.question("Digite a mensagem a ser cifrada: ", (mensagem) => {
        rl.question("Digite a chave: ", (chave) => {
            try {
                // Chamando função para cifrar
                const mensagemCifrada = Cifrar(mensagem, chave);
                console.log(`Mensagem Cifrada: ${mensagemCifrada}`);

                // Chamando função para decifrar
                const mensagemDecifrada = Decifrar(mensagemCifrada, chave);
                console.log(`Mensagem Decifrada: ${mensagemDecifrada}`);
            } catch (error) {
                console.error(error.message);
            }
            rl.close();
        });
    });
}

Cifra();