import React from 'react';
import CartItens from './CartItens'
import { installments, paymentMethod } from '../parameters'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const MyCart = styled.div`
height: max-content;
display: grid;
grid-template-rows: 80px auto;
grid-template-columns: 80vw 12vw;
min-height: 480px;
text-align: center;
margin-bottom: 2%;
`
const H1 = styled.h1`
grid-row: 1/2;
grid-column:1/3;
`
const CartItemList = styled.div`
display:grid;
width: 100%;
padding-left: 2%;
grid-row: 2/3;
grid-column:1/2;
`
const Payment = styled.div`
display:grid;
grid-row: 2/3;
grid-column:2/3;
display: flex;
flex-direction: column;
align-items: center;
`
const BuyBuyBuy = styled.div`
position: fixed;
margin-top: 6%;
`
const TypePayment = styled.select`
width: 100%;
`
const ButtonConfirmBuy =styled.div`
margin-top: 10px;
`
export default class Cart extends React.Component {
    state = {
        payment: ''
    }
    onChancePayment = (e) => {
        this.setState({ payment: e.target.value })
    }
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
        alert("Parabéns! Compra realizada com sucesso!")
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
            <MyCart>
                <H1>Meu Carrinho</H1>
                <CartItemList>
                <CartItens 
                productList={this.props.productsCart}
                deleteProductCart={this.props.deleteProductCart}
                />
               </CartItemList>
                <Payment>
                    <h3>Valor total :
                        <br/> R$ {Number(this.valueList()).toFixed(2).replace('.', ',')} {" "}</h3>
                    <BuyBuyBuy>
                        <TypePayment onChange={this.onChancePayment}>
                            <option disabled selected >
                                Tipo de Pagamento
                            </option>
                            {paymentMethodOptions}
                        </TypePayment>
                        {this.paymentForm()}
                        <ButtonConfirmBuy>
                            <Button onClick={this.buttonBuy} variant="contained" color="primary" disableElevation>
                                Finalizar<br/> Compra
                            </Button>
                        </ButtonConfirmBuy>
                    </BuyBuyBuy>
                </Payment>
            </MyCart>
        )
    }
}