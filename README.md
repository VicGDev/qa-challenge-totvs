# Desafio Técnico QA Jr - Automation Exercise

## Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio técnico para a vaga de Analista QA Júnior na TOTVS.

O objetivo foi demonstrar conhecimentos em:

* Automação de Testes
* Testes End-to-End (E2E)
* Testes de API
* Arquitetura Page Object Model (POM)
* Boas práticas de organização e Clean Code
Site utilizado para os testes:

https://automationexercise.com

---

## Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Git
* GitHub

---

## Estrutura do Projeto

```text
cypress/
├── e2e/
│   ├── register.cy.js
│   ├── cart.cy.js
│   └── products-api.cy.js
│
├── pages/
│   ├── HomePage.js
│   ├── SignupPage.js
│   ├── AccountPage.js
│   ├── ProductsPage.js
│   └── CartPage.js
│
├── fixtures/
└── support/
```

---

## Cenários Automatizados

### Desafio 01 - Registro de Usuário

Automação completa do fluxo de cadastro de usuário.

Validações realizadas:

* Acesso à página de Signup/Login
* Preenchimento do formulário de cadastro
* Utilização de e-mail dinâmico para evitar duplicidade
* Validação dos campos Nome e E-mail preenchidos automaticamente
* Criação da conta
* Validação da mensagem de sucesso de cadastro

---

### Desafio 02 - Manipulação de Inventário

Automação do fluxo de compra adicionando 4 unidades de um produto ao carrinho.

Validações realizadas:

* Quantidade do produto igual a 4
* Captura dinâmica do preço unitário
* Captura dinâmica do valor total
* Validação do cálculo do valor total com base na quantidade selecionada

---

### Desafio 03 - Teste de API

Automação do endpoint:

GET /api/productsList

Validações realizadas:

* Status Code 200
* Response Code 200
* Lista de produtos existente
* Lista de produtos não vazia
* Verificação dos principais atributos retornados para cada produto

---

## Como Executar o Projeto

### Clonar o repositório

```bash
git clone https://github.com/VicGDev/qa-challenge-totvs.git
```

### Instalar as dependências

```bash
npm install
```

### Executar os testes em modo interativo

```bash
npx cypress open
```

### Executar os testes em modo headless

```bash
npx cypress run
```

---

## Autor

Victor A. Gomes

Quality Assurance Analyst