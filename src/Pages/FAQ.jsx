import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import faqImg from "../assets/homeImages/faqImg.jpg";
import { useFaqs } from "../Custom/Hooks/useFaqs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Aos from "aos";
import { Loader } from "../Components/Loader";
import { Footer } from "../Components/Footer";

export const FAQ = () => {
	const [faqs, loading] = useFaqs();

	useEffect(() => {
		Aos.init();
	});

	return (
		<>
			<Box sx={{ pb: { xs: "2rem", md: "6rem" } }}>
				<Box
					sx={{
						width: "100%",
						height: { xs: "20vh", md: "25vh" },
						backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${faqImg})`,
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
						FAQ
					</Typography>
				</Box>

				<Box
					sx={{
						display: "flex",
						gap: { xs: "1rem", md: "2rem" },
						mt: 2,
						width: { xs: "95%", md: "90%" },
						margin: "auto",
						flexDirection: { xs: "column", md: "row" },
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "40%" },
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Typography
							sx={{
								fontSize: { xs: "1.5rem", md: "2.5rem" },
								width: { xs: "100%", md: "60%" },
								mt: 2,
								textAlign: "center",
								fontWeight: "600",
							}}
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							Most Asked Questions
						</Typography>
					</Box>

					{!loading ? (
						<Box
							sx={{
								width: { xs: "100%", md: "60%" },
								display: "flex",
								flexDirection: "column",
								gap: "0.5rem",
								mt: 2,
                mb: 2,
							}}
						>
							{faqs.map((faq, index) => (
								<Accordion
									key={index}
									disableGutters
									elevation={0}
									sx={{
										border: "0.5px solid #E5E5E5",
										borderRadius: "10px",
										bgcolor: "#FFFFFF",
										overflow: "hidden",
										"&:before": {
											display: "none",
										},
										"&.Mui-expanded": {
											borderColor: "#1F3D2B",
										},
									}}
								>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										sx={{
											px: 1.5,
											py: 0.5,
											"& .MuiAccordionSummary-expandIconWrapper":
												{
													transition:
														"transform 0.3s ease",
												},
											"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":
												{
													transform: "rotate(180deg)",
												},
										}}
									>
										<Typography
											sx={{
												fontWeight: 500,
												fontSize: "1rem",
												color: "#1F3D2B",
											}}
										>
											{index + 1}. {faq.question}
										</Typography>
									</AccordionSummary>

									<AccordionDetails
										sx={{
											px: 2,
											pb: 2,
											pt: 0,
											bgcolor: "#F9F8F6",
										}}
									>
										<Typography
											sx={{
												fontSize: "0.95rem",
												lineHeight: 1.7,
												color: "#555",
											}}
										>
											{faq.answer}
										</Typography>
									</AccordionDetails>
								</Accordion>
							))}
						</Box>
					) : (
						<Loader height="50vh" />
					)}
				</Box>
			</Box>
			<Footer />
		</>
	);
};
