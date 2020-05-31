import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Atlassian from '../Images/Atlassian.webp';
import Classpass from '../Images/Classpass.webp';
import doordash from '../Images/doordash.webp';
import g2crowd from '../Images/g2crowd.webp';
import Subaru from '../Images/Subaru.webp';
import VMware from '../Images/VMware.webp';
import Wistia from '../Images/Wistia.webp';

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

const companim = keyframes`
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
	margin-top: 1rem;
	margin-bottom: 0;
	color: ${(props) => props.theme.dark};
`;

const Body = styled.p`
	font-size: 1.25rem;
	font-weight: normal;
	line-height: 1.5;
	margin-bottom: 1.5rem;
	margin-top: 0;
	color: ${(props) => props.theme.light};
`;

const CompanyContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const Company = styled.div`
	box-sizing: border-box;
	flex: 1 1 25%;
	max-width: 200px;
	padding: 1rem;
	margin: 0.5rem;
	opacity: 0;
	${(props) =>
		props.loaded
			? css`
					animation: ${companim} 2s forwards ease-in-out;
			  `
			: `animation: none`};
	& img {
		width: 100%;
		max-width: 100%;
	}
`;
const Companies = () => {
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
					<Heading>78,700</Heading>
					<Body>customers in over 120 countries growing their businesses with HubSpot</Body>
				</TextContainer>
				<CompanyContainer>
					<Company loaded={loaded}>
						<img src={Atlassian} alt="Atlassian" />
					</Company>
					<Company loaded={loaded}>
						<img src={doordash} alt="Doordash" />
					</Company>
					<Company loaded={loaded}>
						<img src={g2crowd} alt="g2crowd" />
					</Company>
					<Company loaded={loaded}>
						<img src={Classpass} alt="Classpass" />
					</Company>
					<Company loaded={loaded}>
						<img src={VMware} alt="VMware" />
					</Company>
					<Company loaded={loaded}>
						<img src={Subaru} alt="Subaru" />
					</Company>
					<Company loaded={loaded}>
						<img src={Wistia} alt="Atlassian" />
					</Company>
				</CompanyContainer>
			</Box>
		</section>
	);
};

export default Companies;
