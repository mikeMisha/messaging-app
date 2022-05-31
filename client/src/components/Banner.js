import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	block: {
		width: "100%",
		height: "100%",
		background: "linear-gradient(#3A8DFF, #86B9FF)",
		opacity: 0.85,
		padding: "0 20% 0 20%",
	},
	background: {
		backgroundImage: 'url("/images/bg-img.png")',
		backgroundSize: "cover",
		backgroundPosition: "center",
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	text: {
		color: "white",
		fontSize: 28,
		marginTop: "10%",
	},
}));

const Banner = () => {
	const classes = useStyles();
	return (
		<Grid item xs={5} className={classes.background}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				className={classes.block}
			>
				<Grid>
					<img src="/images/bubble.svg" alt="chat bubble" width="80px" />
				</Grid>
				<Typography align="center" className={classes.text}>
					Converse with anyone with any language
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Banner;
