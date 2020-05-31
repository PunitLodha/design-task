import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.ul`
	display: flex;
	margin: 0 auto;
	align-items: center;
	max-width: 1080px;
	padding: 2rem 1rem;
	list-style-type: none;
	color: ${(props) => props.theme.dark};
	& > :first-child {
		font-weight: bold;
		font-size: 2rem;
		flex-grow: 1;
		padding: 1rem 0;
	}
	& > :not(:first-child):hover {
		cursor: pointer;
		filter: contrast(20%) brightness(150%);
	}
	& li {
		font-size: 1rem;
		padding: 1rem;
	}
`;

const Navbar = () => {
	return (
		<nav>
			<NavContainer>
				<li>HubSpot</li>
				<li>Software</li>
				<li>Pricing</li>
				<li>Resources</li>
				<li>Partners</li>
				<li>About</li>
			</NavContainer>
		</nav>
	);
};

export default Navbar;
