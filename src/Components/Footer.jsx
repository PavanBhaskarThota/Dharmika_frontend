import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
	return (
		<Box
			sx={{
				bgcolor: "#1F3D2B",
				color: "#f5f3ee",
				px: { xs: "2rem", md: "4rem" },
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
					mb: "3rem",
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "60%" },
						display: "flex",
						gap: { xs: "1rem", md: "3rem" },
						mb: 2,
						flexDirection: { xs: "column", md: "row" },
					}}
				>
					<Box>
						<img
							src="/dharmika_logo.svg"
							alt="logo"
							style={{
								width: "80px",
								height: "80px",
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

				<Box sx={{ width: { xs: "100%", md: "20%" } }}>
					<Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
						Quick Links
					</Typography>
					<Box
						sx={{
							display: "flex",
							gap: "0.5rem",
							pt: "0.5rem",
							flexDirection: { xs: "row", md: "column" },
							fontSize: "0.8rem",
						}}
					>
						<a
							href="/"
							style={{ textDecoration: "none", color: "#f5f3ee" }}
						>
							Home
						</a>
						<a
							href="/Products"
							style={{ textDecoration: "none", color: "#f5f3ee" }}
						>
							Products
						</a>
						<a
							href="/About"
							style={{ textDecoration: "none", color: "#f5f3ee" }}
						>
							About
						</a>
						<a
							href="/FAQ"
							style={{ textDecoration: "none", color: "#f5f3ee" }}
						>
							FAQ
						</a>
						<a
							href="/Contact"
							style={{ textDecoration: "none", color: "#f5f3ee" }}
						>
							Contact
						</a>
					</Box>
				</Box>

				<Box sx={{ width: { xs: "100%", md: "20%" } }}>
					<Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
						Follow Us
					</Typography>
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					textAlign: "center",
					gap: { xs: "1rem", md: "2rem" },
					flexDirection: { xs: "column", md: "row" },
					pb: "0.5rem",
				}}
			>
				<Typography sx={{ fontSize: "0.8rem", color: "lightgray" }}>
					© 2024 Dharmika Spices. All rights reserved.
				</Typography>
				<Typography sx={{ fontSize: "0.8rem", color: "lightgray" }}>
					Crafted with care by the Dharmika Team.
				</Typography>
			</Box>
		</Box>
	);
};
