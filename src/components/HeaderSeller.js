import React from 'react';
import styled from 'styled-components';

const DivHeader = styled.div`
background-color: #F29803;
display: flex;
justify-content:center;
width: 100vw;
height: 10vh; 
`

const Ploja = styled.p`
display:flex;
flex-direction:column;
color:white;
justify-content:center;
align-items:center;
align-self:center;
font-size: 25px;
`

export default class HeaderSeller extends React.Component {


    render () {
        return (
        <DivHeader>
            <Ploja><b>Minha lojinha</b></Ploja>
            {/* <button>Ir para página de compra</button> */}
        </DivHeader>
        )
    }
}