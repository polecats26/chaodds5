import React from 'react'
import faCalendarCheck from '@fortawesome/fontawesome-pro/svgs/regular/calendar-check.svg'
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

export const IconAppointment = () => (
	<NavIconContainer>	
  		<NavIcon src={faCalendarCheck} alt="Appointments" />
  	</NavIconContainer>
)

export default IconAppointment;
