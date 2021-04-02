import React from 'react'
import styled from 'styled-components'
import logo from './img/logo.png'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Copyright } from '@material-ui/icons';

const DivFooter = styled.div`
background-color: #F29803;

text-align:center;

width: 100vw;
height: 30vh; 
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
    padding-top: 50px;
    display: flex;
    flex-direction:row;
    justify-content: center;

    
`

const CopyrightContainer = styled.div `
    img{
        width: 100px;
    }
    p {
        margin-top: 0px;
    }
    margin-top: 20px;
    
`


export default class Footer extends React.Component {
    render () {
        return (
            <DivFooter>
                <div>
                    
                    <DivIcons  >
                            <a href='https://www.facebook.com'><FacebookIcon style ={{ fontSize:40}}/></a>
                            <a href="https://www.instagram.com"><InstagramIcon style ={{ fontSize:40}}/></a>
                            <a href='https://www.pinterest.com'><PinterestIcon style ={{ fontSize:40}}/></a>
                            <a href="https://www.twitter.com"><TwitterIcon style ={{ fontSize:40}}/></a>
                            <a href='https://www.linkedin.com'><LinkedInIcon style ={{ fontSize:40}}/></a>
                            <a href="https://www.youtube.com"><YouTubeIcon style ={{ fontSize:40}}/></a>
                    </DivIcons>
                </div>
                
                <CopyrightContainer>
                    <img src ={logo} />
                    <p> Copyright © 2021 - Cruz Inc.</p>
                </CopyrightContainer>
                
            </DivFooter>
        )
    }
}