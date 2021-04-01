import React from 'react';

class Products extends React.Component {

    render() {
        const product = this.props.products
        
        return (
            <div>
                <img src={product.photos}/>
                <div>
                    <p>Nome: {product.name}</p>
                    <p>Descrição: {product.description}</p>
                    <p>Categoria: {product.category}</p>
                    <p>Preço: R${product.price},00</p>
                    <button onClick={() => this.props.onClickAddCart(product)}> Add ao carrinho</button>
                    <hr />
                </div>

            </div>
        )
    }
}

export default Products