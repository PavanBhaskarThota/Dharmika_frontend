import { Box } from "@mui/material";
import styled from "styled-components";

export const Loader = ({height}) => {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
                height: height,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Load>
                <div className="loader"></div>
            </Load>
		</Box>
	);
};

const Load = styled.div`
	.loader {
		position: absolute;
	}

	.loader:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		display: block;
		width: 5em;
		height: 0.5em;
		border-radius: 0.5em;
		transform: translate(-50%, -50%);
		animation: slide 3s infinite;
	}

	@keyframes slide {
		0% {
			width: 5em;
			box-shadow:
				1em -0.5em #aabbc4,
				-1em 0.5em #1f3d2b;
		}

		35% {
			width: 0.5em;
			box-shadow:
				0 -0.5em #aabbc4,
				0 0.5em #1f3d2b;
		}

		70% {
			width: 0.5em;
			box-shadow:
				-1em -0.5em #1f3d2b,
				1em 0.5em #aabbc4;
		}

		100% {
			width: 5em;
			box-shadow:
				1em -0.5em #1f3d2b,
				-1em 0.5em #aabbc4;
		}
	}
`;
