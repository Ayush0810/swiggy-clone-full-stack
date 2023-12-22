import { Prisma, PrismaClient } from '@prisma/client'
import UserService from  "../services/userService.js"
import express, { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient()

const userService = new UserService();
/**
 * The `verifyUser` function is an asynchronous middleware function that checks if a user is authorized
 * by verifying their token and attaching the user object to the request.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as headers, query parameters, and request body. It is used to access the headers
 * of the request in this code snippet.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, sending JSON data, or redirecting the client to another URL.
 * @param next - The `next` parameter is a callback function that is used to pass control to the next
 * middleware function in the request-response cycle. It is typically used to move to the next
 * middleware function or to end the request-response cycle by sending a response.
 * @returns a JSON response with a status code and a message. If the header is missing or the token is
 * missing, the response will have a status code of 400 and a message of "not authorized". If there is
 * an error during the verification process, the response will have a status code of 500 and a message
 * of "internal server error".
 */

export const verifyUser = async (req:Request, res:Response,next:NextFunction) => {
	try {
		const token = req.cookies;
		if (!token) {
			return res.status(400).json({
				success: false,
				message: "not authorized",
			});
		}

		const decoded = userService.verifyToken(token);
		//@ts-ignore
		req.user = await prisma.user.findUnique({ where: { id: decoded.id } });
		next();
	} catch (error:unknown) {
		if(error instanceof Error){
			console.log("something went wrong in auth middle ware", error.message);
			return res.status(500).json({
				success: false,
				message: "internal server error",
			});
		}
	}
};

