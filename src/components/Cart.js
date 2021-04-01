import React from 'react';
import { installments, paymentMethod } from '../parameters'


class Cart extends React.Component {

    state = {
        productList: [...this.props.productsCart],
        payment: ''
    }

    onChancePayment = (e) => {
        this.setState({ payment: e.target.value })
    }

    products = () => { this.setState({ productList: [...this.props.productsCart] }) }

    valueList = () => {
        const products = this.props.productsCart
        let value = 0;
        if (products.length <= 0) {
            alert('Seu carrinho está vazio')
        } else {
            for (let i = 0; i < products.length; i++) {
                value = value + products[i].price * products[i].quantidade;
            }

            return value
        }
    }

    buttonBuy = () => {
        alert("Compra realizado com sucesso!")
    }

    paymentForm = () => {
        if (this.state.payment === 'Cartão de Crédito') {
            return (
                <div>
                    <select>
                        <option disabled selected>
                            Parcelas
                        </option>
                        {installments.map((i) => {
                            return (
                                <option>
                                    {i}
                                </option>
                            )
                        })}
                    </select>
                </div>
            )
        }
    }

    render() {

        const paymentMethodOptions = paymentMethod.map((p) => {
            return (
                <option value={p}>
                    {p}
                </option>
            )
        })


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
                        </div>
                    )
                })
                }
                <div>

                    <h3>Valor total : R$ {Number(this.valueList()).toFixed(2).replace('.', ',')} {" "}</h3>

                    <select onChange={this.onChancePayment}>
                        <option disabled selected >
                            Tipo de Pagamento
                        </option>
                        {paymentMethodOptions}
                    </select>
                    {this.paymentForm()}
                </div>
                <button onClick={this.buttonBuy}>comprar</button>

            </div>
        )
    }
}

export default Cart
