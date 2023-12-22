import { config } from "dotenv";
import path  from "path";
console.log(__dirname+".env")
config({
	path: path.join(__dirname, ".env"),
},
);

const { PORT, JWT_TOKEN, OTP_API_KEY, EMAIL_ID, EMAIL_PASS } = process.env;
export {
	PORT,
	JWT_TOKEN,
	OTP_API_KEY,
	EMAIL_ID,
	EMAIL_PASS,
};
