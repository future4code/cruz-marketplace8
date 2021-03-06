import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Buyer from './Buyer'


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

export default class HeaderSeller extends React.Component {
    state = {
        page:''
    }
    
    handleButton = () => {
        this.setState({page:"Buyer"})
    }

    render () {

        const renderPage = () => {
            if (this.state.page === 'Buyer') {
                return(<div>
                    <Buyer/>
                </div>)
            } else {
                return (
                    <DivHeader>
                        <Ploja><b>Minha lojinha</b></Ploja>
                        <DivBotton>
                            <Button onClick={this.handleButton} variant="contained" color="primary" href="#contained-buttons">
                             Ir para Loja
                            </Button>
                        </DivBotton> 
                    </DivHeader>
                    )
            }
        }
        return (<div>{renderPage()}</div>)
    }
}