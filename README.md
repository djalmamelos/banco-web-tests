# Banco Web - Testes Automatizados com Cypress

Este projeto é parte do programa de mentoria em testes automatizados, focado no aprendizado e prática de automação de testes utilizando Cypress com JavaScript. O projeto implementa testes end-to-end para a aplicação Banco Web, verificando funcionalidades críticas como login e transferências bancárias.

## 🎯 Objetivo

Fornecer um projeto inicial para alunos da mentoria, demonstrando boas práticas de automação de testes com Cypress, incluindo:
- Organização de testes com Page Objects e Custom Commands
- Gerenciamento de dados de teste com fixtures
- Geração de relatórios com screenshots
- Estruturação de projeto de automação

## 📋 Pré-requisitos

Para executar este projeto, você precisará ter instalado:

- Node.js (versão LTS recomendada)
- NPM (Node Package Manager)
- Git

Além disso, é necessário que os seguintes serviços estejam em execução:
- [Banco API](https://github.com/juliodelimas/banco-api)
- [Banco WEB](https://github.com/juliodelimas/banco-web)

## 🚀 Instalação

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/djalmamelos/banco-web-tests.git
\`\`\`

2. Acesse o diretório do projeto:
\`\`\`bash
cd banco-web-tests
\`\`\`

3. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

## 💻 Executando os Testes

O projeto oferece diferentes scripts para execução dos testes:

- Executar testes em modo headless:
\`\`\`bash
npm test
\`\`\`

- Executar testes com interface gráfica:
\`\`\`bash
npm run cy:headed
\`\`\`

- Abrir o Cypress Test Runner:
\`\`\`bash
npm run cy:open
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
cypress/
├── e2e/                    # Arquivos de teste
│   ├── login.cy.js        # Testes de login
│   └── transferencia.cy.js # Testes de transferência
├── fixtures/              # Dados de teste
│   └── credenciais.json   # Credenciais para testes
├── support/
│   ├── commands/          # Custom commands
│   │   ├── common.js      # Comandos comuns
│   │   ├── login.js       # Comandos de login
│   │   └── transferencias.js # Comandos de transferência
│   └── e2e.js            # Configurações globais
└── reports/              # Relatórios de teste gerados
\`\`\`

## 🧪 Testes Implementados

### Login (login.cy.js)
- ✅ Login com dados válidos
- ❌ Login com dados inválidos

### Transferências (transferencia.cy.js)
- ✅ Transferência com dados e valores válidos
- ❌ Tentativa de transferência acima do limite permitido (R$ 5.000,00)

## 🛠 Custom Commands

### Login Commands
- \`SuccessfulLogin()\`: Realiza login com credenciais válidas
- \`InvalidLogin()\`: Tenta login com credenciais inválidas

### Transferência Commands
- \`MakeTransfer(OriginAcc, DestinyAcc, value)\`: Realiza uma transferência entre contas

### Common Commands
- \`CheckToastMessage(message)\`: Verifica mensagens de toast
- \`SelectOptionCombobox(labelfield, Option)\`: Seleciona opções em comboboxes

## 📊 Relatórios

O projeto utiliza o cypress-mochawesome-reporter para geração de relatórios. Após a execução dos testes, os relatórios podem ser encontrados em:
\`\`\`
cypress/reports/html/index.html
\`\`\`

O relatório inclui:
- Resultados detalhados dos testes
- Screenshots de falhas
- Tempo de execução
- Estatísticas de sucesso/falha

## 👥 Contribuição

Este é um projeto educacional, parte do programa de mentoria. Sugestões e melhorias são bem-vindas através de pull requests.

## 📝 Licença

Este projeto está sob a licença ISC.