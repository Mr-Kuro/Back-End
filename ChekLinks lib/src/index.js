import * as fs from "fs";
import chalk from "chalk";

// REGEX
// juntando tudo e associando a grupos
// \[([^[\]]*?)\]\((https?:\/\/[^\s:#.].[^\s]*)\)

function extraiLinks(texto) {
  // const regex = new RegExp(/\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm);
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map((capturas) => ({
    [capturas[1]]: capturas[2],
  }));
  return resultados.length !== 0 ? resultados : 'Não há links no arquivo';
}

// Função que trata erros
function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "não há arquivo no diretório"));
}

// JS Assincrono
// promessas com async / await
async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

/* Promessas com .then
function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";

  fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => trataErro(erro));
	
    
}*/

/* JS Sincrono
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if(erro){
            trataErro(chalk.red(erro.code, 'não há arquivo no diretório'));
        }
        console.log(chalk.rgb(105, 200, 108)(texto));
    })
}*/

// Exibe resultados
pegaArquivo("./arquivos/texto.md");

export default pegaArquivo;