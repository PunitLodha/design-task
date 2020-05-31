import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const boxanim = keyframes`
from{
	opacity: 0;
		transform: translateY(-25px);
}
  to {
    opacity: 1;
		transform: translateY(0);
  }
`;

const Box = styled.div`
	box-sizing: border-box;
	width: 300px;
	border-top: 2px solid;
	border-top-color: ${(props) => props.theme.main};
	background-color: #fffffe;
	border-radius: 3px;
	text-align: left;
	margin: 1rem;
	transition: 0.5s ease-in-out;
	padding: 2rem;
	opacity: 0;
	${(props) =>
		props.loaded
			? css`
					animation: ${boxanim} 0.5s ${props.delay} forwards ease-in-out;
			  `
			: `animation: none`};
	&:hover {
		box-shadow: 0 10px 50px -5px rgba(51, 71, 91, 0.12);
		transform: scale(1.05);
	}
`;

const Heading = styled.h4`
	font-size: 1.25rem;
	font-weight: bold;
	margin: 1rem 0;
	color: ${(props) => props.theme.dark};
`;
const Body = styled.p`
	font-size: 1rem;
	line-height: 1.5;
	font-weight: normal;
	margin: 2rem 0;
	color: ${(props) => props.theme.light};
`;

const ListContainer = styled.ul`
	padding: 0;
	list-style-type: none;
`;

const ListHeading = styled.p`
	border-top: 1px solid rgba(0, 0, 0, 0.15);
	padding-top: 2rem;
	font-size: 0.8rem;
	font-weight: bold;
	text-transform: uppercase;
	color: ${(props) => props.theme.dark};
`;

const ListItem = styled.li`
	font-size: 0.8rem;
	font-weight: normal;
	margin-bottom: 0.5rem;
	color: ${(props) => props.theme.light};
`;
const Button = styled.button`
	cursor: pointer;
	width: 100%;
	text-align: center;
	padding: 1.2rem 2rem;
	font-size: 1rem;
	font-weight: bold;
	border-radius: 5px;
	border: 0;
	margin: 1rem 0;
	background-color: ${(props) => props.theme.main};
	color: ${(props) => props.theme.white};
`;

const Card = ({ delay }) => {
	const card = useRef();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const cardRef = card.current;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].intersectionRatio > 0) {
					if (!loaded) {
						setLoaded(true);
					}
				}
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 1,
			}
		);
		observer.observe(cardRef);

		return () => {
			observer.unobserve(cardRef);
		};
	}, [card, loaded]);
	return (
		<Box ref={card} loaded={loaded} delay={delay}>
			<Heading>Free HubSpot CRM</Heading>
			<Body>
				Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100%
				free. Forever.
			</Body>
			<ListHeading>Popular features</ListHeading>
			<ListContainer>
				<ListItem>Contact Insights</ListItem>
				<ListItem>Deals</ListItem>
				<ListItem>Tasks</ListItem>
			</ListContainer>
			<Button>Get free CRM</Button>
		</Box>
	);
};

export default Card;
