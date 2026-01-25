import { Box, Typography } from "@mui/material";
import React from "react";
import aboutSectionImg from "../assets/homeImages/aboutSectionImg.jpg";

export const About = () => {
	return (
		<Box>
			<Box
				sx={{
					width: "100%",
					height: { xs: "25vh", md: "35vh" },
					backgroundImage: `
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url(${aboutSectionImg})
    `,
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
				<Typography sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
					About Us
				</Typography>
			</Box>
		</Box>
	);
};
