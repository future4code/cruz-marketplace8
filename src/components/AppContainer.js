import React, { Component } from 'react'
import Buyer from './Buyer'
import Seller from './Seller'

export class AppContainer extends Component {
  state = {
    page: 'AppContainer'
  }

  renderPage = () => {
    switch (this.state.page) {
      case 'Buyer':
        return <Buyer />
      case 'Seller':
        return <Seller />
    }
  }

  buyerPage = () => {
    this.setState({ page: 'Buyer' })
  }

  sellerPage = () => {
    this.setState({ page: 'Seller' })
  }


  render() {
    return (
      <div>
        <button onClick={this.buyerPage}>Sou Comprador</button>
        <button onClick={this.sellerPage}>Sou Vendedor</button>

        {this.renderPage()}
      </div>
    )
  }
}
