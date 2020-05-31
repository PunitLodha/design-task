import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const Box = styled.div`
	max-width: 1080px;
	margin: 0 auto;
	padding: 6rem 1rem;
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

const statanim = keyframes`
from{
	opacity: 0;
}
  to {
    opacity: 1;
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
	margin: 1rem 0;
	color: ${(props) => props.theme.dark};
`;

const Body = styled.p`
	font-size: 1.25rem;
	font-weight: normal;
	line-height: 1.5;
	margin: 1.5rem 0;
	color: ${(props) => props.theme.light};
`;

const StatContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const StatHeading = styled.h2`
	color: ${(props) => props.theme.dark};
`;

const Stat = styled.div`
	box-sizing: border-box;
	flex: 1 1 25%;
	padding: 2rem;
	color: ${(props) => props.theme.light};
	opacity: 0;
	${(props) =>
		props.loaded
			? css`
					animation: ${statanim} 2s forwards ease-in-out;
			  `
			: `animation: none`};
`;

const Stats = () => {
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
		<section>
			<Box>
				<TextContainer ref={text} loaded={loaded}>
					<Heading>Learn and grow with award-winning support and a thriving community behind you.</Heading>
					<Body>
						You don't have to go it alone. Master the inbound methodology and get the most out of your tools with
						HubSpot's legendary customer support team and a community of thousands of marketing and sales pros just like
						you.
					</Body>
				</TextContainer>
				<StatContainer>
					<Stat loaded={loaded}>
						<StatHeading>150+</StatHeading> HubSpot user groups
					</Stat>
					<Stat loaded={loaded}>
						<StatHeading>7M+</StatHeading> monthly visits
					</Stat>
					<Stat loaded={loaded}>
						<StatHeading>248K+</StatHeading> certified professionals
					</Stat>
					<Stat loaded={loaded}>
						<StatHeading>26K+</StatHeading> registered attendees
					</Stat>
					<Stat loaded={loaded}>
						<StatHeading>400+</StatHeading> integrations
					</Stat>
					<Stat loaded={loaded}>
						<StatHeading>6</StatHeading> languages
					</Stat>
					<Stat loaded={loaded}>
						<StatHeading>2.6M+</StatHeading> social followers
					</Stat>
					<Stat loaded={loaded}>
						<StatHeading>5K+</StatHeading> profiles and counting
					</Stat>
				</StatContainer>
			</Box>
		</section>
	);
};

export default Stats;
