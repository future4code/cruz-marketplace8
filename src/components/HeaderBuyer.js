import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export class HeaderBuyer extends React.Component {

    // static propTypes = {
    //     onClickOpenCart: PropTypes.func.isRequired,
    //     productsCart: PropTypes.array
    // };

    // static defaultProps = {
    //     productsCart: []
    //   };
  

    render() {

        const button = this.props.openCart ? (
            <button onClick={this.props.onClickOpenCart}>Continuar comprando</button>
        ) : (
        <button onClick={this.props.onClickOpenCart}>Carrinho</button>)

        return (
            <div>
                <div>

                    <label>Ordenar por: </label>
                    <select onChange={this.props.onChangeOrder}>
                        <option value="Crescente">Menor Preço </option>
                        <option value="Decrescente">Maior Preço </option>
                    </select>
                </div>
                <div>
                    <select onChange={this.props.onChanceCategory}>
                        <option>Categoria</option>
                        {this.props.categoryOptions}
                    </select>
                    <input
                        type='text'
                        value={this.props.inputSearch}
                        placeholder="Buca por nome"
                        onChange={this.props.onChangeSearch}
                    >
                    </input>
                </div>
                <div>
                    {button}
                </div>

            </div >
        )
    }
}
export default HeaderBuyer;