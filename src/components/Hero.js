import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import illustration from '../Images/illustration.svg';

const Box = styled.div`
	max-width: 1080px;
	margin: 0 auto;
	padding: 3rem 1rem;
	display: flex;
	justify-content: space-between;
	@media (max-width: 720px) {
		flex-direction: column;
	}
`;

const textanim = keyframes`
from{
	opacity: 0;
		transform: translateX(-25px);
}
  to {
    opacity: 1;
		transform: translateX(0);
  }
`;

const TextContainer = styled.div`
	max-width: 420px;
	opacity: 0;
	${(props) =>
		props.loaded
			? css`
					animation: ${textanim} 2s forwards ease-in-out;
			  `
			: `animation: none`};
	@media (max-width: 720px) {
		margin: 0 auto;
	}
`;

const imganim = keyframes`
from{
	opacity: 0;
		transform: translateX(25px);
}
  to {
    opacity: 1;
		transform: translateX(0);
  }
`;

const Image = styled.img`
	max-width: 560px;
	opacity: 0;
	${(props) =>
		props.loaded
			? css`
					animation: ${imganim} 2s forwards ease-in-out;
			  `
			: `animation: none`};
	@media (max-width: 720px) {
		max-width: 420px;
		margin: 0 auto;
	}
`;

const Heading = styled.h1`
	font-size: 3.5rem;
	font-weight: bold;
	line-height: 1.15;
	margin: 3rem 0 1rem 0;
	color: ${(props) => props.theme.dark};
`;

const Body = styled.p`
	font-size: 1.25rem;
	font-weight: normal;
	line-height: 1.5;
	margin: 1.5rem 0;
	color: ${(props) => props.theme.light};
`;

const Button = styled.button`
	cursor: pointer;
	padding: 1.2rem 2rem;
	font-size: 1rem;
	font-weight: bold;
	border-radius: 5px;
	border: 0;
	margin: 1rem 0;
	background-color: ${(props) => props.theme.main};
	color: ${(props) => props.theme.white};
`;

const Subtitle = styled.p`
	font-size: 0.8rem;
	font-weight: normal;
	line-height: 1.5;
	margin-bottom: 6rem;
	color: ${(props) => props.theme.light};
`;

const Hero = () => {
	const text = useRef();
	const img = useRef();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const textRef = text.current;
		const imgRef = img.current;
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
				threshold: 1.0,
			}
		);
		observer.observe(textRef);
		observer.observe(imgRef);

		return () => {
			observer.unobserve(textRef);
			observer.unobserve(imgRef);
		};
	}, [text, img, loaded]);

	return (
		<section>
			<Box>
				<TextContainer ref={text} loaded={loaded}>
					<Heading>There’s a better way to grow.</Heading>
					<Body>
						Marketing, sales, and service software that helps your business grow without compromise. Because “good for
						the business” should also mean “good for the customer.”
					</Body>
					<Button>Get HubSpot free</Button>
					<Subtitle>Get started with FREE tools, and upgrade as you grow.</Subtitle>
				</TextContainer>
				<Image ref={img} loaded={loaded} src={illustration} alt="illustration" />
			</Box>
		</section>
	);
};

export default Hero;
