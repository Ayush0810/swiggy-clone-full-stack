import express, { Request, Response } from "express"
const app = express();
import cookieParser from 'cookie-parser'

import mainRoutes from "./routes/index";
import { PORT } from "./configs/serverConfig"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use("/api", mainRoutes);

app.get("/", (req:Request, res:Response) => {
	res.send("Hello World!");
});
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
