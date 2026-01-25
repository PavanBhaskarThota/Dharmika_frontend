import {
	Box,
	FormControl,
	Grid,
	Icon,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import { useProducts } from "../Custom/Hooks/useProducts";
import { ProductPageCard } from "../Components/ProductPageCard";
import { Loader } from "../Components/Loader";
import { useEffect, useState } from "react";
import CloudOffIcon from "@mui/icons-material/CloudOff";

export const Products = () => {
	const { products, loading } = useProducts();
	const [sortBy, setSortBy] = useState("");
	const [search, setSearch] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([...products]);

	const handleChange = (event) => {
		setSortBy(event.target.value);
	};

	useEffect(() => {
		let updatedProducts = [...products];

		if (search) {
			updatedProducts = updatedProducts.filter((product) =>
				product.name.toLowerCase().includes(search.toLowerCase()),
			);
		}

		if (sortBy === "byName") {
			updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
		} else if (sortBy === "byPriceLow") {
			updatedProducts.sort(
				(a, b) => a.weightPrice[0].price - b.weightPrice[0].price,
			);
		} else if (sortBy === "byPriceHigh") {
			updatedProducts.sort(
				(a, b) => b.weightPrice[0].price - a.weightPrice[0].price,
			);
		} else if (sortBy === "byWeightLow") {
			updatedProducts.sort(
				(a, b) => a.weightPrice[0].weight - b.weightPrice[0].weight,
			);
		} else if (sortBy === "byWeightHigh") {
			updatedProducts.sort(
				(a, b) => b.weightPrice[0].weight - a.weightPrice[0].weight,
			);
		}

		setFilteredProducts(updatedProducts);
	}, [products, search, sortBy]);

	if (loading) return <Loader height="80vh" />;

	return (
		<Box sx={{ mt: "2rem", pb: "3rem" }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					m: "auto",
					width: { xs: "90%", md: "95%" },
				}}
			>
				<TextField
					id="outlined-basic"
					label="Search"
					variant="outlined"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					sx={{
						width: { xs: "45%", md: "30%" },
						"& label.Mui-focused": {
							color: "#1F3D2B",
						},
						"& label": {
							color: "#1F3D2B",
						},
						"& .MuiInput-underline:after": {
							borderBottomColor: "#1F3D2B",
						},
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "#1F3D2B",
							},
							"&:hover fieldset": {
								borderColor: "#1F3D2B",
							},
							"&.Mui-focused fieldset": {
								borderColor: "#1F3D2B",
							},
						},
					}}
				/>

				<Box sx={{ width: { xs: "45%", md: "30%" } }}>
					<FormControl
						fullWidth
						sx={{
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "#1F3D2B",
								},
								"&:hover fieldset": {
									borderColor: "#1F3D2B",
								},
								"&.Mui-focused fieldset": {
									borderColor: "#1F3D2B",
								},
							},
							"& .MuiInputLabel-root": {
								color: "#1F3D2B",
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: "#1F3D2B",
							},
						}}
					>
						<InputLabel
							id="demo-simple-select-label"
							sx={{ color: "#1F3D2B" }}
						>
							Sort By
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={sortBy}
							label="Sort By"
							onChange={handleChange}
						>
							<MenuItem value={"byName"}>Name</MenuItem>
							<MenuItem value={"byPriceLow"}>
								Price low to high
							</MenuItem>
							<MenuItem value={"byPriceHigh"}>
								Price high to low
							</MenuItem>
							<MenuItem value={"byWeightLow"}>
								Weight low to high
							</MenuItem>
							<MenuItem value={"byWeightHigh"}>
								Weight high to low
							</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>

			{filteredProducts.length ? (
				<Box
					sx={{
						width: { xs: "95%", md: "95%" },
						m: "auto",
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: "1rem", md: "1rem" },
						justifyContent: { xs: "center", md: "start" },
						mt: "2rem",
					}}
				>
					{filteredProducts.map((product, index) => (
						<Box
							item
							key={index}
							sx={{ width: { xs: "90%", md: "30%", lg: "24%" } }}
						>
							<ProductPageCard product={product} />
						</Box>
					))}
				</Box>
			) : (
				<Box
					sx={{
						width: "90%",
						m: "auto",
						mt: "2rem",
            height: "40vh",
						color: "#1F3D2B",
						textAlign: "center",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap:'1rem',
            fontSize: '1.5rem'
					}}
				>
					<Icon sx={{ height: "2.5rem", width: "2.5rem" }}>
						<CloudOffIcon
							style={{ height: "100%", width: "100%" }}
						/>
					</Icon>
					<Typography>No products found</Typography>
				</Box>
			)}
		</Box>
	);
};
