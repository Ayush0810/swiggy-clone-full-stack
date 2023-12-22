import nodemailer from "nodemailer";
import { EMAIL_ID, EMAIL_PASS } from "./serverConfig";
const transporter = nodemailer.createTransport({
    service:'Gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASS
    }
});

export default transporter
