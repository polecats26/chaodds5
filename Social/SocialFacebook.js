import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const NavIcon = styled.img`
	max-width: 4vw;
	height: auto;
	width: auto;
	display: block;
    margin: 0 auto;
    color: #fff;
    font-family: "fontawesome";
`;


const SocialIconContainer = styled.div`
    height: 40px;
    width: 40px;
	text-align: center;
	margin-bottom: 5px;
	display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #111;
    color: #fff;
    text-align: center;
    margin: 5px;
`;

export const SocialFacebook = () => (
  <SocialIconContainer>
  	<FontAwesomeIcon icon={faFacebookF} />
  </SocialIconContainer>
)

export default SocialFacebook;
