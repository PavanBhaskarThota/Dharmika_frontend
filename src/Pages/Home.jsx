import { Box, Button, Divider, Typography } from "@mui/material";
import allSpices from "../assets/homeImages/spicesJar.png";
import patternImg from "../assets/homeImages/pattern2.png";
import spiceBg1 from "../assets/homeImages/spiceBg1.png";
import spiceBg2 from "../assets/homeImages/spiceBg2.png";
import organicImg from "../assets/homeImages/organicImg.png";
import deliveryVan from "../assets/homeImages/deliveryVan.png";
import earthPlant from "../assets/homeImages/earth.png";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { ProductCard } from "../Components/ProductCard";
import { Footer } from "../Components/Footer";

export const Home = () => {
	useEffect(() => {
		Aos.init();
	});
	return (
		<main>
			<Box
				sx={{
					display: "flex",
					gap: { xs: "0.5rem", md: "2rem" },
					color: "#1F3D2B",
					padding: { xs: "1rem 1rem", md: "0" },
					height: { xs: "auto", md: "91vh" },
					flexDirection: { xs: "column-reverse", md: "row" },
					width: { xs: "90%", md: "90%" },
					margin: { xs: "0 auto", md: "auto" },
				}}
			>
				<Box
					sx={{
						width: { sx: "100%", md: "60%" },
						display: "flex",
						flexDirection: "column",
						justifyContent: { xs: "start", md: "center" },
						gap: { xs: "2.5rem", md: "1.5rem" },
						height: { xs: "40dvh", md: "82vh" },
					}}
				>
					<Box
						sx={{ height: "2rem", width: "250px" }}
						data-aos="fade-up"
						data-aos-duration="800"
					></Box>
					<Box data-aos="fade-up" data-aos-duration="1000">
						<Typography
							sx={{
								width: { xs: "90%", md: "75%" },
								fontSize: { xs: "1.5rem", md: "3rem" },
								mb: "1rem",
							}}
						>
							Bring Flavor to Life with Premium Spices
						</Typography>
						<Typography
							sx={{
								width: { xs: "90%", md: "50%" },
								fontSize: { xs: "1rem", md: "1rem" },
							}}
						>
							Handpicked, Organic, and Fresh Spices for Every
							Kitchen
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: { xs: "1rem", md: "2rem" },
							width: { xs: "100%", md: "70%" },
						}}
						data-aos="fade-up"
						data-aos-duration="1200"
					>
						<Link
							to="/products"
							style={{
								textDecoration: "none",
								color: "#1F3D2B",
								width: "50%"
							}}
						>
						<Button
							variant="outlined"
							sx={{
								color: "#1F3D2B",
								borderColor: "#1F3D2B",
								borderRadius: "1.5rem",
								height: { xs: "2rem", md: "3rem" },
								width: "100%",
								fontSize: { xs: "0.6rem", md: "1rem" },
							}}
						>
								Products
						</Button>
							</Link>
							<a style={{textDecoration: 'none', color: '#F5FBE6', width: '50%'}} href="https://wa.me/c/171868115980526" target="_blank">
						<Button
							variant="contained"
							sx={{
								bgcolor: "#1F3D2B",
								color: "#F5FBE6",
								borderRadius: "1.5rem",
								height: { xs: "2rem", md: "3rem" },
								fontSize: { xs: "0.6rem", md: "1rem" },
								width: "100%"
							}}
						>
							WhatsApp
						</Button></a>
					</Box>
				</Box>
				<Box
					sx={{
						height: "100%",
						width: { xs: "100%", md: "40%" },
						paddingRight: { xs: "0rem", md: "1.5rem" },
						display: { xs: "block", md: "block" },
					}}
					data-aos="fade-down"
					data-aos-duration="1400"
				>
					<img
						src={allSpices}
						alt="logo"
						style={{
							height: "100%",
							width: "100%",
							objectFit: "contain",
						}}
					/>
				</Box>
			</Box>

			<Box sx={{ bgcolor: "#F9F8F6", width: "100%" }}>
				<Box
					sx={{
						width: { xs: "95%", md: "85%" },
						bgcolor: "#F9F8F6",
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						gap: { xs: "2rem", md: "0" },
						margin: "auto",
						justifyContent: "center",
						alignItems: "center",
						p: { xs: "2rem 0", md: "4rem 0" },
					}}
				>
					<Box
						sx={{
							display: "flex",
							gap: "1rem",
							px: { xs: "0", md: "2rem" },
						}}
						data-aos="fade-up"
						data-aos-duration="600"
					>
						<Box
							sx={{
								height: { xs: "50px", md: "70px" },
								width: { xs: "30%", md: "70px" },
							}}
						>
							<img
								src={organicImg}
								alt="logo"
								style={{
									height: "100%",
									width: "100%",
									objectFit: "contain",
								}}
							/>
						</Box>
						<Box>
							<Typography
								sx={{
									fontSize: { xs: "1rem", md: "1.5rem" },
									fontWeight: "bold",
									mb: "0.5rem",
								}}
							>
								100% Organic
							</Typography>
							<Typography
								sx={{ width: { xs: "100%", md: "60%" } }}
							>
								All natural spices sourced organically
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: "1rem",
							borderLeft: { xs: "none", md: "1px solid #ccc" },
							borderRight: { xs: "none", md: "1px solid #ccc" },
							borderTop: { xs: "1px solid #ccc", md: "none" },
							borderBottom: { xs: "1px solid #ccc", md: "none" },
							px: { xs: "0", md: "2rem" },
							py: { xs: "1rem", md: "0" },
						}}
						data-aos="fade-up"
						data-aos-duration="600"
					>
						<Box
							sx={{
								height: { xs: "50px", md: "70px" },
								width: { xs: "30%", md: "70px" },
							}}
						>
							<img
								src={earthPlant}
								alt="logo"
								style={{
									height: "100%",
									width: "100%",
									objectFit: "contain",
								}}
							/>
						</Box>
						<Box>
							<Typography
								sx={{
									fontSize: { xs: "1rem", md: "1.5rem" },
									fontWeight: "bold",
									mb: "0.5rem",
								}}
							>
								Freshly Ground
							</Typography>
							<Typography
								sx={{ width: { xs: "100%", md: "60%" } }}
							>
								Hand-Ground spices for peak freshness
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: "1rem",
							px: { xs: "0", md: "2rem" },
						}}
						data-aos="fade-up"
						data-aos-duration="600"
					>
						<Box
							sx={{
								height: { xs: "50px", md: "70px" },
								width: { xs: "30%", md: "70px" },
							}}
						>
							<img
								src={deliveryVan}
								alt="logo"
								style={{
									height: "100%",
									width: "100%",
									objectFit: "contain",
								}}
							/>
						</Box>
						<Box>
							<Typography
								sx={{
									fontSize: { xs: "1rem", md: "1.5rem" },
									fontWeight: "bold",
									mb: "0.5rem",
								}}
							>
								Pan India Delivery
							</Typography>
							<Typography
								sx={{ width: { xs: "100%", md: "60%" } }}
							>
								Fast and reliable delivery across India
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box sx={{ minHeight: "50px", py: { xs: "1rem", md: "3rem" } }}>
				<Typography
					sx={{
						fontSize: { xs: "1.5rem", md: "2rem" },
						textAlign: "center",
						fontWeight: "bold",
					}}
					data-aos="fade-up"
					data-aos-duration="600"
				>
					Why Dharmika Spices?
				</Typography>
				<Box sx={{ width: "100%" }}>
					<Box
						sx={{
							width: { xs: "95%", md: "95%" },
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							gap: { xs: "0.5rem", md: "0" },
							margin: "auto",
							justifyContent: "center",
							alignItems: "center",
							p: { xs: "2rem 0", md: "4rem 0" },
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
								gap: "1rem",
								width: { xs: "100%", md: "25%" },
								px: { xs: "0", md: "2rem" },
							}}
							data-aos="fade-up"
							data-aos-duration="800"
						>
							<Box
								sx={{
									height: { xs: "50px", md: "70px" },
									width: { xs: "30%", md: "70px" },
								}}
							>
								<img
									src={organicImg}
									alt="logo"
									style={{
										height: "100%",
										width: "100%",
										objectFit: "contain",
									}}
								/>
							</Box>
							<Box>
								<Typography
									sx={{
										fontSize: { xs: "1rem", md: "1.5rem" },
										fontWeight: "bold",
										mb: "0.5rem",
									}}
								>
									High Quality
								</Typography>
								<Typography
									sx={{
										width: { xs: "80%", md: "auto" },
										m: "auto",
									}}
								>
									A-grade curated spices for superior taste
								</Typography>
							</Box>
						</Box>
						<Divider />
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
								width: { xs: "100%", md: "25%" },
								gap: "1rem",
								px: { xs: "0", md: "2rem" },
							}}
							data-aos="fade-up"
							data-aos-duration="800"
						>
							<Box
								sx={{
									height: { xs: "50px", md: "70px" },
									width: { xs: "30%", md: "70px" },
								}}
							>
								<img
									src={earthPlant}
									alt="logo"
									style={{
										height: "100%",
										width: "100%",
										objectFit: "contain",
									}}
								/>
							</Box>
							<Box>
								<Typography
									sx={{
										fontSize: { xs: "1rem", md: "1.5rem" },
										fontWeight: "bold",
										mb: "0.5rem",
									}}
								>
									Ethically Sourced
								</Typography>
								<Typography
									sx={{
										width: { xs: "80%", md: "auto" },
										m: "auto",
									}}
								>
									Supporting farmers and sustainable practices
								</Typography>
							</Box>
						</Box>
						<Divider />
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
								width: { xs: "100%", md: "25%" },
								gap: "1rem",
								px: { xs: "0", md: "2rem" },
							}}
							data-aos="fade-up"
							data-aos-duration="800"
						>
							<Box
								sx={{
									height: { xs: "50px", md: "70px" },
									width: { xs: "30%", md: "70px" },
								}}
							>
								<img
									src={earthPlant}
									alt="logo"
									style={{
										height: "100%",
										width: "100%",
										objectFit: "contain",
									}}
								/>
							</Box>
							<Box>
								<Typography
									sx={{
										fontSize: { xs: "1rem", md: "1.5rem" },
										fontWeight: "bold",
										mb: "0.5rem",
									}}
								>
									Chef Approved
								</Typography>
								<Typography
									sx={{
										width: { xs: "80%", md: "auto" },
										m: "auto",
									}}
								>
									Trusted by culinary experts for authentic
									flavors
								</Typography>
							</Box>
						</Box>
						<Divider />
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								textAlign: "center",
								width: { xs: "100%", md: "25%" },
								gap: "1rem",
								px: { xs: "0", md: "2rem" },
							}}
							data-aos="fade-up"
							data-aos-duration="800"
						>
							<Box
								sx={{
									height: { xs: "50px", md: "70px" },
									width: { xs: "30%", md: "70px" },
								}}
							>
								<img
									src={deliveryVan}
									alt="logo"
									style={{
										height: "100%",
										width: "100%",
										objectFit: "contain",
									}}
								/>
							</Box>
							<Box>
								<Typography
									sx={{
										fontSize: { xs: "1rem", md: "1.5rem" },
										fontWeight: "bold",
										mb: "0.5rem",
									}}
								>
									Best Market Prices
								</Typography>
								<Typography
									sx={{
										width: { xs: "80%", md: "auto" },
										m: "auto",
									}}
								>
									Competitive pricing without compromising
									quality
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					height: "60vh",
					width: "100%",
					bgcolor: "#F9F8F6",
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					gap: { xs: "2rem", md: "5rem" },
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						width: { xs: "80%", md: "40%" },
						height: { xs: "40%", md: "80%" },
						bgcolor: "#F5FBE6",
						backgroundImage: `url(${spiceBg1})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "cover",
						display: "flex",
						justifyContent: "end",
						alignItems: "end",
					}}
					data-aos="zoom-in-up"
					data-aos-duration="700"
				>
					<Box
						sx={{
							width: "60%",
							height: "50%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: { sx: "0.5rem", md: "1rem" },
							padding: "1rem",
						}}
					>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								fontSize: { xs: "0.8rem", md: "1.5rem" },
								width: { xs: "80%", md: "70%" },
							}}
						>
							BEST QUALITY SPICES
						</Typography>
						<Button
							sx={{
								textDecoration: "underlined",
								color: "#F4991A",
								fontSize: { xs: "0.6rem", md: "1rem" },
							}}
						>
							Shop Now
						</Button>
					</Box>
				</Box>
				<Box
					sx={{
						width: { xs: "80%", md: "40%" },
						height: { xs: "40%", md: "80%" },
						bgcolor: "#F5FBE6",
						backgroundImage: `url(${spiceBg2})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "cover",
						display: "flex",
						justifyContent: "start",
						alignItems: "start",
					}}
					data-aos="zoom-in-down"
					data-aos-duration="700"
				>
					<Box
						sx={{
							width: "60%",
							height: "50%",
							display: "flex",
							flexDirection: "column",
							gap: { sx: "0.5rem", md: "1rem" },
							padding: "1rem",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Typography
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								fontSize: { xs: "0.8rem", md: "1.5rem" },
							}}
						>
							AT BEST PRICES
						</Typography>
						<Button
							sx={{
								textDecoration: "underlined",
								color: "#F4991A",
								fontSize: { xs: "0.6rem", md: "1rem" },
							}}
						>
							Shop Now
						</Button>
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					height: "150vh",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "1rem",
						p: { xs: "1rem", md: "4rem" },
					}}
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-delay="700"
					data-aos-offset="0"
				>
					<Typography
						sx={{
							fontSize: { xs: "1.5rem", md: "2rem" },
							fontWeight: "bold",
						}}
					>
						Our Best Products
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "1rem", md: "1rem" },
							fontWeight: "500",
							width: { xs: "80%", md: "40%" },
							textAlign: "center",
						}}
					>
						We have a wide range of spices which you can find here
						at a reasonable price and quality
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						width: { xs: "95%", md: "90%" },
						gap: "1rem",
						mt: "2rem",
					}}
				>
					<ProductCard
						image="https://images.unsplash.com/photo-1601379760622-0d2e7ad24c11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D"
						name="Organic Almonds"
						price="499"
						grams="250"
						about="Fresh, crunchy almonds sourced organically."
					/>

					<ProductCard
						image="https://images.unsplash.com/photo-1601379760622-0d2e7ad24c11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D"
						name="Organic Almonds"
						price="499"
						grams="250"
						about="Fresh, crunchy almonds sourced organically."
					/>

					<ProductCard
						image="https://images.unsplash.com/photo-1601379760622-0d2e7ad24c11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D"
						name="Organic Almonds"
						price="499"
						grams="250"
						about="Fresh, crunchy almonds sourced organically."
					/>

					<ProductCard
						image="https://images.unsplash.com/photo-1601379760622-0d2e7ad24c11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D"
						name="Organic Almonds"
						price="499"
						grams="250"
						about="Fresh, crunchy almonds sourced organically."
					/>
				</Box>
			</Box>

			<Footer />
		</main>
	);
};
