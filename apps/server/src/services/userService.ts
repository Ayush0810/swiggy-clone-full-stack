import UserRespository from "../repositories/userRepository";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { JWT_TOKEN, EMAIL_ID } from "../configs/serverConfig";
import transporter from "../configs/emailConfig";
import { PrismaClient } from "@prisma/client";
import { Token } from "nodemailer/lib/xoauth2";
const prisma = new PrismaClient();
export default class UserService {
	private userRepository: UserRespository;
	constructor() {
		this.userRepository = new UserRespository();
	}
	/**
	 * The function creates a user using the provided data and returns the created user.
	 * @param data - The `data` parameter is an object that contains the information needed to create a new
	 * user. It could include properties such as username, email, password, etc.
	 * @returns The `create` method is returning the `user` object.
	 */
	//@ts-ignore
	async create(data) {
		try {
			const user = this.userRepository.create(data);
			return user;
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}

	/**
	 * The `signin` function takes a phone number and plain password as parameters, checks if the password
	 * matches the user's password, generates a JWT token if the password matches, and throws an error if
	 * there is any issue.
	 * @param phone - The phone parameter is the phone number of the user trying to sign in.
	 * @param plainPassword - The plainPassword parameter is the password entered by the user in plain text
	 * format.
	 * @returns a JWT token.
	 */
	async signin(phone: number, plainPassword: string) {
		try {
			const user = await this.userRepository.findByPhone(phone);
			//@ts-ignore
			const passwordMatch = this.checkPassword(plainPassword, user.password);
			if (!passwordMatch) {
				console.log("password don't match");
				throw { error: "Password doesn't match" };
			}

			const jwtToken = this.generateToken({
				//@ts-ignore
				id: user.id,
				//@ts-ignore
				isOwner: user.isOwner,
			});
			return jwtToken;
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}

	generateOtp() {
		try {
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}

	verifyOtp() {}

	/**
	 * The function `checkPassword` compares a plain password with an encrypted password using the bcrypt
	 * library and returns a boolean value indicating whether they match.
	 * @param plainPassword - The plainPassword parameter is the password entered by the user in its
	 * original form, before it is encrypted or hashed.
	 * @param encryptedPassword - The encrypted password is the password that has been previously hashed
	 * using a cryptographic algorithm, such as bcrypt. It is stored in the database or any other storage
	 * medium in its hashed form to ensure security.
	 * @returns the result of the comparison between the plain password and the encrypted password using
	 * the bcrypt.compareSync() method.
	 */
	checkPassword(plainPassword: string, encryptedPassword: string) {
		try {
			return bcrypt.compareSync(plainPassword, encryptedPassword);
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}

	/**
	 * The function `verifyToken` verifies a JWT token using a secret key and returns the decoded token if
	 * it is valid.
	 * @param token - The token parameter is a string that represents a JSON Web Token (JWT).
	 * @returns The response from the jwt.verify() function is being returned.
	 */
	verifyToken(token: string) {
		try {
			//@ts-ignore
			const response = jwt.verify(token.token, JWT_TOKEN);
			console.log(response);
			return response;
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}

	/**
	 * The function generates a JSON Web Token (JWT) with a user payload and returns it as a Bearer token.
	 * @param user - The `user` parameter is an object that contains the user information that will be
	 * encoded into the token.
	 * @returns a token string.
	 */
	//@ts-ignore
	generateToken(user) {
		try {
			//@ts-ignore
			const result = jwt.sign(user, JWT_TOKEN, {
				expiresIn: "1d",
			});
			const token = result;
			return token;
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}

	/**
	 * The `destroy` function asynchronously deletes a user with the specified `id` using the
	 * `userRepository` and returns the deleted user.
	 * @param id - The id parameter is the unique identifier of the user that needs to be destroyed or
	 * deleted from the user repository.
	 * @returns The user object is being returned.
	 */
	async destroy(id: string) {
		try {
			const user = await this.userRepository.destroy(id);
			return user;
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}

	/**
	 * The function updates a user's information based on the provided data and returns the updated user.
	 * @param data - An object containing the updated user data. It may have properties like name, email,
	 * and phone, which represent the updated values for the corresponding user attributes.
	 * @param id - The id parameter is the unique identifier of the user that needs to be updated.
	 * @returns the updated user object.
	 */
	//@ts-ignore
	async update(data, id) {
		try {
			//@ts-ignore
			const user = await this.userRepository.findById(id);
			//@ts-ignore
			const updatedUser = await prisma.user.update({
				where: {
					//@ts-ignore
					id: user.id,
				},
				data: data,
			});
			return updatedUser;
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}

	/**
	 * The function `get` retrieves a user by their ID from a user repository and returns the user.
	 * @param id - The `id` parameter is the unique identifier of the user that you want to retrieve from
	 * the database.
	 * @returns The user object is being returned.
	 */
	async get(id: string) {
		try {
			const user = await this.userRepository.findById(id);
			return user;
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}

	/**
	 * The function `sendEmail` sends an email with the specified email address, subject, and text content.
	 * @param email - The email parameter is the email address of the recipient to whom you want to send
	 * the email.
	 * @param subject - The subject parameter is a string that represents the subject of the email. It is
	 * the title or brief description of the email content.
	 * @param text - The `text` parameter is the content of the email that you want to send. It can be a
	 * plain text message or HTML content.
	 */
	async sendEmail(email: string, subject: string, text: string) {
		try {
			const info = await transporter.sendMail({
				from: EMAIL_ID,
				to: email,
				subject: subject,
				text: text,
			});
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}

	/**
	 * The `forgetPassword` function is an asynchronous function that takes an email as a parameter and
	 * performs the following steps:
	 * 1. It tries to find a user with the given email using the `findByEmail` method of the
	 * `userRepository`.
	 * 2. If no user is found, it throws an error indicating that the user does not exist.
	 * 3. If a user is found, it generates a reset token using the `generateForgotPasswordToken` method of
	 * the user object.
	 * 4. It saves the user object.
	 * 5. It constructs a reset password URL using the reset token and a base URL.
	 * 6. It constructs a message containing the reset password URL and a default message.
	 * 7. It sends an email to the user's email address using the `sendEmail` method, passing the email
	 * address, a subject, and the message.
	 * 8. If any error occurs during the process, it logs the error message and throws an error.
	 * @param email - The email parameter is the email address of the user who wants to reset their
	 * password.
	 */
	async forgetPassword(email: string) {
		try {
			const user = await this.userRepository.findByEmail(email);
			if (!user) {
				throw { error: "user does not exists" };
			}

			const resetToken = await this.generateForgotPasswordToken();
			console.log("reset token", resetToken);
			const resetPasswordUser = await prisma.user.update({
				where: {
					id: user.id,
				},
				data: {
					forgotPasswordToken: resetToken,
					forgotPasswordExpiry: new Date(Date.now() + 10 * 60 * 1000),
				},
			});
			const url = `http://localhost:5000/api/v1/resetpassword/${resetToken}`;

			const message = `Click on the link to reset your password. ${url}. If you have not request then please ignore.`;

			await this.sendEmail(user.email, "Swiggy Reset Password", message);
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}

	async generateForgotPasswordToken() {
		const resetToken = crypto.randomBytes(20).toString("hex");
		console.log("resent token", resetToken);
		const passwordResetToken = crypto
			.createHash("sha256")
			.update(resetToken)
			.digest("hex");
		console.log("password token", passwordResetToken);
		return passwordResetToken;
	}
	/**
	 * The function `resetPassword` takes a token and a password as parameters, hashes the token, finds a
	 * user with a matching token and valid expiry date, updates the user's password and clears the token
	 * and expiry fields, and returns the updated user.
	 * @param token - The token parameter is a string that represents the reset password token generated
	 * for a user. This token is typically sent to the user's email address when they request to reset
	 * their password.
	 * @param password - The `password` parameter is the new password that the user wants to set for their
	 * account.
	 * @returns the updated user object.
	 */
	async resetPassword(token: string, password: string) {
		try {
			var user = await this.userRepository.findToken(token);
			if (!user || user.forgotPasswordToken !== token) {
				throw new Error("Invalid token");
			}
			const hashedPassword = await bcrypt.hash(password, 10);
			user = await prisma.user.update({
				where: {
					id: user.id,
				},
				//@ts-ignore
				data: {
					password: hashedPassword,
					forgotPasswordExpiry: undefined,
					//@ts-ignore
					resetPasswordToken: undefined,
				},
			});
			return user;
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer : ", error.message);
				throw { error };
			}
		}
	}
	//@ts-ignore
	async addAddress(data, id) {
		try {
			const updateUserAddress = await prisma.address.create({
				data: {
					...data,
					latitude: 0.0,
					longitude: 0.0,
					radius: 0,
					User: {
						connect: {
							id: id,
						},
					},
				},
			});
			return updateUserAddress;
		} catch (error) {
			if (error instanceof Error) {
				console.log("something went wrong in service layer", error.message);
				throw { error };
			}
		}
	}
}
