import React from 'react'
import faPhoneSquare from '@fortawesome/fontawesome-pro/svgs/regular/phone-square.svg'
import styled from 'styled-components';

const NavIcon = styled.img`
	max-width: 40px;
	height: auto;
	width: auto;
	display: block;
	margin: 0 auto;
`;

const NavIconContainer = styled.div`
	height: 50px;
	text-align: center;
	margin-bottom: 5px;
	display: flex;
	align-items: middle;
`;
export const IconPhone = () => (
	<NavIconContainer>
  		<NavIcon src={faPhoneSquare} alt="Call Us" />
  	</NavIconContainer>
)

export default IconPhone;
