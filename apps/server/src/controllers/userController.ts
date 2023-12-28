import UserService from "../services/userService.js";
import express, { Request, Response } from "express";
const userService = new UserService();
/**
 * The `signup` function is an asynchronous function that creates a new user by extracting the name,
 * email, phone, and password from the request body, and then calls the `userService.create` function
 * to create the user in the database.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, headers, and sending the response body.
 * @returns a response object with a status code and a JSON object containing the success status,
 * response data, and a message.
 */
export const signup = async (req: Request, res: Response) => {
	const {name, email, phone, password } = req.body;
	try {
		const response = await userService.create({
			name,
			email,
			phone,
			password,
		});
		return res.status(200).json({
			success: true,
			response: response,
			message: "successfully created new user",
		});
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	}
};

/**
 * The function `signin` is an asynchronous function that handles the sign-in process by taking the
 * phone number and password from the request body, calling the `signin` function from the
 * `userService`, and returning a response with a success status, message, and token if the sign-in is
 * successful, or an error message if it fails.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, headers, and sending the response body.
 * @returns a response object with a status code of 200 if the sign-in is successful. The response
 * object contains the properties "success" (set to true), "message" (set to "signed in successfully"),
 * and "token" (set to the response from the userService.signin() function).
 */
export const signin = async (req: Request, res: Response) => {
	const { phone, password } = req.body;
	try {
		const response = await userService.signin(phone, password);
		return res.status(200).cookie("token", response).json({
			success: true,
			message: "signed in succesfully",
		});
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	}
};

/**
 * The forgetPassword function is an asynchronous function that takes in a request and response object,
 * retrieves the email from the request body, and calls the userService.forgetPassword function to send
 * an email to the registered email address.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters. It is used to
 * access the data sent by the client.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, headers, and sending the response body.
 * @returns a response object with a status code and a JSON object containing a success flag and a
 * message.
 */
export const forgetPassword = async (req: Request, res: Response) => {
	const { email } = req.body;
	try {
		const password = await userService.forgetPassword(email);
		return res.status(200).json({
			success: true,
			message: "an email has been sent to your registered email id",
		});
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	}
};

/**
 * The function `resetPassword` is an asynchronous function that takes in a request and response
 * object, extracts the token and password from the request parameters and body respectively, and then
 * calls the `resetPassword` function from the `userService` module to reset the password.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as headers, query parameters, and request body. It is used to retrieve data from
 * the request, such as the token and password in this case.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to set the status code, headers, and
 * send the response body.
 * @returns a response with a status code of 200 and a JSON object containing the properties "success"
 * set to true and "message" set to "password reset successfully" if the password reset is successful.
 * If there is an error, the function returns a response with a status code of 500 and a JSON object
 * containing the properties "success" set to false and "message" set
 */
export const resetPassword = async (req: Request, res: Response) => {
	const { token } = req.params;
	const { password } = req.body;
	try {
		const resetPassword = await userService.resetPassword(token, password);
		return res.status(200).json({
			success: true,
			message: "password reset successfully",
		});
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	}
};

/**
 * The getUser function is an asynchronous function that retrieves user details and returns a JSON
 * response with the user object.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to set the status code, headers, and
 * send the response body.
 * @returns a response object with a status code and a JSON object containing the success status,
 * message, and user details.
 */
export const getUser = async (req: Request, res: Response) => {
	try {
		//@ts-ignore
		const user = await userService.get(req.user.id);
		return res.status(200).json({
			success: false,
			message: "your details",
			user,
		});
	} catch (error: unknown) {
		return res.status(500).json({
			success: false,
			message: "internal server error",
		});
	}
};

/**
 * The function `updateAccountDetails` updates the account details of a user and returns a success
 * message along with the updated data.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, headers, and sending the response body.
 * @returns a response object with a status code of 200 and a JSON object containing the properties
 * success, message, and data.
 */
export const updateAccountDetails = async (req: Request, res: Response) => {
	const { email, phone} = req.body;
	try {
		//@ts-ignore
		const response = await userService.update(
			{ email, phone  },
			//@ts-ignore
			req.user.id
		);
		return res.status(200).json({
			success: true,
			message: "data updated successfully",
			data: response,
		});
	} catch (error: unknown) {
		return res.status(500).json({
			success: false,
			message: "internal server error",
		});
	}
};

/**
 * The `deleteAccount` function is an asynchronous function that deletes a user account and returns a
 * success message if the deletion is successful, or an error message if there is an error.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to set the status code, headers, and
 * send the response body.
 * @returns a JSON response with a status code of 200 if the account is deleted successfully. The
 * response includes a success property set to true and a message property set to "account deleted
 * successfully". If there is an error, the function returns a JSON response with a status code of 500.
 * The response includes a success property set to false and a message property containing the error
 * message.
 */
export const deleteAccount = async (req: Request, res: Response) => {
	try {
		//@ts-ignore
		const response = await userService.destroy(req.user.id);
		return res.status(200).json({
			success: true,
			message: "account deleted succesfully",
		});
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	}
};


export const getAllUser =async (req:Request , res:Response) => {
	return res.status(200).json({
		success:true,
		message:"got all user"
	})
}


export const addAddress = async(req:Request , res:Response) =>{
	const {name ,floor , location ,city , state , nearBy , pincode } = req.body
	try {
		const data = {name ,floor , location ,city , state , nearBy , pincode }
		//@ts-ignore
		const user = await userService.addAddress(data, req.user.id)
		return res.status(200).json({
			success:true,
			message:"data added successfully"
			
		})
	} catch (error) {
		if(error instanceof Error){
			return res.status(500).json({
				success:false,
				message:error.message
			})
		}
	}
}