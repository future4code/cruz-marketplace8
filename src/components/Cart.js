import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {

    state = {
        productList: [...this.props.productsCart]
    }

    products = () => { this.setState({ productList: [...this.props.productsCart] }) }

    valueList = () => {
        const products = this.props.productsCart
        let value = 0;
        if (products.length <= 0) {
            alert('Seu carrinho está vazio')
        } else {
            for (let i = 0; i <= products.length; i++) {
                console.log(products[i].price)
                value = value + products[i].price * products[i].quantidade;
            }
             
            return value
        }
    }

    buttonBuy = () => {
        alert("Compra realizado com sucesso!")
    }

    render() {
        console.log(this.state.productList)

        return (
            <div>
                <h1>Carrinho</h1>
                {this.state.productList.map((p) => {
                    return (
                        <div key={p.id}>
                            <button onClick={() => this.props.deleteProductCart(p.id)}> Excluir </button>

                            <p>Nome: {p.name} </p>
                            <p>Preço: {p.price} </p>
                            <p>quantidade: {p.quantidade}</p>
                            <p>
                                Valor do produto: R$  {Number(p.price * p.quantidade)
                                    .toFixed(2)
                                    .replace('.', ',')}
                            </p>
                            <hr />
                            <button onClick={this.buttonBuy}>comprar</button>
                        </div>
                    )
                })
                }
                <div>

                    <h3>Valor total : R$ {Number(this.valueList()).toFixed(2).replace('.', ',')} {" "}</h3>

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
