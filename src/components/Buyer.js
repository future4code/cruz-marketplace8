import axios from 'axios';
import React from 'react';
import HeaderBuyer from './HeaderBuyer'
import { baseUrl, categories } from '../parameters'
import Products from './Products';
import Cart from './Cart'
import Footer from './Footer'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
// import { styled } from '@material-ui/core/styles';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import HeadsetIcon from '@material-ui/icons/Headset';
import IconButton from '@material-ui/core/IconButton';
import ButtonOpenSeller from './ButtonOpenSeller';
import styled from 'styled-components';
import { CommentSharp } from '@material-ui/icons';

const BuyerContainer = styled.div`
    width: 100vw;
`

const ContainerProduct = styled.div`
    justify-Content: center;
    margin-Left: 10%;
    margin-right: 10%;
    width: 80%;
    height:  auto;
    display: flex;
    flex-Wrap: wrap;
`
const DivIcons = styled('div')({
    position: 'fixed',
    right: '40px',
    bottom: '20px',
});


export default class Buyer extends React.Component {

    state = {
        products: [],
        productsCart: [],
        inputSearch: '',
        order: 'Crescente',
        category: '',
        openCart: false,
        quantity: 0,
    }

    componentDidMount = () => {
        this.getProduct()
        const cartProductList = JSON.parse(localStorage.getItem("carrinho"))
    
        cartProductList && this.setState({
            productsCart: cartProductList,
        });
    }

    getProduct = async () => {
        try {
            const res = await axios.get(baseUrl)
            this.setState({ products: res.data.products })
        } catch (err) {
            alert("Não foi possível carregar a lista de produtos")
        }
    }

    onChangeOrder = (e) => {
        this.setState({ order: e.target.value })
    }

    onChangeSearch = (e) => {
        this.setState({ inputSearch: e.target.value });
    };

    onChanceCategory = (e) => {
        this.setState({ category: e.target.value })
    }

    onClickOpenCart = () => {
        this.setState({ openCart: !this.state.openCart })
    }

    orderProduct = () => {
        const orderProduct = this.state.products.sort((x, y) =>
            this.state.order === 'Crescente' ? x.price - y.price : y.price - x.price
        )
        return orderProduct;
    }

    filterProducts = () => {
        const filteredList = this.state.products
            .filter((p) => {
                if (this.state.inputSearch) {
                    return (this.state.inputSearch && p.name.includes(this.state.inputSearch))
                } else {
                    return true
                }
            })

            .filter((p) => {
                if (this.state.category) {
                    return (this.state.category && p.category.includes(this.state.category))
                } else {
                    return true
                }
            })

        return (
            filteredList
        )
    }

    addCart = (addProduct) => {
        let newCartList = [...this.state.productsCart];
        let productShow = this.state.productsCart.findIndex(
            (product) => product.id === addProduct.id
        );
        if (productShow > -1) {
            newCartList[productShow].quantidade++;
        } else {
            addProduct.quantidade = 1;
            newCartList.push(addProduct);
        }
        this.setState({ productsCart: newCartList });
    };

    deleteProductCart = (id) => {
        let deleteProduct = [...this.state.productsCart];
        let productCart = this.state.productsCart.findIndex(
            (p) => p.id === id
        );
        deleteProduct.splice(productCart, 1);
        this.setState({ productsCart: deleteProduct });
    };


    render() {
        console.log(this.state.productsCart)
        let orderProducts = this.orderProduct()

        const categoryOptions = categories.map((p) => {
            return (
                <option>
                    {p}
                </option>
            )
        })

        const filter = this.filterProducts()


        return (

                <BuyerContainer>
        
                    <HeaderBuyer
                        onChanceCategory={this.onChanceCategory}
                        onChangeOrder={this.onChangeOrder}
                        orderProducts={orderProducts}
                        inputSearch={this.state.inputSearch}
                        onChangeSearch={this.onChangeSearch}
                        inputSearch={this.inputSearch}
                        filterProducts={this.filterProducts}
                        categoryOptions={categoryOptions}
                        onClickOpenCart={this.onClickOpenCart}
                        openCart={this.state.openCart}
                        productsCart={this.state.productsCart}
                  
                    /> 
                    
                    {this.state.openCart ? (
                        <Cart
                            productsCart={this.state.productsCart}
                            quantity={this.state.quantity}
                            deleteProductCart={this.deleteProductCart}
                            addCart={this.addCart}
                        />
                    ) : (
                        <ContainerProduct>
                            {filter.map((p) => {
                                return <Products
                                    onClickAddCart={this.addCart}
                                    products={p}
                                />
                            }

                            )}
        

                        </ContainerProduct>
                    )
                    
                    }
                    <DivIcons>
                        <a href = "https://forms.gle/2VCwNryJFzLYRnW39">
                            <IconButton  
                                color="primary"
                                fontSize="large" 
                                >
                                <HeadsetIcon/>
                            </IconButton>
                        </a>
                        
                        <IconButton  
                            color="primary" 
                            fontSize="large"
                            href="#top"
                            >
                            <ArrowUpwardSharpIcon/>
                        </IconButton>
                    </DivIcons>
                        <Footer>
                        </Footer>
                   
                </ BuyerContainer>

        );
    }
}
