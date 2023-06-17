00. Conectando com o MySQL e Sequelize e express
      comandos npm:
        npm install express
        npm install --save sequelize
        npm install --save sequelize-cli
        npm install --save mysql2
        npm install --save path

      comandos npx:
        npx sequelize-cli init
        npx sequelize-cli model:create --name exemplo --attributes titulo:string,autor:string,editora:string,numeroPaginas:number
        npx sequelize-cli seed:generate --name demo-user

        npx sequelize-cli db:migrate
        npx sequelize-cli db:seed:all
      
      Criar e editar o .sequelizerc


01. Criando um projeto em NodeJS
      * Nessa aula, você aprendeu: 
        * Como o backend entrega os dados para o frontend;
        - O que é uma API REST, que é uma interface que vai fornecer dados e recursos baseados em requisições e respostas HTTP;
        - Iniciar um novo projeto Node através do comando npm init;
        - Personalizar o arquivo de configuração package.json com scripts e as informações individualizadas do projeto;
        - Utilizar um gerenciador de pacotes, como o NPM, para instalar novos módulos que serão utilizados no projeto;
        - Como está estruturada a pasta node_modules e a importância de incluí-la no arquivo .gitignore;
        - Construir um servidor local utilizando o módulo http do Node.js;
        - Realizar a criação de novas rotas e qual o objetivo das mesmas;
        - Instalação e utilização do nodemon para não ter que reiniciar o servidor a cada alteração.
<br>

02. Trabalhando com o Express
    * Nessa aula, aprendemos:
      - A instalar o Express e os benefícios de se usar um framework para o desenvolvimento de aplicações Web;
      - Criar um servidor local usando o Express e configurando-o para escutar requisições em uma porta específica do nosso computador;
      - Como estruturar as requisições da API, utilizando corretamente os verbos HTTP e padronizando o endpoint de acordo com o padrão REST;
      - Devolver dados como resposta às requisições, usando o padrão JSON;
      - Utilizar o Postman para fazer as requisições do tipo GET, POST, PUT e DELETE, cujas últimas três não conseguimos simular pelo navegador.

