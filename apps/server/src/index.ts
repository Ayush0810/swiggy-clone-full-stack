import express, { Request, Response } from "express"
const app = express();
// const { connectDb } = require("./configs/db");
import cookieParser from 'cookie-parser'

import userRoute from "./routes/index";
import { PORT } from "./configs/serverConfig"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use("/api/v1", userRoute);

app.get("/", (req:Request, res:Response) => {
	res.send("Hello World!");
});
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
