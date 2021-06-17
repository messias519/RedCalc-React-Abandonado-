import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Slider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	Inputpeso: {},
	kg: {
		color: "black",
		fontWeight: "bold",
		fontSize: 30
	},
	root: {
		flexGrow: 1
	},
	card: {
		padding: theme.spacing(2),
		textAlign: "center"
	},
	cardtitulo: {
		fontSize: 20,
		fontWeight: "bold"
	},

	cardsubtitulo: {
		fontSize: 13,
		fontWeight: "500",
		color: "gray"
	},
	max: {
		fontSize: 15
	},
	min: {
		fontSize: 15
	}
}));

export default function Calculadora() {
	const [p, setP] = useState(70);

	const handleChange = (event, newValue) => {
		setP(newValue);
	};

	const peso = parseFloat(p);
	const classes = useStyles();

	///// drogas
	//Nora
	const DiluicaoPadraoNora = "Noradrenalina 4amp para 250ml ";
	const NoraMlhMax = Math.round(((4 * peso) / 64) * 60);
	const NoraMlhMin = Math.round(((0 * peso) / 64) * 60);
	//Dobuta
	const DiluicaoPadraoDobuta = "Dobutamina 1amp para 250ml ";
	const DobutaMlhMax = Math.round(((20 * peso) / (1 * 1000)) * 60);
	const DobutaMlhMin = Math.round(((2.5 * peso) / (1 * 1000)) * 60);
	//Fentanil
	const DiluicaoPadraoFenta = "Fentanil 20ml para 100ml ";
	const FentaMlhMax = Math.round((5 * peso) / 10);
	const FentaMlhMin = Math.round((0.5 * peso) / 10);
	//Precedex
	const DiluicaoPadraoPrecedex = "Precedex 2ml para 50ml ";
	const PrecedexMlhMax = Math.round((0.7 * peso) / 4);
	const PrecedexMlhMin = Math.round((0.2 * peso) / 4);
	//Propofol
	const DiluicaoPadraoPropofol = "Propofol 80ml";
	const PropofolMlhMax = Math.round((5 * peso) / 10);
	const PropofolMlhMin = Math.round((0.5 * peso) / 10);
	//Midazolam
	const DiluicaoPadraoMidazolam = "Midazolam 40ml para 100ml";
	const MidazolamMlhMax = Math.round((600 * peso) / 2000);
	const MidazolamMlhMin = Math.round((20 * peso) / 2000);
	//Atracurio
	const DiluicaoPadraoAtracurio = "Atracúrio 25ml para 250ml";
	const AtracurioMlhMax = Math.round((600 * peso) / 1000);
	const AtracurioMlhMin = Math.round((300 * peso) / 1000);
	//Rocuronio
	const DiluicaoPadraoRocuronio = "Rocurônio 25ml para 250ml";
	const RocuronioMlhMax = Math.round((0.6 * peso) / 1);
	const RocuronioMlhMin = Math.round((0.3 * peso) / 1);
	//Cisatracurio
	const DiluicaoPadraoCisatracurio = "Cisatracúrio 25ml para 100ml";
	const CisatracurioMlhMax = Math.round((4 * 60 * peso) / 1000 / 0.5);
	const CisatracurioMlhMin = Math.round((1 * 60 * peso) / 1000 / 0.5);
	//Pancuronio
	const DiluicaoPadraoPancuronio = "Pancurônio 20ml para 100ml";
	const PancuronioMlhMax = Math.round((0.1 * peso) / 0.4);
	const PancuronioMlhMin = Math.round((0 * peso) / 0.4);
	//nipride
	const DiluicaoPadraoNipride = "Nipride 2ml para 250ml";
	const NiprideMlhMax = Math.round((60 * 10 * peso) / 1000 / 0.2);
	const NiprideMlhMin = Math.round((60 * 0.3 * peso) / 1000 / 0.2);
	//tridil
	const DiluicaoPadraoTridil = "Tridil 2ml para 250ml";
	const TridilMlhMax = Math.round((20 * 6 * peso) / (100 / 0.2));
	const TridilMlhMin = Math.round((5 * 6 * peso) / (100 / 0.2));

	return (
		<React.Fragment>
			<Container className={classes.Inputpeso} maxWidth="sm">
				<h5>Calculando para: </h5>
				<Slider
					valueLabelFormat={(value) => <div className={classes.kg}>{p}Kg</div>}
					valueLabelDisplay="on"
					max={140}
					min={0}
					set={1}
					value={p}
					onChange={handleChange}
					color="secondary"
				/>
			</Container>

			<Container className="prateleira">
				<h1>
					<center>Doses em ml/h</center>
				</h1>
				<br />
				<div className={classes.root}>
					<Grid container spacing={2}>
						<Grid item xs>
							<Paper className={classes.card} id="noradrenalina">
								<span className={classes.cardtitulo}> Noradrenalina </span>
								<br />
								<span className={classes.cardsubtitulo}>
									{DiluicaoPadraoNora}
								</span>
								<br />
								<span className={classes.min}>{NoraMlhMin}ml/h</span>
								<span className={classes.cardtitulo}> - </span>
								<span className={classes.max}>{NoraMlhMax}ml/h</span>
							</Paper>
						</Grid>
						<Grid item xs>
							<Grid item xs>
								<Paper className={classes.card} id="dobutamina">
									<span className={classes.cardtitulo}> Dobutamina </span>
									<br />
									<span className={classes.cardsubtitulo}>
										{DiluicaoPadraoDobuta}
									</span>
									<br />
									<span className={classes.min}>{DobutaMlhMin}ml/h</span>
									<span className={classes.cardtitulo}> - </span>
									<span className={classes.max}>{DobutaMlhMax}ml/h</span>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs>
							<Paper className={classes.card} id="fentanil">
								<span className={classes.cardtitulo}> Fentanil </span>
								<br />
								<span className={classes.cardsubtitulo}>
									{DiluicaoPadraoFenta}
								</span>
								<br />
								<span className={classes.min}>{FentaMlhMin}ml/h</span>
								<span className={classes.cardtitulo}> - </span>
								<span className={classes.max}>{FentaMlhMax}ml/h</span>
							</Paper>
						</Grid>
						<Grid item xs>
							<Grid item xs>
								<Paper className={classes.card} id="precedex">
									<span className={classes.cardtitulo}> Precedex </span>
									<br />
									<span className={classes.cardsubtitulo}>
										{" "}
										{DiluicaoPadraoPrecedex}{" "}
									</span>
									<br />
									<span className={classes.min}>{PrecedexMlhMin}ml/h</span>
									<span className={classes.cardtitulo}> - </span>
									<span className={classes.max}>{PrecedexMlhMax}ml/h</span>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs>
							<Paper className={classes.card} id="propofol">
								<span className={classes.cardtitulo}> Propofol </span>
								<br />
								<span className={classes.cardsubtitulo}>
									{" "}
									{DiluicaoPadraoPropofol}{" "}
								</span>
								<br />
								<span className={classes.min}>{PropofolMlhMin}ml/h</span>
								<span className={classes.cardtitulo}> - </span>
								<span className={classes.max}>{PropofolMlhMax}ml/h</span>
							</Paper>
						</Grid>
						<Grid item xs>
							<Grid item xs>
								<Paper className={classes.card} id="midazolam">
									<span className={classes.cardtitulo}> Midazolam </span>
									<br />
									<span className={classes.cardsubtitulo}>
										{DiluicaoPadraoMidazolam}
									</span>
									<br />
									<span className={classes.min}>{MidazolamMlhMin}ml/h</span>
									<span className={classes.cardtitulo}> - </span>
									<span className={classes.max}>{MidazolamMlhMax}ml/h</span>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs>
							<Paper className={classes.card} id="atracurio">
								<span className={classes.cardtitulo}> Atracúrio </span>
								<br />
								<span className={classes.cardsubtitulo}>
									{" "}
									{DiluicaoPadraoAtracurio}{" "}
								</span>
								<br />
								<span className={classes.min}>{AtracurioMlhMin}ml/h</span>
								<span className={classes.cardtitulo}> - </span>
								<span className={classes.max}>{AtracurioMlhMax}ml/h</span>
							</Paper>
						</Grid>
						<Grid item xs>
							<Grid item xs>
								<Paper className={classes.card} id="rocuronio">
									<span className={classes.cardtitulo}> Rocurônio </span>
									<br />
									<span className={classes.cardsubtitulo}>
										{DiluicaoPadraoRocuronio}
									</span>
									<br />
									<span className={classes.min}>{RocuronioMlhMin}ml/h</span>
									<span className={classes.cardtitulo}> - </span>
									<span className={classes.max}>{RocuronioMlhMax}ml/h</span>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs>
							<Paper className={classes.card} id="cisatracurio">
								<span className={classes.cardtitulo}> Cisatracúrio </span>
								<br />
								<span className={classes.cardsubtitulo}>
									{" "}
									{DiluicaoPadraoCisatracurio}{" "}
								</span>
								<br />
								<span className={classes.min}>{CisatracurioMlhMin}ml/h</span>
								<span className={classes.cardtitulo}> - </span>
								<span className={classes.max}>{CisatracurioMlhMax}ml/h</span>
							</Paper>
						</Grid>
						<Grid item xs>
							<Grid item xs>
								<Paper className={classes.card} id="pancuronio">
									<span className={classes.cardtitulo}> Pancurônio </span>
									<br />
									<span className={classes.cardsubtitulo}>
										{DiluicaoPadraoPancuronio}
									</span>
									<br />
									<span className={classes.min}>{PancuronioMlhMin}ml/h</span>
									<span className={classes.cardtitulo}> - </span>
									<span className={classes.max}>{PancuronioMlhMax}ml/h</span>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs>
							<Paper className={classes.card} id="nipride">
								<span className={classes.cardtitulo}> Nipride </span>
								<br />
								<span className={classes.cardsubtitulo}>
									{" "}
									{DiluicaoPadraoNipride}{" "}
								</span>
								<br />
								<span className={classes.min}>{NiprideMlhMin}ml/h</span>
								<span className={classes.cardtitulo}> - </span>
								<span className={classes.max}>{NiprideMlhMax}ml/h</span>
							</Paper>
						</Grid>
						<Grid item xs>
							<Grid item xs>
								<Paper className={classes.card} id="tridil">
									<span className={classes.cardtitulo}> Tridil </span>
									<br />
									<span className={classes.cardsubtitulo}>
										{DiluicaoPadraoTridil}
									</span>
									<br />
									<span className={classes.min}>{TridilMlhMin}ml/h</span>
									<span className={classes.cardtitulo}> - </span>
									<span className={classes.max}>{TridilMlhMax}ml/h</span>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</Container>
			<br />
		</React.Fragment>
	);
}
