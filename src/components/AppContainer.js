import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Buyer from './Buyer'
import Seller from './Seller'

const DivHeader = styled.div`
background-color: #F29803;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows:1fr;
justify-content:center;
width: 100vw;
height: 10vh; 
`

const Ploja = styled.p`
    color:white;
    align-self:center;
    font-size: 25px;
    align-items:center;
    justify-self:center;
    grid-column:2;
`

const DivBotton = styled.div`
    margin-top:20px;
    margin-right:50px;
    justify-self:end;
    grid-column:3;
`

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
    const openPage = () => {
      if (this.state.page ==='AppContainer' ) {
        return (
          <div>
            <button onClick={this.buyerPage}>Sou Comprador</button>
            <button onClick={this.sellerPage}>Sou Vendedor</button>
          </div>
        )
      } else if (this.state.page === 'Buyer') {
        return <DivHeader>
                  <DivBotton>
                      <Button onClick={this.sellerPage} variant="contained" color="primary" href="#contained-buttons">
                        Ir para Lojinha
                      </Button>
                  </DivBotton> 
               </DivHeader>
      } else {
        return (
            <DivHeader>
                 <Ploja><b>Minha lojinha</b></Ploja>
                  <DivBotton>
                      <Button onClick={this.buyerPage} variant="contained" color="primary" href="#contained-buttons">
                        Quero Comprar
                      </Button>
                  </DivBotton> 
            </DivHeader>
        )
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
