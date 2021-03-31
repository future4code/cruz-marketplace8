import React, { Component } from 'react'
import Buyer from './Buyer'
import Seller from './Seller'


export class AppContainer extends Component {
  state = {
    page: 'AppContainer'
  }

  page = "appcontainer"
  buyerPage = () => {
    if (this.state.page === "AppContainer") {
      this.setState({ page: 'Buyer' })
    }
  }

  sellerPage = () => {
    this.setState({ page: 'Seller' })
    console.log(this.state.page)
  }

  renderPage = () => {
    debugger
    switch (this.state.page) {
      case 'AppContainer':
        return <AppContainer />
      case 'Buyer':
        return <Buyer />
      case 'Seller':
        return <Seller />
      default:
        return<div></div>
    }
  }

  buyerPage = () => {
    this.setState({ page: 'Buyer' })
  }

  sellerPage = () => {
    this.setState({ page: 'Seller' })
  }


  render() {
    const openPage = () => {
      if (this.state.page ==='AppContainer' ) {
        return (
          <div>
            <button onClick={this.buyerPage}>Sou Comprador</button>
            <button onClick={this.sellerPage}>Sou Vendedor</button>
          </div>
        )
      } else if (this.state.page === 'Buyer') {
        return <button onClick={this.sellerPage}>Ir para a Lojinha</button>
      } else {
        return <button onClick={this.buyerPage}> Quero comprar! </button>
      }
    }
        return (
          <div>
            {openPage()}       
            {this.renderPage()}
    
          </div>
        )
      }
}
