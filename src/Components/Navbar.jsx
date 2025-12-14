import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
	return (
		<NavBar>
			<img src="/dharmika_logo.svg" alt="logo" />
			<div>
				<Link to="/">Home</Link>
				<Link to="/Products">Products</Link>
			</div>
		</NavBar>
	);
};

const NavBar = styled.nav`
	display: flex;
  justify-content: space-between;
	gap: 1rem;
	align-items: center;
	color: #fff;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	padding: 1rem;

	img {
		width: 50px;
		background-color: #123524;
		border-radius: 50%;
	}

  a {
    text-decoration: none;
    color: #000;
  }
`;
