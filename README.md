# 🧪 Cypress - Testes Automatizados na Loja Demo

Este projeto tem como objetivo demonstrar habilidades em automação de testes utilizando **Cypress**, aplicando boas práticas de QA em um fluxo completo de um e-commerce fictício.

> 🔗 Site testado: [SauceDemo](https://www.saucedemo.com)

---

## 🚀 Funcionalidades Testadas

- ✅ Login com credenciais válidas e inválidas
- ✅ Adição de produtos ao carrinho
- ✅ Finalização de compra com preenchimento de formulário
- ✅ Testes negativos com campos obrigatórios vazios

---

## 🧰 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [Node.js](https://nodejs.org/)
- GitHub Actions (CI)
- Mochawesome (relatório de testes)

---

## ▶️ Como Executar os Testes Localmente

```bash
# Instale as dependências
npm install

# Abra o Cypress em modo interativo
npx cypress open

# Ou execute todos os testes em modo headless
npx cypress run
