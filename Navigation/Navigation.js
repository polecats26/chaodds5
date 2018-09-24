import React from 'react';
import styled from 'styled-components';
import Media from "react-media";
import IconPhone from '../IconPhone/IconPhone';
import IconAboutUs from '../IconAboutUs/IconAboutUs';
import IconAppointment from '../IconAppointment/IconAppointment';
import IconOfficeHours from '../IconOfficeHours/IconOfficeHours';


const NavContainer = styled.div`
	width: 100%;
	display: fixed;
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: #fff;
	border-top: thin solid #ccc;
	@media (min-width: 769px) {
		width: auto;
		position: relative;
		float: right;
		display: inline-block;
		border-top: none;
	}
`;

const NavLink = styled.div`
	display: inline-block;
	color: #bbb;
	text-decoration: none;
	margin-left: 1rem;
	font-size: 1rem
	&:hover {
		color: #000;
	}
	padding: 0;
	@media (max-width: 768px) {
		margin-left: 0;
		padding: .75rem 1rem 1.5rem;
		flex: 1;
		font-size: .5rem;
		text-transform: uppercase;
	}
`;

const PhoneNumber = styled.span`
	display: inline-block;
	color: #777;
	text-decoration: none;
	margin-left: 1rem;
	font-size: 1rem
	&:hover {
		color: #000;
	}
	padding: 0;
	@media (max-width: 768px) {
		color: #bbb;
		margin-left: 0;
		padding: .75rem 1rem 1.5rem;
		flex: 1;
		font-size: .5rem;
		text-transform: uppercase;
	}
`;

const NavWrapper = styled.div`
	display: flex;
	width: 100%;
	@media (min-width: 769px) {
		width: auto;
		display: inline-block;
	}
`;

const Navigation = props => {
    return (
        <NavContainer>
        	<NavWrapper>
	        	<NavLink href="hello">
	        		<Media query="(max-width: 768px)">
	        			{matches =>
				            matches ? (
				              <div><IconAboutUs></IconAboutUs>About Us</div>
				            ) : (
				              <div>About Us</div>
				            )
				          }
	        		</Media>
	        		
	        	</NavLink>
	        	<NavLink href="hours">
	        		<Media query="(max-width: 768px)">
	        			{matches =>
				            matches ? (
				              <div><IconOfficeHours></IconOfficeHours>Office Hours</div>
				            ) : (
				              <div>Office Hours</div>
				            )
				          }
	        		</Media>
	        	</NavLink>
	        	<NavLink href="test">
	        		<Media query="(max-width: 768px)">
	        			{matches =>
				            matches ? (
				              <div><IconAppointment></IconAppointment>Appt</div>
				            ) : (
				              <div>Make an Appointment</div>
				            )
				          }
	        		</Media>
	        	</NavLink>
	        	<PhoneNumber>
	        		<Media query="(max-width: 768px)">
	        			{matches =>
				            matches ? (
				              <div><IconPhone></IconPhone>Call Us</div>
				            ) : (
				              <div>(310) 451-2726</div>
				            )
				          }
	        		</Media>
	        	</PhoneNumber>
        	</NavWrapper>
        </NavContainer>
    )
}

export default Navigation;