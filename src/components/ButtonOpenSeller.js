import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const DivBotton = styled.div`
    
`


export default class ButtonOpenSeller extends React.Component {
    render () {
        return (
            <DivBotton >
                        <Button  onClick={this.props.buttonSellerPage} variant="contained" color="primary" href="#contained-buttons">
                            Ir para Lojinha
                        </Button>
            </DivBotton> 
        )
    }
}