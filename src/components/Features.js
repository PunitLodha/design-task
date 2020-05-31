import React, { useEffect, useState, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Card from './Card';

const Box = styled.div`
	max-width: 1080px;
	margin: 0 auto;
	padding: 3rem 1rem;
	text-align: center;
`;

const textanim = keyframes`
from{
	opacity: 0;
		transform: translateY(25px);
}
  to {
    opacity: 1;
		transform: translateY(0);
  }
`;

const TextContainer = styled.div`
	max-width: 720px;
	margin: 0 auto;
	opacity: 0;
	${(props) =>
		props.loaded
			? css`
					animation: ${textanim} 2s forwards ease-in-out;
			  `
			: `animation: none`};
`;

const Heading = styled.h2`
	font-size: 2rem;
	font-weight: bold;
	line-height: 1.15;
	margin: 4rem 0 1rem 0;
	color: ${(props) => props.theme.dark};
`;

const Body = styled.p`
	font-size: 1.25rem;
	font-weight: normal;
	line-height: 1.5;
	margin: 1.5rem 0 4rem 0;
	color: ${(props) => props.theme.light};
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 4rem 0;
`;

const Features = () => {
	const text = useRef();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const textRef = text.current;
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
		observer.observe(textRef);

		return () => {
			observer.unobserve(textRef);
		};
	}, [text, loaded]);
	return (
		<section style={{ backgroundColor: '#d8eefe' }}>
			<Box>
				<TextContainer ref={text} loaded={loaded}>
					<Heading>Powerful alone. Better together.</Heading>
					<Body>
						HubSpot offers a full stack of software for marketing, sales, and customer service, with a completely free
						CRM at its core. They’re powerful alone — but even better when used together.
					</Body>
				</TextContainer>
				<CardContainer>
					<Card delay="0s" />
					<Card delay="0.5s" />
					<Card delay="1s" />
					<Card delay="0s" />
					<Card delay="0.5s" />
				</CardContainer>
			</Box>
		</section>
	);
};

export default Features;
