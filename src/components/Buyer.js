import axios from 'axios';
import React from 'react';
import HeaderBuyer from './HeaderBuyer'
import { baseUrl } from '../parameters'
import Products from './Products';
// import styled from 'styled-components';

class Buyer extends React.Component {

    state = {
        products: [],
        productsFiltered: [],
        inputSearch: '',
        order: 'Crescente',
        category: '',
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
                return (this.state.inputSearch && p.name.toLowerCase().includes(this.state.inputSearch))
            } else {
                return true
            }
        })

        .filter((p) => {
            if (this.state.category) {
                return(this.state.category && p.category.includes(this.state.category))
            } else {
                return true
            }
        })

        return (
            filteredList
        )}


    render() {

        let orderProducts = this.orderProduct()

        const categoryOptions = this.state.products.map((p) => {
            return (
                <option key={p.id}>
                    {p.category}
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
                    />

                </div>

                <div>
                    {filter.map((p) => {
                        return <Products 
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