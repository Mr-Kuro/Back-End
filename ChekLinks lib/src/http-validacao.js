import chalk from "chalk";

function extraiLinks(arrayLinks) {
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function checaStatus(listaURLs) {
  const arrayStatus = await Promise.all(
    listaURLs.map(async (url) => {
      try {
        const response = await fetch(url);
        return  `${response.status} - ${response.statusText}`;
      } catch (erro) {
        return manejaErros(erro);
      }
    })
  );
  return arrayStatus;
}

function manejaErros(erro) {
  if(erro.cause.code === 'ENOTFOUND'){
  console.log(chalk.red(`endereço ${erro.cause.hostname} não encontrado!\n código de erro: ${erro.cause.code}`));

  return `O endereço não foi encontrado!`
} else{
  return `Ocorreu um erro inesperado. ${erro.cause.code}`
}
}

export default async function listaValidada(listaDeLinks) {
  const links = extraiLinks(listaDeLinks);
  const status = await checaStatus(links);

  return listaDeLinks.map((objeto, indice) => {
    return {
      ...objeto,
      status: status[indice],
    };
  });
}
