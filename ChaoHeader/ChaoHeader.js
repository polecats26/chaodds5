import React from 'react';
import Navigation from '../Navigation/Navigation';
import styled from 'styled-components';

const Header = styled.div`
	border-bottom: thin solid #ccc;
`;

const AppHeader = styled.div`
	font-family: "Poppins", sans-serif;
	padding: .75rem 1rem;
	max-width: 1280px;
	margin: 0 auto;
	font-size: 1rem;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 1rem;
		text-align: left;
	}
	@media (min-width: 1024px) {
		font-size: 1.25rem;
	}
`;

const ChaoHeader = props => {
    return (
        <Header>
        	<AppHeader>
        		Fred Chao, DDS
        		<Navigation></Navigation>
        	</AppHeader>
        </Header>
    )
}

export default ChaoHeader;