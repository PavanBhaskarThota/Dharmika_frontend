import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import contactImg from "../assets/homeImages/contactImg.jpg";
import Aos from "aos";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Footer } from "../Components/Footer";

export const Contact = () => {
	useEffect(() => {
		Aos.init();
	});

	return (
		<>
			<Box sx={{ pb: { xs: "4rem", md: "3rem" } }}>
				<Box
					sx={{
						width: "100%",
						height: { xs: "20vh", md: "25vh" },
						backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contactImg})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "cover",
						color: "#F9F8F6",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", md: "2.5rem" },
							fontWeight: "bold",
						}}
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						Contact Us
					</Typography>
				</Box>

				<Box
					sx={{
						m: "auto",
						width: { xs: "90%", md: "70%" },
						mt: "2rem",
					}}
				>
					<Typography
						sx={{
							textAlign: "center",
							fontSize: { xs: "1.5rem", md: "2rem" },
							fontWeight: 600,
							color: "#1F3D2B",
							mb: 1,
						}}
						data-aos="fade-up"
						data-aos-duration="900"
					>
						You Can Reach Us Through
					</Typography>

					<Typography
						sx={{
							textAlign: "center",
							color: "#666",
							maxWidth: "600px",
							mx: "auto",
							mb: { xs: 3, md: 3 },
						}}
						data-aos="fade-up"
						data-aos-duration="900"
					>
						We’re always happy to hear from you. Reach out for
						queries, orders, or collaborations.
					</Typography>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "1.25rem",
							width: { xs: "75%", md: "70%" },
							m: "auto",
							bgcolor: "#F9F8F6",
							p: { xs: "2rem", md: "3rem" },
							borderRadius: "20px",
						}}
						data-aos="fade-up"
						data-aos-duration="900"
					>
						{/* Phone */}
						<Box
							sx={{
								display: "flex",
								alignItems: "flex-start",
								gap: "1rem",
							}}
							data-aos="fade-up"
							data-aos-duration="900"
						>
							<PhoneIcon sx={{ color: "#1F3D2B", mt: "2px" }} />
							<Box>
								<Typography sx={{ fontWeight: 500 }}>
									Phone
								</Typography>
								<a
									href="tel:+918332859597"
									target="_blank"
									style={{ color: "inherit" }}
								>
									<Typography
										sx={{
											color: "#555",
											fontSize: "0.95rem",
										}}
									>
										+91 8332859597
									</Typography>
								</a>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "flex-start",
								gap: "1rem",
							}}
							data-aos="fade-up"
							data-aos-duration="900"
						>
							<InstagramIcon
								sx={{ color: "#1F3D2B", mt: "2px" }}
							/>
							<Box>
								<Typography sx={{ fontWeight: 500 }}>
									Instagram
								</Typography>
								<a
									href="https://www.instagram.com/dharmika_spices?igsh=MXg4MzdvbGJvbnMzbg=="
									target="_blank"
									style={{ color: "inherit" }}
								>
									<Typography
										sx={{
											color: "#555",
											fontSize: "0.95rem",
										}}
									>
										@dharmika_spices
									</Typography>
								</a>
							</Box>
						</Box>

						{/* Email */}
						<Box
							sx={{
								display: "flex",
								alignItems: "flex-start",
								gap: "1rem",
							}}
							data-aos="fade-up"
							data-aos-duration="900"
						>
							<EmailIcon sx={{ color: "#1F3D2B", mt: "2px" }} />
							<Box>
								<Typography sx={{ fontWeight: 500 }}>
									Email
								</Typography>
								<Typography
									sx={{ color: "#555", fontSize: "0.95rem" }}
								>
									dharmikaspices@gmail.com
								</Typography>
							</Box>
						</Box>

						{/* Location */}
						<Box
							sx={{
								display: "flex",
								alignItems: "flex-start",
								gap: "1rem",
							}}
							data-aos="fade-up"
							data-aos-duration="900"
						>
							<LocationOnIcon
								sx={{ color: "#1F3D2B", mt: "2px" }}
							/>
							<Box>
								<Typography sx={{ fontWeight: 500 }}>
									Location
								</Typography>
								<a
									href="https://maps.app.goo.gl/hXgbJE5uiuJ8Ydhc9"
									target="_blank"
									style={{ color: "inherit" }}
								>
									<Typography
										sx={{
											color: "#555",
											fontSize: "0.95rem",
										}}
									>
										Kakinada, Andhra Pradesh, India
									</Typography>
								</a>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Footer />
		</>
	);
};
