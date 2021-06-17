import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Calculadora from "./calculadora";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	}
}));

export default function Corpo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Calculadora />
		</div>
	);
}
