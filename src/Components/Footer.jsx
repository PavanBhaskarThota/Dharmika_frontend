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

					width: "90%",
					margin: "auto",
					mb: "4rem",
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "60%" },
						display: "flex",
						gap: "1rem",
						mb: 2,
						flexDirection: { xs: "row", md: "row" },
					}}
					data-aos="fade-up"
					data-aos-duration="500"
				>
					<Box sx={{ width: { xs: "30%", md: "10%" } }}>
						<Link to="/">
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
						</Link>
					</Box>
					<Box sx={{ width: "70%" }}>
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

				<Box
					sx={{
						width: { xs: "100%", md: "20%" },
						display: { xs: "flex", md: "block" },
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<Box sx={{ width: { xs: "30%", md: "100%" } }}>
						<Typography
							sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
							data-aos="fade-up"
							data-aos-duration="500"
						>
							Quick Links
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: "0.5rem",
							pt: "0.5rem",
							flexDirection: { xs: "row", md: "column" },
							flexWrap: "wrap",
							fontSize: "0.8rem",
							width: "70%",
						}}
						data-aos="fade-up"
						data-aos-duration="500"
					>
						<Link to="/" style={{ color: "#f5f3ee" }}>
							Home
						</Link>
						<Link to="/Products" style={{ color: "#f5f3ee" }}>
							Products
						</Link>
						<Link to="/About" style={{ color: "#f5f3ee" }}>
							About
						</Link>
						<Link to="/FAQ" style={{ color: "#f5f3ee" }}>
							FAQ
						</Link>
						<Link to="/Contact" style={{ color: "#f5f3ee" }}>
							Contact
						</Link>
					</Box>
				</Box>

				<Box
					sx={{
						width: { xs: "100%", md: "20%" },
						display: { xs: "flex", md: "block" },
						alignItems: "center",
						gap: "1rem",
						mt: { xs: "1rem", md: "0" },
						mb: { xs: "1rem", md: "0" },
					}}
				>
					<Box sx={{ width: { xs: "30%", md: "100%" } }}>
						<Typography
							sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
							data-aos="fade-up"
							data-aos-duration="500"
						>
							Follow / Contact Us
						</Typography>
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "row", md: "column" },
							flexWrap: "wrap",
							gap: "0.5rem",
							pt: "0.5rem",
							fontSize: "0.8rem",
							width: "70%",
						}}
						data-aos="fade-up"
						data-aos-duration="500"
					>
						<a href="https://www.instagram.com/dharmika_spices?igsh=MXg4MzdvbGJvbnMzbg==" target="_blank" style={{ color: "#f5f3ee" }}>
							Facebook
						</a>
						<a href="https://www.instagram.com/dharmika_spices?igsh=MXg4MzdvbGJvbnMzbg==" target="_blank" style={{ color: "#f5f3ee" }}>
							Instagram
						</a>
						<a href="https://wa.me/c/918332859597" target="_blank" style={{ color: "#f5f3ee" }}>
							WhatsApp
						</a>
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					textAlign: "center",
					gap: { xs: "1rem", md: "2rem" },
					flexDirection: { xs: "row", md: "row" },
					pb: "0.5rem",
				}}
			>
				<Typography sx={{ fontSize: "0.6rem", color: "lightgray" }}>
					© 2026 Dharmika Spices. All rights reserved.
				</Typography>
				<Typography sx={{ fontSize: "0.6rem", color: "lightgray" }}>
					Crafted with care by the Dharmika Team.
				</Typography>
			</Box>
		</Box>
	);
};
