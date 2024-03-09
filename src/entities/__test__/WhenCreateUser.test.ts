import { CreateUserInput, User } from "../User";

const createUserInput: CreateUserInput = {
	firstname: "Jessada",
	lastname: "Srimoon",
	age: 27,
};

describe("When create User", () => {
	let createdUser: User;
	createdUser = User.create(createUserInput) as User;

	it("Should create User correctly", () => {
		expect(createdUser).toBeInstanceOf(User);
	});
});
