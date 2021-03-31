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
                    <p>Pagamento: {product.paymentMethod}</p>
                    <p>Parcelamento:{product.installments}</p>
                    <hr />
                </div>

            </div>
        )
    }
}

export default Products