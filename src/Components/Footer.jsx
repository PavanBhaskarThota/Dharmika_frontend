import { Box, Typography } from "@mui/material";
import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {

    useEffect(() => {
		Aos.init();
	});
	return (
		<Box
			sx={{
				bgcolor: "#1F3D2B",
				color: "#f5f3ee",
				px: { xs: "1rem", md: "4rem" },
				pt: "2rem",
				minHeight: "120px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					gap: { xs: "1rem", md: "2rem" },
                    width: "90%",
                    margin: "auto",
					mb: "4rem",
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "60%" },
						display: "flex",
						gap: { xs: "0.5rem", md: "3rem" },
						mb: 2,
						flexDirection: { xs: "row", md: "row" },
					}}
                    data-aos="fade-up"
					data-aos-duration="500"
				>
					<Box>
						<img
							src="/dharmika_logo.svg"
							alt="logo"
							style={{
								width: "50px",
								height: "50px",
								backgroundColor: "#F5FBE6",
								borderRadius: "50%",
							}}
						/>
					</Box>
					<Box>
						<Typography
							sx={{
								fontSize: { xs: "1rem", md: "1.5rem" },
								fontWeight: "bold",
							}}
						>
							DHARMIKA SPICES
						</Typography>
						<Typography sx={{ my: "0.5rem", fontSize: "0.8rem" }}>
							Handpicked, organic spices delivered to your
							doorstep.
						</Typography>
						<Typography sx={{ fontSize: "0.8rem" }}>
							Experience authentic flavors of India with Dharmika
							Spices.
						</Typography>
					</Box>
				</Box>

				<Box sx={{ width: { xs: "100%", md: "20%" }, display: { xs: "flex" , gap: '1rem', md: 'block' }, alignItems: 'center' }}>
					<Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
                    data-aos="fade-up"
					data-aos-duration="500"
                    >
						Quick Links
					</Typography>
					<Box
						sx={{
							display: "flex",
							gap: "0.5rem",
							pt: "0.5rem",
							flexDirection: { xs: "row", md: "column" },
							flexWrap: "wrap",
							fontSize: "0.8rem",
							alignItems: "center",
						}}
                        data-aos="fade-up"
					data-aos-duration="500"
					>
						<Link
							to="/"
							style={{ color: "#f5f3ee" }}
						>
							Home
						</Link>
						<Link
							to="/Products"
							style={{ color: "#f5f3ee" }}
						>
							Products
						</Link>
						<Link
							to="/About"
							style={{ color: "#f5f3ee" }}
						>
							About
						</Link>
						<Link
							to="/FAQ"
							style={{ color: "#f5f3ee" }}
						>
							FAQ
						</Link>
						<Link
							to="/Contact"
							style={{ color: "#f5f3ee" }}
						>
							Contact
						</Link>
					</Box>
				</Box>

				{/* <Box sx={{ width: { xs: "100%", md: "20%" } }}>
					<Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
						Follow Us
					</Typography>
				</Box> */}
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					textAlign: "center",
					gap: { xs: "0.2rem", md: "2rem" },
					flexDirection: { xs: "column", md: "row" },
					pb: "0.5rem",
				}}
			>
				<Typography sx={{ fontSize: "0.8rem", color: "lightgray" }}>
					© 2026 Dharmika Spices. All rights reserved.
				</Typography>
				<Typography sx={{ fontSize: "0.8rem", color: "lightgray" }}>
					Crafted with care by the Dharmika Team.
				</Typography>
			</Box>
		</Box>
	);
};
