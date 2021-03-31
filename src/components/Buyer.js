import axios from 'axios';
import React from 'react';
import HeaderBuyer from './HeaderBuyer'
import { baseUrl, categories } from '../parameters'
import Products from './Products';
import Cart from './Cart'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
// import styled from 'styled-components';

class Buyer extends React.Component {

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



    addCart = (id) => {
        const cartList = this.state.products.map((p) => {
            if (p.id === id) {
                const cartQuantity = this.state.quantity++
                const productCart = this.state.productsCart.push(p.id)
                return (productCart, cartQuantity)
            } else {
                return p
            }
        })
        this.setState({ productsCart: cartList })
    }

    // deleteProductCart = (id) => {
    //     let deleteProductCart = [...this.state.cartList];
    //     let productCart = this.state.cartList.findIndex(
    //         (p) => p.id === id
    //     );

    //     deleteProduct.splice(productCart, 1);
    //     this.setState({ cartList: deleteProduct });
    // };


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
            <div>

                <div>
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

                    />
                    {this.state.openCart && (
                        <Cart
                            productsCart={this.state.productsCart}
                            quantity={this.state.quantity}
                        // deleteProductCart={this.deleteProductCart}
                        />
                    )}

                </div>

                <div>
                    {filter.map((p) => {
                        return <Products
                            addCart={this.addCart}
                            quantity={this.state.quantity}
                            products={p}
                        />
                    }

                    )}

                </div>

            </ div>


        );
    }
}
export default Buyer;