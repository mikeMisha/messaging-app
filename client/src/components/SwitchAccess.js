import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	switchBtn: {
		width: "170px",
		height: "54px",
		marginLeft: "30px",
		marginRight: "42px",
		padding: "15px 40px ",
		backgroundColor: "white",
		boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
		color: theme.palette.primary.main,
		whiteSpace: "nowrap",
	},
	switchBlock: {
		marginTop: "30px",
		width: "100%",
	},
	switchText: {
		marginLeft: "20px",
	},
}));

const SwitchAccess = ({ currPath }) => {
	const classes = useStyles();

	const content =
		currPath === "/login"
			? {
					mainText: "Don't have an account?",
					btnText: "Create account",
					path: "/register",
			  }
			: {
					mainText: "Already have an account?",
					btnText: "Login",
					path: "/login",
			  };

	return (
		<Box
			display="flex"
			justifyContent="flex-end"
			alignItems="center"
			className={classes.switchBlock}
			mb="15%"
		>
			<Typography className={classes.switchText} color="secondary">
				{content.mainText}
			</Typography>
			<Button
				size="large"
				variant="contained"
				type="submit"
				href={content.path}
				to={content.path}
				className={classes.switchBtn}
			>
				{content.btnText}
			</Button>
		</Box>
	);
};

export default SwitchAccess;
