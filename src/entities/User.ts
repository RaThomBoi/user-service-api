const { v4: uuidv4 } = require("uuid");
interface IUser {
	updateFirstname(firstname: string): User | Error;
	updateLastname(lastname: string): User | Error;
	updateAge(age: number): User | Error;
}

type CreateUserInput = {
	firstname: string;
	lastname: string;
	age: number;
};

interface UserProps {
	firstname: string;
	lastname: string;
	age: number;
}

export class User implements IUser {
	private _id: string;
	private _firstname: string;
	private _lastname: string;
	private _age: number;

	constructor(props: UserProps) {
		this._id = uuidv4();
		this._firstname = props.firstname;
		this._lastname = props.lastname;
		this._age = props.age;
	}

	static create(props: CreateUserInput) {
		if (typeof props.firstname !== "string") {
			return new Error("firstname must be a non-null string");
		}
		if (typeof props.lastname !== "string") {
			return new Error("lastname must be a non-null string");
		}
		if (typeof props.age !== "number") {
			return new Error("age must be number");
		}
		return new User(props);
	}

	updateFirstname(firstname: string) {
		if (typeof firstname !== "string") {
			return new Error("firstname must be a non-null string");
		}

		this._firstname = firstname;
		return this;
	}

	updateLastname(lastname: string) {
		if (typeof lastname !== "string") {
			return new Error("lastname must be a non-null string");
		}

		this._lastname = lastname;
		return this;
	}

	updateAge(age: number) {
		if (typeof age !== "number") {
			return new Error("age must be number");
		}

		this._age = age;
		return this;
	}

	get firstname(): string {
		return this._firstname;
	}

	get lastname(): string {
		return this._lastname;
	}

	get id(): string {
		return this._id;
	}

	get age(): number {
		return this._age;
	}
}
