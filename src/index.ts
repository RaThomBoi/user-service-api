import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3100;

app.get("/", (req, res) => {
	res.send("Express + TypeScript Server");
});

app.listen(PORT, () =>
	console.log(`Express + TypeScript Server is listening on PORT = ${PORT}`)
);
