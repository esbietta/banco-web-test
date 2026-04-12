# banco-web-test

Este projeto demonstra como automatizar testes end-to-end utilizando Cypress e JavaScript, com organização de código por meio de Custom Commands e geração de relatórios avançados com o cypress-mochawesome-reporter.

## Objetivo

O objetivo deste repositório é servir como exemplo prático de automação de testes para aplicações web, utilizando o Cypress. O projeto cobre cenários de autenticação e transferência bancária, mostrando boas práticas de organização e documentação.

## Componentes do Projeto

- **Cypress**: Framework principal de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de lógicas comuns nos testes, localizados em `cypress/support/commands/`.
- **cypress-mochawesome-reporter**: Geração de relatórios HTML detalhados dos testes.
- **Estrutura de pastas**:
  - `cypress/e2e/`: Scripts de teste (ex: `login.cy.js`, `transferencia.cy.js`).
  - `cypress/fixtures/`: Dados de teste (ex: `credenciais.json`).
  - `cypress/support/`: Configurações e comandos customizados.
  - `cypress/reports/`: Relatórios gerados após execução dos testes.

## Pré-requisitos

- Node.js (versão compatível com o Cypress)
- npm (gerenciador de pacotes)
- API do banco rodando localmente (banco-api)
- Aplicação Web rodando localmente ([banco-web](https://github.com/esbietta/banco-web))

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/esbietta/banco-web-test.git
   cd banco-web-test
   ```
2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
3. Certifique-se de que a API (banco-api) e a aplicação Web (banco-web) estejam em execução.

## Execução dos Testes

- Para rodar todos os testes em modo headless:
  ```bash
  npm test
  ```
- Para abrir o Cypress em modo interativo:
  ```bash
  npm run cy:open
  ```
- Para rodar os testes com interface gráfica do navegador:
  ```bash
  npm run cy:headed
  ```

## Relatórios

Após a execução dos testes, um relatório HTML será gerado em `cypress/reports/html/index.html`. Abra este arquivo no navegador para visualizar os resultados detalhados.

## Estrutura dos Testes

- **login.cy.js**: Testes de autenticação de usuário.
- **transferencia.cy.js**: Testes de transferência bancária entre contas.
- **Fixtures**: Dados de entrada para os testes, como credenciais e exemplos.

## Custom Commands

Os comandos customizados estão organizados em:
- `cypress/support/commands/common.js`: Comandos utilitários gerais.
- `cypress/support/commands/login.js`: Comandos para automação de login.
- `cypress/support/commands/transferencia.js`: Comandos para automação de transferências.

Para utilizar um Custom Command em um teste:
```js
cy.login('usuario', 'senha'); // Exemplo de uso do comando de login
```

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias e correções.

## Licença

Montoria 2,0 do Julio de Lima
