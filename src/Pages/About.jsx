import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import aboutSectionImg from "../assets/homeImages/aboutSectionImg.jpg";
import Aos from "aos";

export const About = () => {

  useEffect(() => {
      Aos.init();
    });

	return (
		<Box sx={{ pb: {xs: "4rem", md:"6rem"} }}>
			<Box
				sx={{
					width: "100%",
					height: { xs: "20vh", md: "25vh" },
					backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutSectionImg})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover",
					color: "#F5FBE6",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<Typography sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: "bold" }}
        data-aos="fade-up"
						data-aos-duration="1000"
        >
					About Us
				</Typography>
			</Box>

			<Box
				sx={{
					width: { xs: "90%", md: "90%" },
					m: "auto",
					display: "flex",
					flexDirection: { xs: "column", md: "row-reverse" },
					gap: { xs: "1rem", md: "2rem" },
					mt: { xs: "1rem", md: "3rem" },
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "50%" },
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
					}}
				>
					<Typography sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: "bold" }}
          data-aos="fade-up"
						data-aos-duration="900"
          >
						About Dharmika Spices
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "1rem", md: "1.1rem" },
							width: { xs: "100%", md: "80%" },
							textAlign: "justify",
						}}
            data-aos="fade-up"
						data-aos-duration="900"
					>
						Dharmika Spices was born from a deep love for biryani
						and traditional masala-based cooking. In our search for
						quality spices, we found a clear gap—either the flavour
						fell short, or the quality came at an unreasonable
						price. To bridge this, we travelled to Kerala and other
						spice-growing regions to source spices in their most
						authentic form.
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "1rem", md: "1.1rem" },
							width: { xs: "100%", md: "80%" },
							textAlign: "justify",
						}}
            data-aos="fade-up"
						data-aos-duration="900"
					>
						Dharmika stands for trust. We deal only in carefully
						selected whole spices, chosen for aroma, freshness, and
						consistency. Free from food colours, essences, and
						artificial additives, every spice is manually cleaned
						and sorted to ensure dependable quality. We believe in
						long-term relationships over high margins, maintaining
						transparency through payment-based sales and a strong
						focus on reliable sourcing.
					</Typography>
					<Divider />
					<Typography
						sx={{
							fontSize: { xs: "1.2rem", md: "1.5rem" },
							width: { xs: "100%", md: "80%" },
							textAlign: "justify",
						}}
            data-aos="fade-up"
						data-aos-duration="900"
					>
						At Dharmika Spices, our aim is simple — to become a
						brand people trust without hesitation.
					</Typography>
					<Divider sx={{ display: { xs: "block", md: "none" } }} />
				</Box>
				<Box sx={{ width: { xs: "100%", md: "50%" } }}>
					<Box
						sx={{
							width: { xs: "90%", md: "75%" },
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
						}}
					>
						<Typography
							sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: "bold" }}
              data-aos="fade-up"
						data-aos-duration="900"
						>
							Our Values
						</Typography>
						<Typography
							sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
              data-aos="fade-up"
						data-aos-duration="900"
						>
							Trust-driven sourcing
						</Typography>
						<Divider />
						<Typography
							sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
              data-aos="fade-up"
						data-aos-duration="900"
						>
							100% whole spices, no mixing
						</Typography>
						<Divider />
						<Typography
							sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
              data-aos="fade-up"
						data-aos-duration="900"
						>
							Manual cleaning and quality checks
						</Typography>
						<Divider />
						<Typography
							sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
              data-aos="fade-up"
						data-aos-duration="900"
						>
							Fair pricing with consistent quality
						</Typography>
						<Divider />
						<Typography
							sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
              data-aos="fade-up"
						data-aos-duration="900"
						>
							Traditional, premium approach to spices
						</Typography>
						<Divider />
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					width: { xs: "90%", md: "90%" },
					m: "auto",
					display: "flex",
					flexDirection: { xs: "column", md: "row-reverse" },
					gap: { xs: "1rem", md: "2rem" },
					mt: { xs: "1rem", md: "3rem" },
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "50%" },
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
					}}
				>
					<Typography sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: "bold" }}
            data-aos="fade-up"
						data-aos-duration="800"
          >
						Started By
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "1rem", md: "1.1rem" },
							width: { xs: "100%", md: "80%" },
							textAlign: "justify",
						}}
            data-aos="fade-up"
						data-aos-duration="800"
					>
						Dharmika Spices was founded by two friends, Sai Kumar
						and Siva Sai, driven by a shared love for biryani and
						traditional masala-based cooking. During their search
						for quality spices, they repeatedly encountered the same
						problem — either the flavour was lacking, or genuinely
						good spices were priced unreasonably high. This gap led
						them to explore spice-growing regions, especially
						Kerala, in search of authentic quality.
					</Typography>
				</Box>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>

				<Box
					sx={{
            width: '100%',
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
					}}
				>
					<Divider sx={{ display: { xs: "block", md: "none" } }} />
					<Typography sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: "bold" }}
          data-aos="fade-up"
						data-aos-duration="800"
          >
						Vision
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "1rem", md: "1.1rem" },
							width: { xs: "100%", md: "80%" },
							textAlign: "justify",
						}}
            data-aos="fade-up"
						data-aos-duration="800"
					>
						Our vision was clear from the beginning - To deliver the
						pure quality that nature provides, without mixing or
						adulteration, at a fair and honest price.
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "1rem", md: "1.1rem" },
							width: { xs: "100%", md: "80%" },
							textAlign: "justify",
						}}
            data-aos="fade-up"
						data-aos-duration="800"
					>
						The name Dharmika represents trust. Staying true to this
						value, the brand focuses exclusively on whole spices,
						carefully selected for aroma, oil content, freshness,
						and consistency. No food colours, essences, or
						artificial additives are used. Every batch undergoes
						manual cleaning and sorting, both during sourcing and
						before packing, to maintain reliable quality.
					</Typography>
					<Typography
						sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
							width: { xs: "100%", md: "80%" },
							textAlign: "justify",
						}}
            data-aos="fade-up"
						data-aos-duration="800"
            >
						Dharmika Spices initially focused on hotels and
						professional kitchens, where the use of genuine
						ingredients impacts a large number of people every day.
						Over time, the brand has also earned the trust of direct
						customers who appreciate real flavour and uncompromised
						quality.
					</Typography>
					<Typography
						sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
							width: { xs: "100%", md: "80%" },
							textAlign: "justify",
						}}
            data-aos="fade-up"
						data-aos-duration="800"
            >
						Built on long-term trust rather than high margins,
						Dharmika Spices follows a payment-based sales approach
						to ensure transparency, sustainability, and consistent
						supply.
					</Typography>
					<Typography
						sx={{
              fontSize: { xs: "1.05rem", md: "1.5rem" },
							width: { xs: "100%", md: "80%" },
						}}
            data-aos="fade-up"
						data-aos-duration="800"
					>
						Today, Dharmika Spices stands as a traditional, premium
						spice brand-trusted by kitchens that value
						authenticity.
					</Typography>
				</Box>
            </Box>
			</Box>
		</Box>
	);
};
