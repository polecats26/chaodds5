import React from 'react'
import faAboutUs from '@fortawesome/fontawesome-pro/svgs/regular/book-open.svg'
import styled from 'styled-components';

const NavIcon = styled.img`
	max-width: 8vw;
	height: auto;
	width: auto;
	display: block;
	margin: 0 auto;
`;

const NavIconContainer = styled.div`
	height: 10vw;
	text-align: center;
	margin-bottom: 5px;
	display: flex;
	align-items: middle;
`;

export const IconAboutUs = () => (
  <NavIconContainer>
  	<NavIcon src={faAboutUs} alt="Appointments" />
  </NavIconContainer>
)

export default IconAboutUs;
