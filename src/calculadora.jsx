import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	Titulo1: {
		fontSize: 30,
		fontFamily: "Bebas Neue",
		textAlign: "center",
		fontWeight: "700",
		height: 50
	},

	Input: {
		border: "2px solid #000000",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		height: 150,
		width: 290,
		padding: 18
	},
	Subtitulo: {
		fontSize: 20,
		fontFamily: "Bebas Neue",
		fontWeight: "500",
		color: "#ffffff",
		backgroundColor: "#263238",
		border: "2px solid #ffffff",
		borderRadius: 10,
		textAlign: "center",
		width: 100,
		height: 45
	},

	Titulo: {
		fontSize: 30,
		fontFamily: "Bebas Neue",
		textAlign: "center",
		fontWeight: "700",
		height: 50
	},
	NomeDaDroga: {
		fontSize: 25,
		fontFamily: "Bebas Neue",
		textAlign: "center",
		fontWeight: "200",
		height: 50
	},
	DiluiçãoDaDroga: {
		fontSize: 15,
		fontFamily: "Roboto",
		color: "gray"
	},
	DoseDaDroga: {
		fontSize: 20,
		fontFamily: "Roboto",
		color: "blue"
	},
	MlDaDroga: {
		color: "red"
	}
}));

export default function Calculadora() {
	const [p, setP] = useState(70);
	const [mlh, setMLH] = useState(10);

	const peso = parseFloat(p);
	const classes = useStyles();

	///// drogas
	//Nora
	const NoraDoseSol = 64; //concentração da solução
	const DiluicaoPadraoNora = "Noradrenalina 4amp para 250ml ";
	const NoraMlhMax = Math.round(((4 * peso) / NoraDoseSol) * 60);
	const NoraMlhMin = Math.round(((0 * peso) / NoraDoseSol) * 60);
	const NoraDoseAtual = (mlh * NoraDoseSol) / 60 / peso;

	//Dobuta
	const DobutaDoseSol = 1; //concentração da solução
	const DiluicaoPadraoDobuta = "Dobutamina 1amp para 250ml ";
	const DobutaMlhMax = Math.round(((20 * peso) / (DobutaDoseSol * 1000)) * 60);
	const DobutaMlhMin = Math.round(((2.5 * peso) / (DobutaDoseSol * 1000)) * 60);
	const DobutaDoseAtual = ((mlh * DobutaDoseSol) / 60 / peso) * 1000;

	//Fentanil
	const FentanilDoseSol = 10; //concentração da solução
	const DiluicaoPadraoFentanil = "Fentanil 20ml para 100ml ";
	const FentanilMlhMax = Math.round((5 * peso) / FentanilDoseSol);
	const FentanilMlhMin = Math.round((0.5 * peso) / FentanilDoseSol);
	const FentanilDoseAtual = (mlh * FentanilDoseSol) / peso;

	//Precedex
	const PrecedexDoseSol = 4; //concentração da solução
	const DiluicaoPadraoPrecedex = "Precedex 2ml para 50ml ";
	const PrecedexMlhMax = Math.round((0.7 * peso) / PrecedexDoseSol);
	const PrecedexMlhMin = Math.round((0.2 * peso) / PrecedexDoseSol);
	const PrecedexDoseAtual = (mlh * PrecedexDoseSol) / peso;

	//Propofol
	const PropofolDoseSol = 10; //concentração da solução
	const DiluicaoPadraoPropofol = "Propofol 80ml";
	const PropofolMlhMax = Math.round((5 * peso) / PropofolDoseSol);
	const PropofolMlhMin = Math.round((0.5 * peso) / PropofolDoseSol);
	const PropofolDoseAtual = (mlh * PropofolDoseSol) / peso;

	//Midazolam
	const MidazolamDoseSol = 2; //concentração da solução
	const DiluicaoPadraoMidazolam = "Midazolam 40ml para 100ml";
	const MidazolamMlhMax = Math.round((600 * peso) / (MidazolamDoseSol * 1000));
	const MidazolamMlhMin = Math.round((20 * peso) / (MidazolamDoseSol * 1000));
	const MidazolamDoseAtual = ((mlh * MidazolamDoseSol) / peso) * 1000;

	//Atracurio
	const AtracurioDoseSol = 1; //concentração da solução
	const DiluicaoPadraoAtracurio = "Atracúrio 25ml para 250ml";
	const AtracurioMlhMax = Math.round((600 * peso) / 1000 / AtracurioDoseSol);
	const AtracurioMlhMin = Math.round((300 * peso) / 1000 / AtracurioDoseSol);
	const AtracurioDoseAtual = ((mlh * AtracurioDoseSol) / 60 / peso) * 1000;

	//Rocuronio
	const RocuronioDoseSol = 1; //concentração da solução
	const DiluicaoPadraoRocuronio = "Rocurônio 25ml para 250ml";
	const RocuronioMlhMax = Math.round((0.6 * peso) / RocuronioDoseSol);
	const RocuronioMlhMin = Math.round((0.3 * peso) / RocuronioDoseSol);
	const RocuronioDoseAtual = (mlh * RocuronioDoseSol) / peso;

	//Cisatracurio
	const CisatracurioDoseSol = 0.5; //concentração da solução
	const DiluicaoPadraoCisatracurio = "Cisatracúrio 25ml para 100ml";
	const CisatracurioMlhMax = Math.round(
		(4 * 60 * peso) / 1000 / CisatracurioDoseSol
	);
	const CisatracurioMlhMin = Math.round(
		(1 * 60 * peso) / 1000 / CisatracurioDoseSol
	);
	const CisatracurioDoseAtual =
		((mlh * CisatracurioDoseSol) / 60 / peso) * 1000;

	//Pancuronio
	const PancuronioDoseSol = 0.4; //concentração da solução
	const DiluicaoPadraoPancuronio = "Pancurônio 20ml para 100ml";
	const PancuronioMlhMax = Math.round((0.1 * peso) / PancuronioDoseSol);
	const PancuronioMlhMin = Math.round((0 * peso) / PancuronioDoseSol);
	const PancuronioDoseAtual = (mlh * PancuronioDoseSol) / peso;

	//nipride
	const NiprideDoseSol = 0.2; //concentração da solução
	const DiluicaoPadraoNipride = "Nipride 2ml para 250ml";
	const NiprideMlhMax = Math.round((60 * 10 * peso) / 1000 / NiprideDoseSol);
	const NiprideMlhMin = Math.round((60 * 0.3 * peso) / 1000 / NiprideDoseSol);
	const NiprideDoseAtual = ((mlh * NiprideDoseSol) / 60 / peso) * 1000;

	//tridil
	const TridilDoseSol = 0.2; //concentração da solução
	const DiluicaoPadraoTridil = "Tridil 2ml para 250ml";
	const TridilMlhMax = Math.round((20 * 6 * peso) / (100 / TridilDoseSol));
	const TridilMlhMin = Math.round((5 * 6 * peso) / (100 / TridilDoseSol));
	const TridilDoseAtual = ((mlh * TridilDoseSol) / 60 / peso) * 1000;

	const handleChange = (event: any, newValue: number | number[]) => {
		setMLH(newValue);
	};
	const handleChange2 = (event: any, newValue: number | number[]) => {
		setP(newValue);
	};

	return (
		<React.Fragment>
			<Container className={classes.Titulo1}>Selecione</Container>

			<Container className={classes.Input}>
				<Grid container spacing={2} alignItems="center">
					<Grid item className={classes.Subtitulo}>
						<center> {p}kg </center>
					</Grid>
					<Grid item>
						<Slider
							value={p}
							style={{ color: "black", width: 140, marginLeft: 5 }}
							min={40}
							step={1}
							max={150}
							onChange={handleChange2}
							valueLabelDisplay="auto"
						/>
					</Grid>
				</Grid>
				<br />
				<Grid container spacing={2} alignItems="center">
					<Grid item className={classes.Subtitulo}>
						<center> {mlh} ml/h </center>
					</Grid>
					<Grid item>
						<Slider
							value={mlh}
							style={{ color: "black", width: 140, marginLeft: 5 }}
							min={0}
							step={1}
							max={100}
							onChange={handleChange}
							valueLabelDisplay="auto"
						/>
					</Grid>
				</Grid>
			</Container>
			<br />
			<Container>
				<span className={classes.Titulo}> Drogas </span>
				<List>
					<ListItem id="Noradrenalina">
						<ListItemText
							primary={
								<div>
									<span className={classes.NomeDaDroga}> Noradrenalina </span>
									<br />
									<span className={classes.DiluiçãoDaDroga}>
										{DiluicaoPadraoNora}
									</span>
								</div>
							}
							secondary={
								<div>
									<span className={classes.DoseDaDroga}>
										Dose atual de {NoraDoseAtual.toFixed(2)}mcg/kg/min
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Mínimo de {NoraMlhMin}ml/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Máximo de {NoraMlhMax}ml/h
									</span>
								</div>
							}
						/>
					</ListItem>
					<Divider />
					<ListItem id="Dobutamina">
						<ListItemText
							primary={
								<div>
									<span className={classes.NomeDaDroga}> Dobutamina </span>
									<br />
									<span className={classes.DiluiçãoDaDroga}>
										{DiluicaoPadraoDobuta}
									</span>
								</div>
							}
							secondary={
								<div>
									<span className={classes.DoseDaDroga}>
										Dose atual de {DobutaDoseAtual.toFixed(2)}mcg/kg/min
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Mínimo de {DobutaMlhMin}ml/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Máximo de {DobutaMlhMax}ml/h
									</span>
								</div>
							}
						/>
					</ListItem>
					<Divider />
					<ListItem id="Fentanil">
						<ListItemText
							primary={
								<div>
									<span className={classes.NomeDaDroga}> Fentanil </span>
									<br />
									<span className={classes.DiluiçãoDaDroga}>
										{DiluicaoPadraoFentanil}
									</span>
								</div>
							}
							secondary={
								<div>
									<span className={classes.DoseDaDroga}>
										Dose atual de {FentanilDoseAtual.toFixed(2)}mcg/kg/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Mínimo de {FentanilMlhMin}ml/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Máximo de {FentanilMlhMax}ml/h
									</span>
								</div>
							}
						/>
					</ListItem>
					<Divider />
					<ListItem id="Precedex">
						<ListItemText
							primary={
								<div>
									<span className={classes.NomeDaDroga}> Precedex </span>
									<br />
									<span className={classes.DiluiçãoDaDroga}>
										{DiluicaoPadraoPrecedex}
									</span>
								</div>
							}
							secondary={
								<div>
									<span className={classes.DoseDaDroga}>
										Dose atual de {PrecedexDoseAtual.toFixed(2)}mcg/kg/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Mínimo de {PrecedexMlhMin}ml/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Máximo de {PrecedexMlhMax}ml/h
									</span>
								</div>
							}
						/>
					</ListItem>
					<Divider />
					<ListItem id="Propofol">
						<ListItemText
							primary={
								<div>
									<span className={classes.NomeDaDroga}> Propofol </span>
									<br />
									<span className={classes.DiluiçãoDaDroga}>
										{DiluicaoPadraoPropofol}
									</span>
								</div>
							}
							secondary={
								<div>
									<span className={classes.DoseDaDroga}>
										Dose atual de {PropofolDoseAtual.toFixed(2)}mcg/kg/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Mínimo de {PropofolMlhMin}ml/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Máximo de {PropofolMlhMax}ml/h
									</span>
								</div>
							}
						/>
					</ListItem>
					<Divider />
					<ListItem id="Midazolam">
						<ListItemText
							primary={
								<div>
									<span className={classes.NomeDaDroga}> Midazolam </span>
									<br />
									<span className={classes.DiluiçãoDaDroga}>
										{DiluicaoPadraoMidazolam}
									</span>
								</div>
							}
							secondary={
								<div>
									<span className={classes.DoseDaDroga}>
										Dose atual de {MidazolamDoseAtual.toFixed(2)}mcg/kg/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Mínimo de {MidazolamMlhMin}ml/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Máximo de {MidazolamMlhMax}ml/h
									</span>
								</div>
							}
						/>
					</ListItem>
					<Divider />
					<ListItem id="Atracurio">
						<ListItemText
							primary={
								<div>
									<span className={classes.NomeDaDroga}> Atracúrio </span>
									<br />
									<span className={classes.DiluiçãoDaDroga}>
										{DiluicaoPadraoAtracurio}
									</span>
								</div>
							}
							secondary={
								<div>
									<span className={classes.DoseDaDroga}>
										Dose atual de {AtracurioDoseAtual.toFixed(2)}mcg/kg/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Mínimo de {AtracurioMlhMin}ml/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Máximo de {AtracurioMlhMax}ml/h
									</span>
								</div>
							}
						/>
					</ListItem>
					<Divider />
					<ListItem id="Rocuronio">
						<ListItemText
							primary={
								<div>
									<span className={classes.NomeDaDroga}> Rocurônio </span>
									<br />
									<span className={classes.DiluiçãoDaDroga}>
										{DiluicaoPadraoRocuronio}
									</span>
								</div>
							}
							secondary={
								<div>
									<span className={classes.DoseDaDroga}>
										Dose atual de {RocuronioDoseAtual.toFixed(2)}mcg/kg/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Mínimo de {RocuronioMlhMin}ml/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Máximo de {RocuronioMlhMax}ml/h
									</span>
								</div>
							}
						/>
					</ListItem>
					<Divider />

					<ListItem id="Cisatracurio">
						<ListItemText
							primary={
								<div>
									<span className={classes.NomeDaDroga}> Cisatracúrio </span>
									<br />
									<span className={classes.DiluiçãoDaDroga}>
										{DiluicaoPadraoCisatracurio}
									</span>
								</div>
							}
							secondary={
								<div>
									<span className={classes.DoseDaDroga}>
										Dose atual de {CisatracurioDoseAtual.toFixed(2)}mcg/kg/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Mínimo de {CisatracurioMlhMin}ml/h
									</span>
									<br />
									<span className={classes.MlDaDroga}>
										Máximo de {CisatracurioMlhMax}ml/h
									</span>
								</div>
							}
						/>
					</ListItem>
					<Divider />
				</List>

				<ListItem id="Pancuronio">
					<ListItemText
						primary={
							<div>
								<span className={classes.NomeDaDroga}> Pancurônio </span>
								<br />
								<span className={classes.DiluiçãoDaDroga}>
									{DiluicaoPadraoPancuronio}
								</span>
							</div>
						}
						secondary={
							<div>
								<span className={classes.DoseDaDroga}>
									Dose atual de {PancuronioDoseAtual.toFixed(2)}mcg/kg/h
								</span>
								<br />
								<span className={classes.MlDaDroga}>
									Mínimo de {PancuronioMlhMin}ml/h
								</span>
								<br />
								<span className={classes.MlDaDroga}>
									Máximo de {PancuronioMlhMax}ml/h
								</span>
							</div>
						}
					/>
				</ListItem>
				<Divider />
				<ListItem id="Nipride">
					<ListItemText
						primary={
							<div>
								<span className={classes.NomeDaDroga}> Nipride </span>
								<br />
								<span className={classes.DiluiçãoDaDroga}>
									{DiluicaoPadraoNipride}
								</span>
							</div>
						}
						secondary={
							<div>
								<span className={classes.DoseDaDroga}>
									Dose atual de {NiprideDoseAtual.toFixed(2)}mcg/kg/h
								</span>
								<br />
								<span className={classes.MlDaDroga}>
									Mínimo de {NiprideMlhMin}ml/h
								</span>
								<br />
								<span className={classes.MlDaDroga}>
									Máximo de {NiprideMlhMax}ml/h
								</span>
							</div>
						}
					/>
				</ListItem>
				<Divider />
				<ListItem id="Tridil">
					<ListItemText
						primary={
							<div>
								<span className={classes.NomeDaDroga}> Tridil </span>
								<br />
								<span className={classes.DiluiçãoDaDroga}>
									{DiluicaoPadraoTridil}
								</span>
							</div>
						}
						secondary={
							<div>
								<span className={classes.DoseDaDroga}>
									Dose atual de {TridilDoseAtual.toFixed(2)}mcg/kg/h
								</span>
								<br />
								<span className={classes.MlDaDroga}>
									Mínimo de {TridilMlhMin}ml/h
								</span>
								<br />
								<span className={classes.MlDaDroga}>
									Máximo de {TridilMlhMax}ml/h
								</span>
							</div>
						}
					/>
				</ListItem>
				<Divider />
			</Container>
		</React.Fragment>
	);
}
