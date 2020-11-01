
<h1 align="center">
    Best Petshop Finder
</h1>

# Descrição do Projeto
A plataforma pesquisa pelo menor preço de banho entre três petshops, dado quantidade da cachorros grandes e pequenos da pessoa. Em caso de empate de valores, o melhor petshop será aquele de menor distância. Os preços do banho podem variar de acordo com o dia da semana.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com) 
- [Node.js](https://nodejs.org/en/) (v10+).

Além disso é bom ter um editor para abrir o código:
- [VSCode](https://code.visualstudio.com/)




## 📍   Instruções para execução

Primeiro clone o repositório com (ou baixe zip pelo mesmo link):
```bash
$ git clone <https://github.com/KakaSena/Best-Petshop-Finder>
```

Execute o comando abaixo no terminal:

```bash
npm i
```

Após isso, execute o comando abaixo no terminal:

```bash
npm run install-all
```

Aguarde a instalação e execute o comando abaixo:

```bash
npm run dev
```

O comando acima vai abrir a aplicação em seu navegador. Caso isso não aconteça, digite em seu navegador a url:

```bash
http://localhost:3000/
```

Com a aplicação rodando basta fazer as pesquisas desejadas.

Para parar a aplicação basta apertar ```ctrl+c``` em seu terminal.

## 💻   Projeto
---
### **Frontend**
Uma tela inicial para receber o usuário e informar sobre o que a plataforma faz.
Na próxima tela, o usuário deve prover os dados pedidos para assim ter a resposta desejada.

O calendário está no formato americano (mm-dd-yyyy)

É assumido premissas básicas como: 

* O usuário **deve** informar os números de cachorros para efetuar a pesquisa
* O número de cachorros **não** pode ser negativo.

O código garante que tais premissas serão cumpridas.

### **Backend**
O backend é composto por um endpoint _/search_ responsável pela lógica da pesquisa do menor preço. Dado a data, o número de cachorros pequenos e grandes, o método de _bestpetshop_ itera sob um json de petshops e calcula os preços, logo após compara qual o menor preço (considerando em casos de empate a menor distância)

Com a lógica acima, podemos facilmente aumentar o número de lojas (pelo json) sem necessidade de alterar o método _bestpetshop_.

## 🚀   Tecnologias
---

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)

