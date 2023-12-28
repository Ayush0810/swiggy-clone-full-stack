import express ,{ Router } from "express"
import { signup, signin, deleteAccount, updateAccountDetails, getUser, forgetPassword, resetPassword, getAllUser, addAddress } from "../../controllers/userController"
import {isOwner, verifyUser} from "../../middlewares/authMiddleware"
const router = express.Router()
router.route("/signup").post(signup)
router.route("/signin").post(signin)
router.route("/delete-profile").delete(verifyUser, deleteAccount)
router.route("/update-profile").put(verifyUser , updateAccountDetails)
router.route("/profile").get(verifyUser , getUser)
router.route("/forgotpassword").post(forgetPassword)
router.route("/resetpassword/:token").put(resetPassword)
router.route("/addAdress").put(verifyUser, addAddress)


export default router