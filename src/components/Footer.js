import React from 'react';
import styled from 'styled-components';
import logo from './img/logo.png';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = styled.div`
    background-color: #f2970b;
    position: flex;
    bottom: 0;
    width: 100vw;
    height: 20vh;
    text-align: center;
    align-items: center;
    position: relative;
`
const DivIcons = styled.div`
    a:visited, a:active, a:link {
        text-decoration: none;
        color:#5CE2E7;
        width: 60px;
    }
    a:hover {
        color:white;
    }
    padding-top: 20px;
    display: flex;
    flex-direction:row;
    justify-content: center;
`
const CopyrightContainer = styled.div `
    img{
        width: 80px;
    }
    p {
        margin-top: 0px;
    }
    margin-top: 5px;
`


export default class FooterAll extends React.Component {
    

    render() {

        return (
            <Footer>
                <DivIcons>
                    < a href='https://pt-br.facebook.com/' target="_blank">
                        <IconButton  
                        color="primary" 
                        aria-label="Face Book">
                            <FacebookIcon style ={{ fontSize:40}}/>
                        </IconButton>
                    </a>
                    <a href='https://www.instagram.com/' target="_blank">
                        <IconButton  
                        color="primary" 
                        aria-label="Instagram"
                        >
                            <InstagramIcon style ={{ fontSize:40}}/>
                        </IconButton>
                    </a>
                    <a href='https://br.pinterest.com/' target="_blank">
                        <IconButton  
                            color="primary" 
                            aria-label="Pinterest"
                            >
                            <PinterestIcon style ={{ fontSize:40}}/>
                        </IconButton>
                    </a>
                    <a href='https://www.twitter.com' target="_blank">
                        <IconButton  
                            color="primary" 
                            aria-label="Twitter"
                            >
                            <TwitterIcon style ={{ fontSize:40}}/>
                        </IconButton>
                    </a>
                    <a href='https://www.linkedin.com'>
                        <IconButton  
                            color="primary" 
                            aria-label="Linkedin"
                            >
                            <LinkedInIcon style ={{ fontSize:40}}/>
                        </IconButton>
                    </a>
                    <a href='https://www.youtube.com/'target="_blank">
                        <IconButton  
                        color="primary" 
                        aria-label="Youtube"
                        >
                            <YouTubeIcon style ={{ fontSize:40}}/>
                        </IconButton>
                    </a>
                </DivIcons>
                <CopyrightContainer>
                    <img src ={logo} />
                    <p> Copyright © 2021 - Cruz Inc.</p>
                </CopyrightContainer>
            </Footer>
            
        )
    }
}