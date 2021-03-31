import React from 'react';

class Cart extends React.Component {

    totalValue = () => {
        let totalValue = 0
        let test = this.props.quantity
        this.props.cartList.forEach((item) => {
            totalValue += item.price * test
        });

        return totalValue.toFixed(2)
    }

    // valueList = (total) => {
    //     let value = 0
    //     for (let i =  0; i < total.length; i++) {
    //         value += total[i].price * total[i].quantity
    //     }
    //     return value
    // }

    buttonBuy = () => {
        alert("Compra realizado com sucesso!")
    }

    render() {
        console.log(this.props.cartList)
        const productsCart = this.props.products
        // const totalValue = this.valueList(this.props.cartList)

        return (
            <div>
                {productsCart.map((p) => {
                    return (
                    <div key={p.id}>
                        <p>Nome: {p.name} </p>
                        <p>Preço: {p.price} </p>
                        <button onClick={() => this.onClickSum()}>+</button>
                        <p>quantidade: {this.props.quantity}</p>
                        <button onClick={() => this.onClickSub()}>-</button>
                        <hr />

                        {<h3> Total  {this.totalValue()} </h3>}

                        <button onClick={this.buttonBuy}>comprar</button>
                    </div>
                    )
                })
                }

            </div>
        )
    }
}

export default Cart
