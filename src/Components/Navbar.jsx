import { Link } from "react-router-dom";
import styled from "styled-components";
import {
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
	Divider,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import QuizIcon from "@mui/icons-material/Quiz";
import InventoryIcon from "@mui/icons-material/Inventory";
import CallIcon from "@mui/icons-material/Call";

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			backgroundColor="#1F3D2B"
			color="#F5FBE6"
			height={"100vh"}
		>
			<Box sx={{minHeight: '66px',maxHeight: '72px', display: "flex",alignItems: "center", paddingLeft: '4.5rem'}}>
				Menu
			</Box>
			<Divider />
			<List>
				{["Home", "Products", "About", "FAQ", "Contact"].map(
					(text, index) => (
						<ListItem key={text} disablePadding>
							<Link
								to={text === "Home" ? "/" : `/${text}`}
								style={{ textDecoration: "none" }}
							>
								<ListItemButton
									sx={{
										color: "#f5f3ee",
										textDecoration: "none",
										cursor: "pointer",
									}}
								>
									<ListItemIcon sx={{ color: "#f5f3ee" }}>
										{index === 0 && <HomeIcon />}
										{index === 1 && <InventoryIcon />}
										{index === 2 && <InfoIcon/>}
										{index === 3 && <QuizIcon />}
										{index === 4 && <CallIcon />}
									</ListItemIcon>
									<ListItemText
										primary={text}
										sx={{
											color: "#f5f3ee",
											textDecoration: "none",
										}}
									/>
								</ListItemButton>
							</Link>
						</ListItem>
					)
				)}
			</List>
		</Box>
	);

	return (
		<NavBar>
			<div className="navBarDiv">
				<img src="/dharmika_logo.svg" alt="logo" />
				<div className="links">
					<Link to="/">Home</Link>
					<Link to="/Products">Products</Link>
					<Link to="/About">About</Link>
					<h1>DHARMIKA SPICES</h1>
					<Link to="/FAQ">Chef</Link>
					<Link to="/FAQ">FAQ</Link>
					<Link to="/Contact">Contact</Link>
				</div>
				<div>
					<a style={{color:'#075e54'}} href="https://wa.me/c/171868115980526" target="_blank" rel="noreferrer">Shop Now</a>
				</div>
			</div>
			<div className="mobileNavBar">
				<div className="mobileLogo">
					<MenuIcon onClick={toggleDrawer(true)} sx={{fontSize: "2rem"}} />
				</div>
				<Box>

				<Typography variant="h6" sx={{fontFamily: 'serif'}}>DHARMIKA</Typography>
				</Box>
				<div>
					<a style={{color:'#075e54'}} href="https://wa.me/c/171868115980526" target="_blank" rel="noreferrer">Shop Now</a>
				</div>
				<Drawer open={open} onClose={toggleDrawer(false)}>
					{DrawerList}
				</Drawer>
			</div>
		</NavBar>
	);
};

const NavBar = styled.nav`
	position: fixed;
	width: 100%;
	z-index: 100;
	max-height: 72px;

	.navBarDiv {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		color: #1F3D2B;
		align-items: center;
		box-shadow: rgba(3, 1, 1, 0.02) 0px 1px 3px 0px,
			rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
		padding: 0.5rem 1.5rem;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-attachment: fixed;

		background: rgba(150, 150, 150, 0.1); /* semi-transparent */
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.links{
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	h1{
		margin: 0px;
		padding: 0px;
		font-family: serif;
		font-weight: 400;
		padding: 0px 1.5rem;
	}

	h4{
		margin: 0px;
		padding: 0px;
		font-family: serif;
		font-weight: 400;
		padding: 0px 1.5rem;
	}

	.mobileNavBar {
		display: none;
		justify-content: space-between;
		gap: 1rem;
		color: #1F3D2B;
		align-items: center;
		box-shadow: rgba(3, 1, 1, 0.02) 0px 1px 3px 0px,
			rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
		padding: 0.5rem 1rem;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-attachment: fixed;
		background: rgba(150, 150, 150, 0.1); /* semi-transparent */
		backdrop-filter: blur(1px);
		-webkit-backdrop-filter: blur(5px); /* Safari */
	}

	.mobileLogo {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	img {
		width: 50px;
		background-color: #1c4631ff;
		border-radius: 50%;
	}

	a {
		text-decoration: none;
		color: #1F3D2B;
		font-size: 14px;
	}

	div {
		display: flex;
		gap: 1rem;
	}

	@media screen and (max-width: 768px) {
		.navBarDiv {
			display: none;
		}

		.mobileNavBar {
			display: flex;
		}
	}
`;
