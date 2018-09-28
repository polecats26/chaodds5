import React from 'react'
import styled from 'styled-components';
import SocialFacebook from '../Social/SocialFacebook';
import SocialYelp from '../Social/SocialYelp';

import './Footer.css'

const FooterContainer = styled.div`
    background-color: #222;
    padding: 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 768px) {
        padding: 2rem 2rem 7.5rem 2rem;
    }
`;

const FooterContent = styled.div`
    color: #aaa;
    max-width: 1280px;
    width: 100%;
    display: flex;
`;

const FooterCopyright = styled.div`
    text-align: center;
    font-family: "Poppins", sans-serif;
    color: #999;
    font-size: 10px;
    padding-top: 1rem;
`;

const FooterSocial = styled.div`
    text-align: center;
    display: block;
    display: flex;
    justify-content: center;
`;

export const Footer = () => (
    <FooterContainer>
        <FooterContent>
            <div class="footer-container footer-left">Hours here</div>
            <div class="footer-container footer-right"></div>
        </FooterContent>
        <FooterSocial><SocialFacebook></SocialFacebook><SocialYelp></SocialYelp></FooterSocial>
        <FooterCopyright>Copyright &copy; Chao Dentistry 2018</FooterCopyright>
    </FooterContainer>
)

export default Footer;
