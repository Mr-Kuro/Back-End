#!/usr/bin/env node

import pegaArquivo from "./index.js";
import * as fs from "fs";
import chalk from "chalk";
import listaValidada from "./http-validacao.js";

const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = "") {
  if (valida) {
    console.log(
      chalk.yellow(`lista validada ${identificador}`),
      await listaValidada(resultado)
    );
  } else {
    console.log(chalk.yellow(`lista de links ${identificador}`), resultado);
  }
}

async function processaTexto(argumentos) {
  const caminho = argumentos[2];
  const valida = argumentos[3] === "--valida";

  try {
    if (fs.lstatSync(caminho).isFile()) {
      const resultado = await pegaArquivo(caminho);

      imprimeLista(valida, resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
      const arquivos = await fs.promises.readdir(caminho);
      arquivos.forEach(async (nomeDoArquivo) => {
        const lista = await pegaArquivo(`${caminho}/${nomeDoArquivo}`);
        imprimeLista(valida, lista, nomeDoArquivo);
      });
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(chalk.red("Arquivo ou diretório não existente."));
    }
  }
}

processaTexto(caminho);
