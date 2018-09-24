import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
	width: 100%;
	display: fixed;
	position: absolute;
	bottom: 0;
	@media (min-width: 768px) {
		display: none;
	}
	border-top: thin solid #ccc;
`;

const NavWrapper = styled.div`
	display: flex;
	width: 100%;

`;

const NavLink = styled.div`
	flex: 1;
	color: #bbb;
	text-decoration: none;
	padding: .75rem .25rem 1.5rem;
	font-size: 1rem
	&:hover {
		color: #000;
	}
`;

const PhoneNumber = styled.div`
	flex: 1;
	color: #bbb;
	text-decoration: none;
	padding: .75rem .25rem 1.5rem;
	font-size: 1rem
	&:hover {
		color: #000;
	}
`;


const MobileNav = props => {
    return (
        <NavContainer>
        	<NavWrapper>
        		<NavLink href="hello">About</NavLink> <NavLink href="test">Appt</NavLink><PhoneNumber>(310)</PhoneNumber>
        	</NavWrapper>	
        </NavContainer>
    )
}

export default MobileNav;