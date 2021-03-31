import React from 'react';

class Cart extends React.Component {
    valueList = (total) => {
        let value = 0
        for (let i =  0; i < total.length; i++) {
            value += total[i].price * total[i].quantity
        }
        return value
    }

    buttonBuy = () => {
        alert("Compra realizado com sucesso!")
    }

    render() {
        productsCart = this.props.this.props.cartList
        totalValue = this.valueList(this.props.cartList)
        
        return (
            <div>
                <div>
                    <p>Nome: {productsCart.name}</p>
                    <p>Preço: R${productsCart.price},00</p>
                    <button onClick={this.buttonBuy}>comprar</button>
                    <hr />
                </div>

            </div>
        )
    }
}

export default Cart