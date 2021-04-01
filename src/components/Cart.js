import React from 'react';

class Cart extends React.Component {

    state = {
        productList: []
    }



    // totalValue = () => {
    //     let totalValue = 0
    //     let test = this.props.quantity
    //     this.props.cartList.forEach((item) => {
    //         totalValue += item.price * test
    //     });

    //     return totalValue.toFixed(2)
    // }

    valueList = () => {
        const products = this.setState({productList: [...this.props.productsCart]})
        if(products.length !== 0){
        let value = 0;
        console.log(products.length)
        for (let i = 0; i <= products.length; i++) {
          console.log(products[i].price)
            value += products[i].price * products[i].quantidade;
        }
        return value;
      } else { alert( 'Seu carrinho está vario')}
    }

    // valueList = () => {
        
    //     if(this.props.productsCart.length !== 0){
    //     let value = 0;
    //     console.log(this.props.productsCart.length)
    //     for (let i = 0; i <= this.props.productsCart.length; i++) {
    //       console.log(this.props.productsCart[i].price)
    //         value += this.props.productsCart[i].price * this.props.productsCart[i].quantidade;
    //     }
    //     return value;
    //   } else { alert( 'Seu carrinho está vario')}
    // }

    buttonBuy = () => {
        alert("Compra realizado com sucesso!")
    }

    render() {
        return (
            <div>
                <h1>Carrinho</h1>
                {this.state.productList.map((p) => {
                    return (
                    <div key={p.id}>
                         <button onClick={() => this.props.deleteProductCart(p.id)}> Excluir </button>

                        <p>Nome: {p.name.toUpperCase()} </p>
                        <p>Preço: {p.price} </p>
                        <p>quantidade: {p.quantidade}</p>
                        <hr />

                        <p> 
                        Valor do produto: R$  {Number(p.price * p.quantidade)
                        .toFixed(2)
                        .replace('.',',')}
                         </p>

                        <button onClick={this.buttonBuy}>comprar</button>
                    </div>
                    )
                })
            }
                <div>

            <h3>Valor total : R$ {Number(this.valueList).toFixed(2).replace('.',',')} {" "}</h3>

            <select>
              <option disabled selected>
                Tipo de Pagamento
              </option>
              <option>Boleto</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
              <option>Pix</option>
            </select>
          </div>

          <div>
            <select>
              <option disabled selected>
                Parcelas
              </option>
              <option>2x</option>
              <option>3x</option>
              <option>4x</option>
              <option>5x</option>
              <option>6x</option>
            </select>
          </div>

            </div>
        )
    }
}

export default Cart
