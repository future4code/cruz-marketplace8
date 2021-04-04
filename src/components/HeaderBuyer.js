import React from 'react';
import styled from 'styled-components';
import logo from './img/logo.png';
import IconButton from '@material-ui/core/IconButton';
import ButtonCart from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import ButtonOpenSeller from './ButtonOpenSeller';

const Header = styled.div`
    background-color: #f3940c;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 10%;
    height: 120px;
 
`
const ImgLogo = styled.img`
    grid-column: 1/2;
    margin-left:40px;
    margin-top:40px;
    width: 180px;
    height:auto;
    position: relative;
`

const DivCenter = styled.div`
padding-top: 20px;
display: grid;
height: 120px;
grid-template-columns: 1fr 2fr;

`
const Paper = styled.div`
grid-column: 1/2;
display:flex;
flex-direction: column-reverse;
background-color: white;
margin-bottom: 8px;
margin-top: 40px;
padding:0 20px;
height: 28px;
width: 340px;
border-radius: 20px;

`

const DivFiltro = styled.div`
    justify-items: left;
    margin-top: 8px;
    grid-column: 2/3;
    display: flex;
    position: relative;
    

`
const DivOrdenar = styled.div`
display: flex;
flex-wrap: wrap;
width: 100px;
height: 60px;
margin-left: 10%;
color:white;
    select{
        border-radius: 20px;
        padding: 0 25px
    }
`


const DivCategoria = styled.div`
display: flex;
flex-wrap: wrap;
width: 100px;
height: 60px;
margin-left: 10%;
color:white;
    select{
        border-radius: 20px;
        padding: 0 25px
    }
`


const DivButtonCart = styled.div`
    
    display: flex;
    position:absolute;
    right: 230px;
    top:20px;
`

const DivButton = styled.div`
    
    display: flex;
    margin-top:30px;
`

const PCart = styled.p`
margin: 12px; 
color:white;
font-size: 12px;
line-height: 0.8;`

export default class HeaderBuyer extends React.Component {
    

    render() {

        const button = this.props.openCart ? (
            <DivButton>
                <Button onClick={this.props.onClickOpenCart}>Continuar comprando</Button>
            </DivButton>
            
        ) : (
        
        <IconButton onClick={this.props.onClickOpenCart}>
            <PCart> <ButtonCartIcon  color="primary" fontSize="large"/>
            <br/> Carrinho</PCart>
        </IconButton>
    
        )
        return (
            <Header>
                <ImgLogo src ={logo}/>
                <DivCenter>
                    <Paper >
                        <TextField  
                            margin ="none"
                            fullWidth = "true"
                            size ="small"
                            label="Pesquisar Produto" 
                            type='text'
                            value={this.props.inputSearch}
                            onChange={this.props.onChangeSearch}
                            >
                        </TextField>
                    </Paper>
                    <DivFiltro>
                        <DivOrdenar>
                            <label>Ordenar por: </label>
                            <select onChange={this.props.onChangeOrder}>
                                <option value="Crescente">Menor Preço </option>
                                <option value="Decrescente">Maior Preço </option>
                            </select>
                        </DivOrdenar>
                        <DivCategoria>
                        <label>Buscar por: </label>
                            <select onChange={this.props.onChanceCategory}>
                                <option>Categoria</option>
                                {this.props.categoryOptions}
                            </select>
                    
                        </DivCategoria>
                    </DivFiltro>
                </DivCenter>
                     
                <DivButtonCart>
                    {button}
                </DivButtonCart>   
                
            </Header >
        )
    }
}