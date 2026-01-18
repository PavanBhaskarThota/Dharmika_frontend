import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box
} from "@mui/material";
import Aos from "aos";

export const ProductCard = ({
  image,
  name,
  price,
  grams,
  about
}) => {

  useEffect(() => {
      Aos.init();
    });

  return (
    <Card
      sx={{
        width: {xs: '43%', md: '20%'},
        borderRadius: "5px",
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "#1F3D2B"
      }}
      data-aos="fade-up"
			data-aos-duration="700"
			data-aos-delay="300"
    >
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={name}
        sx={{
          objectFit: "cover",
        }}
      />

      <CardContent>
        <Typography
          sx={{ fontWeight: 600, mb: 0.5, fontSize: {xs: '0.8rem', md: '1rem'} }}
        >
          {name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1
          }}
        >
          <Typography
            
            sx={{ fontWeight: 500, fontSize: {xs: '0.7rem', md: '1rem'} }}
          >
            ₹{price}
          </Typography>

          <Typography
            sx={{ opacity: 0.8, fontSize: {xs: '0.7rem', md: '1rem'} }}
          >
            {grams} g
          </Typography>
        </Box>

        <Typography
          sx={{ opacity: 0.75, fontSize: {xs: '0.5rem', md: '1rem'} }}
        >
          {about}
        </Typography>
      </CardContent>
    </Card>
  );
};
