import React from 'react';

class ItemCarrinho extends React.Component {
    
    componentDidUpdate() {
        localStorage.setItem('carrinho', JSON.stringify(this.props.productsCart))
    };
    
    render() {
        return (
            <div>
                {this.props.productList.map((p) => {
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
                        </div>
                    )
                    })
                }
            </div>

        );
    }
}

export default ItemCarrinho;