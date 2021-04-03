import React from 'react';
import styled from 'styled-components';
import logo from './img/logo.png';
import IconButton from '@material-ui/core/IconButton';
import ButtonCart from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonCartIcon from '@material-ui/icons/ShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = styled.div`
    background-color: #f2970b;
    position: flex;
    bottom: 0;
    width: 100vw;
    height: 60px;
    text-align: center;
    align-items: center;
`


export default class FooterAll extends React.Component {
    

    render() {

        return (
            <Footer>
                < a href='https://pt-br.facebook.com/' target="_blank">
                    <IconButton  
                    color="primary" 
                    aria-label="Face Book"
                    style={{ fontSize: 20 }} >
                        <FacebookIcon/>
                    </IconButton>
                </a>
                <a href='https://www.instagram.com/' target="_blank">
                    <IconButton  
                    color="primary" 
                    aria-label="Instagram"
                    style={{ fontSize: 20 }} >
                        <InstagramIcon/>
                    </IconButton>
                </a>
                 <a href='https://br.pinterest.com/' target="_blank">
                    <IconButton  
                        color="primary" 
                        aria-label="Pinterest"
                        style={{ fontSize: 20 }} >
                        <PinterestIcon/>
                    </IconButton>
                </a>
                <a href='https://www.youtube.com/'target="_blank">
                    <IconButton  
                    color="primary" 
                    aria-label="Youtube"
                    style={{ fontSize: 20 }}>
                        <YouTubeIcon/>
                    </IconButton>
                </a>
            </Footer>
            
        )
    }
}