import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { CreateUserInput } from "./type";
import bodyParser from "body-parser";
import { User } from "./entities/User";

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3100;

app.get("/", (req, res) => {
	res.send("Welcome to user-service-api");
});

app.get("/users", async (req, res) => {
	const users = await prisma.user.findMany({
		where: { isDeleted: false },
	});

	res.json(users);
});

app.post("/user", async (req: Request, res: Response) => {
	const { body }: { body: CreateUserInput } = req;
	const newUserOrError = User.create(body);

	if (newUserOrError instanceof Error) {
		res.status(400);
		res.json("Can not create User based on your input data");
	}

	try {
		const newUser = newUserOrError as User;
		const createdUser = await prisma.user.create({
			data: {
				firstname: newUser.firstname,
				lastname: newUser.lastname,
				age: newUser.age,
			},
		});
		res.json(createdUser);
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while creating the user" });
	}
});

app.delete("/user/id", async (req: Request, res: Response) => {
	const userId = req.params.id;

	try {
		const deletedUser = await prisma.user.delete({
			where: {
				id: userId,
			},
		});
		res.json(deletedUser);
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while deleting the user" });
	}
});

app.listen(PORT, () =>
	console.log(`Express + TypeScript Server is listening on PORT = ${PORT}`)
);
