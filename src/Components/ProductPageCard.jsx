import { useEffect, useState, useMemo } from "react";
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	IconButton,
	Box,
	Stack,
	MenuItem,
	Select,
	Divider,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Aos from "aos";

export const ProductPageCard = ({ product }) => {
	const { name, description, images = [], weightPrice = [] } = product;

	const [imageIndex, setImageIndex] = useState(0);
	const [selectedWeight, setSelectedWeight] = useState(
		weightPrice[0]?.weight || "",
	);

	const selectedPrice = useMemo(() => {
		return weightPrice.find((wp) => wp.weight === selectedWeight)?.price;
	}, [selectedWeight, weightPrice]);

	// Auto slideshow
	useEffect(() => {
		if (images.length <= 1) return;

		const interval = setInterval(
			() => {
				setImageIndex((prev) => (prev + 1) % images.length);
			},
			Math.random() * 60000 + 1000,
		);

		return () => clearInterval(interval);
	}, [images]);

	const prevImage = () => {
		setImageIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	const nextImage = () => {
		setImageIndex((prev) => (prev + 1) % images.length);
	};

	useEffect(() => {
		Aos.init();
	});

	return (
		<Card
			sx={{
				width: "100%",
				borderRadius: 2,
				boxShadow:
					"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
				overflow: "hidden",
				// height: '400px',
				bgcolor: "#F9F8F6",
			}}
			data-aos="fade-up"
			data-aos-duration="700"
		>
			{/* Image Slider */}
			<Box sx={{ position: "relative" }}>
				<Fade in timeout={600} key={imageIndex}>
					<CardMedia
						component="img"
						height="260"
						image={images[imageIndex]}
						alt={name}
						sx={{ objectFit: "cover" }}
					/>
				</Fade>

				{images.length > 1 && (
					<>
						<IconButton
							onClick={prevImage}
							sx={{
								position: "absolute",
								top: "50%",
								left: 10,
								transform: "translateY(-50%)",
								bgcolor: "rgba(0,0,0,0.2)",
								color: "#fff",
								"&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
							}}
							size="small"
						>
							<ArrowBackIosNewIcon fontSize="inherit" />
						</IconButton>

						<IconButton
							onClick={nextImage}
							sx={{
								position: "absolute",
								top: "50%",
								right: 10,
								transform: "translateY(-50%)",
								bgcolor: "rgba(0,0,0,0.2)",
								color: "#fff",
								"&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
							}}
							size="small"
						>
							<ArrowForwardIosIcon fontSize="inherit" />
						</IconButton>
					</>
				)}
			</Box>

			{/* Content */}
			<CardContent sx={{ p: 2 }}>
				<Stack spacing={1}>
					<Typography
						variant="h6"
						fontWeight={600}
						color="#1F3D2B"
						sx={{
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis",
						}}
					>
						{name.charAt(0).toUpperCase() + name.slice(1)}
					</Typography>
					<Divider />

					{/* Weight Selector */}
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								flexDirection: "column",
							}}
						>
							<Typography
								variant="caption"
								color="text.secondary"
							>
								Select Weight
							</Typography>

							<Select
								size="small"
								value={selectedWeight}
								onChange={(e) =>
									setSelectedWeight(e.target.value)
								}
							>
								{weightPrice.map((wp, i) => (
									<MenuItem key={i} value={wp.weight}>
										{wp.weight}
									</MenuItem>
								))}
							</Select>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								flexDirection: "column",
							}}
						>
							<Typography
								variant="caption"
								color="text.secondary"
							>
								Price
							</Typography>
							<Typography
								sx={{ fontSize: "1.5rem" }}
								fontWeight={700}
								color="#1F3D2B"
							>
								{selectedPrice ? (
									<>&#8377;{selectedPrice}</>
								) : (
									"--"
								)}
							</Typography>
						</Box>
					</Box>

					{description && (
						<Box
							sx={{
								height: "100px",
								overflow: "auto",
								"&::-webkit-scrollbar": { display: "none" },
							}}
						>
							<Divider />
							<Typography
								variant="body2"
								color="text.secondary"
								sx={{ mt: 2 }}
							>
								{description}
							</Typography>
						</Box>
					)}
				</Stack>
			</CardContent>
		</Card>
	);
};
