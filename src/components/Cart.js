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
                console.log(products[i].price)
                value = value + products[i].price * products[i].quantidade;
            }

            return value
        }
    }

    buttonBuy = () => {
        alert("Compra realizado com sucesso!")
    }

    installmentsOptions = () => {
        installments.map((i) => {
            return (
                <option>
                    {i}
                </option>
            )
        })
    }

    paymentForm = () => {
        if (this.state.payment === 'Cartão de Crédito') {
            return (
                <div>
                    <select>
                        <option disabled selected>
                            Parcelas
          </option>
                        {this.installmentsOptions}
                    </select>
                </div>
            )
        }
    }

    render() {
        console.log(this.state.payment)

        const paymentMethodOptions = paymentMethod.map((p) => {
            return (
                <option>
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
                            <button onClick={this.buttonBuy}>comprar</button>
                        </div>
                    )
                })
                }
                <div>

                    <h3>Valor total : R$ {Number(this.valueList()).toFixed(2).replace('.', ',')} {" "}</h3>

                    <select onChange={this.state.onChancePayment}>
                        <option disabled selected value={paymentMethodOptions}>
                            Tipo de Pagamento
                        </option>
                        {paymentMethodOptions}
                    </select>
                    {this.paymentForm}
                </div>

                {/* <div>
                <select>
                    <option disabled selected>
                        Parcelas
              </option>
                    {installmentsOptions}
                </select>
            </div>
                 */}

            </div>
        )
    }
}

export default Cart
