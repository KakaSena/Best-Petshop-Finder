
<h1 align="center">
    Best Petshop Finder
</h1>

## 📍   Instruções para execução
---
## 💻   Projeto
---

### **Desafio**
A plataforma pesquisa pelo menor preço de banho entre três petshops, dado quantidade da cachorros grandes e pequenos da pessoa. Em caso de empate de valores, o melhor petshop será aquele de menor distância. Os preços do banho pode varias de acordo com o dia da semana.


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

