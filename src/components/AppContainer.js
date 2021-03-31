import React, { Component } from 'react';
import Seller  from './Seller';
import styled from 'styled-components'


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
      // case 'Buyer':
      //   return <Buyer />
      case 'Seller':
        return <Seller />
      default:
        return<div></div>
    }
  }

  render() {
    return (
      <div>
      {/* <button onClick={this.buyerPage}>Sou Comprador</button>
      <button onClick={this.sellerPage}>Sou Vendedor</button> */}
      {/* {this.renderPage()} */}
      <Seller />
      </div>
    )
  }
}
