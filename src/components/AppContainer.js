import React, { Component } from 'react'
import styled from 'styled-components';
import Buyer from './Buyer'
import Seller from './Seller'
import Button from '@material-ui/core/Button';
import logo from './img/logo.png'
import HeaderBuyer from './HeaderBuyer'
import ButtonOpenSeller from './ButtonOpenSeller';

const DivAppContainer = styled.div `
  background-color: #F29803;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  max-width:100vw;
  height: 100vh;
  margin-top:0px;

`
const BrandingDiv = styled.div `
  color:white;
  margin-top: 10px;
  width: 250px;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom:50px;
  position:absolute;
  top:80px;
  
  img{
    margin-bottom:0px;
    
  }

`
const BottonAppContainer = styled.div `
  text-align:center;
  width: 450px;
  height: 100px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
` 

const DivHeader = styled.div`
background-color: #F29803;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows:1fr;
justify-content:center;
width: 100vw;
height: 120px; 
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
    margin-top:50px;
    margin-right:50px;
    justify-self:end;
    grid-column:3;
    
`
const DivButtonSeller = styled.div`
    width: 15%;
    background-color: #F29803;
    align-items:flex-end;
    display:flex;
    position:absolute;
    right: 1px;
    top:10px;
`
const ImgLogo = styled.img`
    grid-column: 1/2;
    margin-left:40px;
    margin-top:10px;
    width: 180px;
    height:auto;
    position: relative;
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
    console.log ("Clicou")
  }

  render() {
    const openPage = () => {
      if (this.state.page ==='AppContainer' ) {
        return (
          <DivAppContainer>

            <BrandingDiv>
              <img src= {logo}/>
              <p>Personalização na sua mão</p>
            </BrandingDiv>

            <BottonAppContainer>
              <Button onClick={this.buyerPage} variant="contained"
              color="primary" href="#contained-buttons"
              >
              Sou Comprador
              </Button>

              <Button onClick={this.sellerPage} variant="contained" color="primary" href="#contained-buttons">
              Sou Vendedor
              </Button>
            </BottonAppContainer>
            
          </DivAppContainer>
         
        )
      } else if (this.state.page === 'Buyer') {
        return (
          
          <DivButtonSeller>
              <Button  onClick={this.sellerPage} variant="contained" color="primary" href="#contained-buttons">
                  Minha Lojinha
              </Button>
          </DivButtonSeller>
        
      )
        
      } else {
        return (
            <DivHeader>
                <ImgLogo src ={logo}/>
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
