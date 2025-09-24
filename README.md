📊 Sistema de Cadastro de Funcionários e Produção

Aplicação simples desenvolvida com Node.js, Express e EJS, que permite:

Cadastro de funcionários.

Login de usuários.

Registro e listagem de produções.

O projeto utiliza EJS como motor de templates e TailwindCSS para estilização.

🚀 Funcionalidades

Cadastro de Funcionário

Nome, e-mail e RF (Registro Funcional).

Mensagem de confirmação exibida após o cadastro.

Login de Funcionário

Autenticação básica com validação de e-mail e senha.

Mensagem de sucesso ou erro exibida após tentativa de login.

Cadastro de Produção

Registro de produções com ID, e-mail do responsável, tempo e custo.

Listagem das produções cadastradas em formato de tabela.

🛠️ Tecnologias Utilizadas

Node.js

Express 5.1.0

EJS 3.1.10

TailwindCSS (CDN)

Font Awesome (ícones)

📂 Estrutura do Projeto
📁 projeto
 ┣ 📁 views
 ┃ ┣ cadastro.ejs       # Tela de cadastro de funcionário
 ┃ ┣ login.ejs          # Tela de login de funcionário
 ┃ ┗ producao.ejs       # Tela de produção com listagem
 ┣ server.js            # Código principal da aplicação
 ┣ package.json         # Dependências e scripts
 ┗ README.md            # Documentação

⚙️ Instalação e Execução

Clone este repositório:

git clone <url-do-repo>
cd projeto


Instale as dependências:

npm install


Inicie o servidor:

node server.js


Acesse no navegador:

http://localhost:3000

🔑 Rotas Principais

GET / → Página inicial.

POST /salvar → Salva novo funcionário.

GET /login → Exibe página de login.

POST /login → Autentica usuário.

GET /producao → Exibe tela de cadastro/listagem de produção.

POST /producao → Salva nova produção.

📌 Melhorias Futuras

Persistência dos dados em banco de dados (atualmente em memória).

Sistema de autenticação com JWT ou sessões.

Validações mais robustas nos formulários.

Dashboard administrativo.

👨‍💻 Autor

Projeto desenvolvido por Diego 🚀
