
<h1 align="center">
    Best Petshop Finder
</h1>

# Descrição do Projeto
A plataforma pesquisa pelo menor preço de banho entre três petshops, dado quantidade da cachorros grandes e pequenos da pessoa. Em caso de empate de valores, o melhor petshop será aquele de menor distância. Os preços do banho pode varias de acordo com o dia da semana.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com) 
- [Node.js](https://nodejs.org/en/) (v10+).

Além disto é bom ter um editor para abrir o código
- [VSCode](https://code.visualstudio.com/)




## 📍   Instruções para execução

Primeiro clone o repositório com 
```bash
$ git clone <https://github.com/KakaSena/Best-Petshop-Finder>
```

Execute o comando abaixo no terminal

```bash
npm run dev
```

O comando acima irá instalar todas dependências do backend e do frontend, após um tempo, a aplicação vai abrir em seu navegador. Caso isso nao aconteça, digite em seu navegador a url

```bash
http://localhost:3000/
```

Com a aplicação rodando basta fazer as pesquisas desejadas.

Para parar a aplicação basta em seu terminal apertar ```bashctrl+c```

## 💻   Projeto
---
### **Frontend**
Uma tela inicial simples para receber o usuário e informar sobre o que a plataforma faz.
A próxima tela, o usuário deve prover os dados pedidos para assim ter a resposta desejada.

O calendário está no formato americano (mm-dd-yyyy)

### **Backend**
O backend é composto por um endpoint _/search_ responsável pela lógica da pesquisa do menor preço. Dado a data, o número de cachorros pequenos e grandes, o método de _bestpetshop_ itera sob um json de petshops e calcula os preços, logo apos compara qual o menor preço (considerando em casos de empate a menor distancia)

A lógica é desse forma pois facilmente se pode aumentar o número de lojas (pelo json) sem necessidade de alterar o método _bestpetshop_.

É assumido premissas básicas como: 

* O usuário **deve** informar os números de cachorros para efetuar a pesquisa
* O número de cachorros **não** pode ser negativo.



## 🚀   Tecnologias
---

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)

