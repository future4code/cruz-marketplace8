import React from 'react';
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


const CartTotalItem = styled.div`
height: max-content;
width: 90%;
display:flex;
display: inline;
`

const CardCart =styled.div`
margin-top: 8px;
top: 0;
position: relative;
display: grid;
grid-template-columns: 8% 10% 10% 16% 32% 12% 12% ;
height: 100px;
width:100%;
box-shadow: 2px 2px 4px #5CE1E6;
`
const DeleteItems =styled.div`
justify-items: center;
margin-top:30%;
grid-column: 1/2;
line-height: 1;
`
const QuantItems =styled.div`
grid-column: 2/3;
line-height: 1;
`
const PhotoItem = styled.div`
height: 80px;
width: 70px;
grid-column: 3/4;
line-height: 1;
`
const NameItem =styled.div`
grid-column: 4/5;
line-height: 1;
`
const DescriptionItem =styled.div`
grid-column: 5/6;
line-height: 1;
`
const ValueItems =styled.div`
grid-column: 6/7;
line-height: 1;
`
const TotalValue = styled.div`
grid-column: 7/8;
line-height: 1;
`
const ItemTitle = styled.p `
color: blue;
`
const ItemSubtitle =styled.p`
font-size: 14px;
font-weight: bold;`


class CartItens extends React.Component {
    componentDidUpdate() {
        localStorage.setItem('carrinho', JSON.stringify(this.props.productsCart))
    };
    render() {
        return (
            <CartTotalItem>
                    {this.props.productList.map((p) => {
                        return (
                            <CardCart key={p.id}>
                                 <DeleteItems>
                                    <IconButton onClick={() => this.props.deleteProductCart(p.id)}>
                                        <DeleteForeverOutlinedIcon  color="disable" fontSize="small"/>
                                    </IconButton>
                                </DeleteItems>
                                <QuantItems>
                                    <ItemTitle>
                                        Quant: 
                                    </ItemTitle>
                                    <ItemSubtitle>
                                        {p.quantidade}
                                    </ItemSubtitle>
                                </QuantItems>
                                <PhotoItem>
                                <img src={p.photos} height="100%" width="100%"/>
                                </PhotoItem>
                                <NameItem>
                                    <ItemTitle> 
                                        Nome: 
                                    </ItemTitle>
                                    <ItemSubtitle>
                                        {p.name}
                                    </ItemSubtitle>
                                </NameItem>
                                <DescriptionItem>
                                    <ItemTitle> 
                                            Decrição: 
                                        </ItemTitle>
                                        <ItemSubtitle>
                                            {p.description}
                                        </ItemSubtitle>
                                </DescriptionItem>
                                <ValueItems>
                                    <ItemTitle>
                                        Preço : 
                                    </ItemTitle>
                                    <ItemSubtitle>
                                        R$ {Number (p.price).toFixed(2)
                                        .replace('.', ',')}
                                    </ItemSubtitle>
                                </ValueItems>
                                <TotalValue>
                                    <ItemTitle>
                                        Valor: 
                                    </ItemTitle>
                                    <ItemSubtitle>
                                        R$  {Number(p.price * p.quantidade)
                                        .toFixed(2)
                                        .replace('.', ',')}
                                    </ItemSubtitle>
                                </TotalValue>
                                <hr />
                                </CardCart>
                        )
                        })
                    }
            </CartTotalItem>
        );
    }
}
export default CartItens;