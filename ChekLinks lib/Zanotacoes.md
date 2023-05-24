01. Criando um projeto em Node.js
        Nessa aula, você aprendeu:
            Que para criar um projeto em Node.js utilizamos o comando npm init;
            - Que o arquivo package.json é utilizado pelo Node.js para listar as dependências instaladas, além de informações sobre versão do programa, autoria e scripts;
            - Que as dependências (também chamadas de libs ou bibliotecas) são pacotes de código pronto que outras pessoas da comunidade disponibilizam, e nós as utilizamos para executar tarefas específicas no código sem termos que reescrever do zero;
            - Que para deixar o código mais organizado podemos usar ferramentas de linting, além da importância delas para reforçar estilo e também para prever possíveis bugs.



03. Capturando links
        Nessa aula, você aprendeu a:
            - Como utilizar expressões regulares, uma sintaxe feita para reconhecer padrões de texto, para capturar links e URLs;
            - Como utilizamos classes e grupos de expressões regulares para refinar a busca por estes padrões, além dos métodos que o JavaScript tem (por exemplo match e exec) para trazer os resultados e trabalhar com eles;
            - Manipular os resultados extraídos do texto através de expressões regulares e montar um objeto de retorno utilizando a sintaxe do JavaScript e desestruturação de objetos com o spread operator ....


04. Usando a linha de comando
        Nessa aula, você aprendeu:
            - A utilizar a interface de linha de comando e como aplicamos a lib process do Node.js para capturar e utilizar os dados informados no terminal em nosso código;
            - A organizar o código separando em arquivos as funções que lidam com entrada e saída de dados das funções que processam os links;
            - Como fazer estes diversos arquivos conversarem entre si através da exportação e importação de módulos com import e export;
            - Que scripts são instruções que usamos para automatizar tarefas e como escrever nossos próprios scripts, incluí-los no arquivo de configuração package.json e utilizá-los para executar comandos no terminal.


05. Validando links
        Você pode ter percebido, durante o projeto, que pegar os argumentos da linha de comando através de posições no array pode deixar o projeto um pouco “engessado”. Por exemplo, o que aconteceria se o usuário passasse os argumentos em outra ordem? E se quisermos adicionar argumentos e flags para funcionalidades adicionais? Fazer o gerenciamento dessas informações direto pelo array do process.argv começa a não parecer tão prático.

            A boa notícia é que sim, existe uma biblioteca para lidar com isso, chamada [yargs](https://www.npmjs.com/package/yargs). Sua funcionalidade básica é capturar os comandos do CLI e convertê-los em um objeto, assim os argumentos não dependem mais de estarem na posição correta de um array para funcionar.

            Não utilizamos o [yargs](https://www.npmjs.com/package/yargs) no curso, mas você pode fazer a implementação em seu projeto.

        Para publicar: 
            [link das instruções](https://cursos.alura.com.br/course/nodejs-criando-primeira-biblioteca/task/112074).

        Nessa aula, você aprendeu a:
            - Como utilizar acessar URLs com a API fetch e manipular os dados devolvidos, como o código de status HTTP;
            - Utilizar o método Promise.all para acessar de forma assíncrona um array de URLs e receber o resultado;
            - Que a API fetch é baseada no conceito de promessas em JavaScript, e nessa aula vimos como utiliza o async/await para resolver as promessas e garantir que o código seja executado de forma assíncrona, retornando os resultados.