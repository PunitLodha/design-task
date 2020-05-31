import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
	max-width: 1080px;
	margin: 0 auto;
	padding: 3rem 1rem;
	text-align: center;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Heading = styled.h4`
	text-align: left;
	font-size: 1.25rem;
	font-weight: bold;
	color: ${(props) => props.theme.white};
`;

const List = styled.ul`
	text-align: left;
	list-style-type: none;
	margin: 1rem 0;
	padding: 0;
	& > * {
		margin: 1rem 0;
	}
`;

const ListItem = styled.a`
	text-decoration: none;
	color: ${(props) => props.theme.lightblue};
`;

const Footer = () => {
	return (
		<section style={{ backgroundColor: '#094067' }}>
			<Box>
				<Container>
					<div>
						<Heading>Increase your Traffic</Heading>
						<List>
							<li>
								<ListItem>Ad Software</ListItem>
							</li>
							<li>
								<ListItem>Blog Software</ListItem>
							</li>
							<li>
								<ListItem>SEO Software</ListItem>
							</li>
							<li>
								<ListItem>Social Media Software</ListItem>
							</li>
							<li>
								<ListItem>Content Management System</ListItem>
							</li>
						</List>
					</div>
					<div>
						<Heading>Increase your Traffic</Heading>
						<List>
							<li>
								<ListItem>Ad Software</ListItem>
							</li>
							<li>
								<ListItem>Blog Software</ListItem>
							</li>
							<li>
								<ListItem>SEO Software</ListItem>
							</li>
							<li>
								<ListItem>Social Media Software</ListItem>
							</li>
							<li>
								<ListItem>Content Management System</ListItem>
							</li>
						</List>
					</div>
					<div>
						<Heading>Increase your Traffic</Heading>
						<List>
							<li>
								<ListItem>Ad Software</ListItem>
							</li>
							<li>
								<ListItem>Blog Software</ListItem>
							</li>
							<li>
								<ListItem>SEO Software</ListItem>
							</li>
							<li>
								<ListItem>Social Media Software</ListItem>
							</li>
							<li>
								<ListItem>Content Management System</ListItem>
							</li>
						</List>
					</div>
					<div>
						<Heading>Increase your Traffic</Heading>
						<List>
							<li>
								<ListItem>Ad Software</ListItem>
							</li>
							<li>
								<ListItem>Blog Software</ListItem>
							</li>
							<li>
								<ListItem>SEO Software</ListItem>
							</li>
							<li>
								<ListItem>Social Media Software</ListItem>
							</li>
							<li>
								<ListItem>Content Management System</ListItem>
							</li>
						</List>
					</div>
				</Container>
			</Box>
		</section>
	);
};

export default Footer;
