import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import exclude from "../utils/exclude"


prisma.$use(async (params, next) => {
	if (params.model === "User" && params.action === "create") {
		params.args.data.password = await bcrypt.hash(
			params.args.data.password,
			10
		);
	}

	return next(params);
});

export default class UserRespository {
	/**
	 * The above function is an asynchronous function that creates a new user and saves it to the database,
	 * returning the created user.
	 * @param data - The `data` parameter is an object that contains the information needed to create a new
	 * user. It could include properties such as `name`, `email`, `password`, etc.
	 * @returns The `create` function is returning the `user` object.
	 */
//@ts-ignore
	async create(data) {
		try {
			const user = await prisma.user.create({ data });
			return user;
		} catch (error) {
			console.log("something went wrong at repository layer", error);
			throw { error };
		}
	}

	/**
	 * The function `findByEmail` is an asynchronous function that finds a user by their email in a
	 * database and returns the user object.
	 * @param email - The `email` parameter is the email address of the user you want to find in the
	 * database.
	 * @returns The `findByEmail` function is returning the user object that is found in the database.
	 */
	async findByEmail(email:string) {
		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email,
				},
			});
			return user;
		} catch (error) {
			console.log("something went wrong at repository layer", error);
			throw { error };
		}
	}

	/**
	 * The `destroy` function is an asynchronous function that deletes a user with the specified ID and
	 * returns the deleted user.
	 * @param userID - The `userID` parameter is the unique identifier of the user that needs to be deleted
	 * from the database.
	 * @returns The `destroy` function is returning the deleted user object.
	 */
	async destroy(userID:string) {
		try {
			const user = await prisma.user.delete({
				where: {
					id: userID,
				},
			});
			return user;
		} catch (error) {
			//@ts-ignore
			console.log("something went wrong at repository layer", error.message);
			throw { error };
		}
	}

	/**
	 * The function `findByPhone` is an asynchronous function that finds a user by their phone number and
	 * returns the user object.
	 * @param phone - The `phone` parameter is the phone number that you want to use to find a user in the
	 * database.
	 * @returns the user object that is found in the database based on the provided phone number.
	 */
	async findByPhone(phone:number) {
		try {
			const user = await prisma.user.findUnique({
				where: { phone: phone },
			});
			return user;
		} catch (error) {
			console.log("something went wrong at repository layer", error);
			throw { error };
		}
	}

	/**
	 * The function `findById` is an asynchronous function that retrieves a user by their ID and returns
	 * it, or throws an error if something goes wrong.
	 * @param userId - The `userId` parameter is the unique identifier of the user that we want to find in
	 * the database. It is used to query the database and retrieve the user with the matching ID.
	 * @returns The `findById` function is returning the user object that is found by the `User.findById`
	 * method.
	 */

	  
	async findById(userId:string) {
		try {
			const user = await prisma.user.findUnique({
				where: {
					id: userId,
				},
			});
			//@ts-ignore
			const userWithoutPassword = exclude(user, ['password'])
			return userWithoutPassword;
		} catch (error) {
			console.log("something went wrong at repository layer", error);
			throw { error };
		}
	}

	/**
	 * The function `findToken` is an asynchronous function that searches for a user based on a reset token
	 * and returns the user object without the password.
	 * @param resetToken - The `resetToken` parameter is a token that is used for resetting a user's
	 * password. It is typically generated and sent to the user's email address when they request a
	 * password reset.
	 * @returns the user object that matches the provided resetToken.
	 */
	async findToken(resetToken:string) {
		try {
			const user = await prisma.user.findFirst({where:{

					forgotPasswordToken: resetToken,
				},}
			);
			console.log("user", user)
			return user;
		} catch (error) {
			console.log("something went wrong at repository layer", error);
			throw { error };
		}
	}
}


