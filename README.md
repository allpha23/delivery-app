# DeliveryApp

# Sobre o projeto


_DeliveryApp_ é aplicativo de gerenciamento de vendas, onde você pode comprar e vender bebidas. O app usa uma _API_ para gerenciar diferentes fluxos de acessos e regras de negócio. É possível criar, listar, atualizar e deletar vendas do banco de dados. 

- No fluxo de acesso do cliente, ele pode gerar uma compra, escolher um vendedor e acompanhar os status da compra. 
- No fluxo do vendedor é possível receber os pedidos feitos pelo cliente, visualizar detalhes e alterar os status do pedido.


Essa aplicação Full-Stack foi desenvolvida em grupo, como parte de um projeto avaliativo da trybe, onde simulamos o desenvolvimento de uma aplicação em um ambiente de trabalho, usando metodologias ágeis e participando de daily meetings. 

As pessoas que colaboraram com o desenvolvimento foram: 
- [Rafael Bonin](https://github.com/Rafael-Bonin)
- [Mauro Correia](https://github.com/Maurocorreia)
- [Bruce Alberto](https://github.com/Brucealberto)
- [Lucas Barbosa](https://github.com/N0T1V4G0)

## Layout web
### Fluxo do cliente:
<div>
<img width="48%" src="https://github.com/allpha23/assets/raw/main/deliveryApp/delivery-login.png">
<img width="48%" src="https://github.com/allpha23/assets/raw/main/deliveryApp/delivery-register.png">
</div>
<div>
<img width="48%" src="https://github.com/allpha23/assets/raw/main/deliveryApp/delivery-produtos.png">
<img width="48%" src="https://github.com/allpha23/assets/raw/main/deliveryApp/delivery-checkout.png">
</div>
<div>
<img width="48%" src="https://github.com/allpha23/assets/raw/main/deliveryApp/delivery-client-order-detail.png">
<img width="48%" src="https://github.com/allpha23/assets/raw/main/deliveryApp/delivery-client-order.png">
</div>

### Fluxo do vendedor:
<div>
<img width="48%" src="https://github.com/allpha23/assets/raw/main/deliveryApp/delivery-seller-order.png">
<img width="48%" src="https://github.com/allpha23/assets/raw/main/deliveryApp/delivery-seller-order-detail.png">
</div>


# Tecnologias utilizadas:
- React
- axios
- NodeJs
- Sequelize
- ExpressJS
- Mocha
- Chai
- Joi
- MySQL
- JWT


# Como executar o projeto

Pré-requisitos: 
- Sistema Operacional Distribuição Unix
- npm / yarn
- Docker-compose
- Node >= 16
- Docker
- Docker-compose versão >=1.29.2

```bash
# Clonar repositório
git clone git@github.com:allpha23/delivery-app.git

# Entrar na pasta do projeto
cd delivery-app

# Instalar dependências
npm install

# Execute o projeto
npm start

projeto estará em execução no endereço localhost:3000

# logar como cliente
email: zebirita@email.com
senha: $#zebirita#$

# logar como vendedor
email: fulana@deliveryapp.com
senha: fulana@123
```
