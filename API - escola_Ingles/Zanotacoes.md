
01. Estruturando o projeto
      Nesta aula, aprendemos:
        - Criar um novo projeto do zero com Sequelize;
        - Fazer configurações necessárias no projeto;
        - A subir um servidor local básico com Express e Nodemon;
        - Fazer a instalação do MySQL e como acessar via terminal.
        - Criar um novo banco de dados e conectá-lo à aplicação.


02. Modelos, migrações e seeds
      scripts sql:
        show databases; //mostra os bancos do esquema
        show tables; // mostra as tabelas de um banco
        describe 'nome do banco'; //mostra as decrições das tabelas

        Nesta aula, aprendemos:
          Criar modelos e arquivos de migração via terminal
          O que são e para que servem migrações com ORMs
          Executar migrações para criação de tabelas no banco
          Popular tabelas automaticamente através de arquivos seed


03. Controladores e rotas
      Nesta aula, aprendemos:
        Como funciona o modelo MVC
        O que é e para que serve a camada de controle
        A criar um controlador
        Como usar métodos do Sequelize para consultar o banco
        A separar a responsabilidade das rotas para termos uma aplicação organizada
        Como criar uma rota para o modelo Pessoas
        A chamar um método do controlador Pessoas através da rota com o verbo HTTP GET


04. CRUD com Sequelize
      Nesta aula, aprendemos a:
        - Utilizar outros métodos do Sequelize para as operações de CRUD
        - Enviar dados através de parâmetros de requisição HTTP
        - Enviar dados através do corpo da requisição HTTP
        - Criar rotas para cada operação
        - Associar as rotas a cada método do controlador Pessoas


05. Relações e associações
      Nesta aula, aprendemos a:
        - Interpretar o diagrama de banco
        - Identificar os tipos de relação pedidos no projeto
        - Associar tabelas através de métodos do Sequelize
        - Referenciar tabelas associadas
        - Migrar tabelas associadas
        - Popular tabelas associadas


06. Controladores
      Nesta aula, aprendemos a:
        - Adicionar novos controladores;
        - Trabalhar com mais de um modelo no mesmo controlador;
        - Enviar dados via parâmetros e corpo das requisições;
        - Utilizar estes dados para encontrar informações no banco;
        - Gerar estruturas de dados do tipo JSON com informações úteis ao usuário.