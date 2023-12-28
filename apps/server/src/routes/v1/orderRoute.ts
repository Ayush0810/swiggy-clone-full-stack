import express from "express";
import { verifyUser } from "../../middlewares/authMiddleware";
import { createOrder, deleteOrder, getAllOrder, getOrder, updateOrder } from "../../controllers/orderController";

const orderRouter = express.Router()

orderRouter.route('/createOrder').post(verifyUser, createOrder)
orderRouter.route('/getOrder').post(verifyUser, getOrder)
orderRouter.route('/getAllOrder').post(verifyUser, getAllOrder)
orderRouter.route('/updateOrder').post(verifyUser, updateOrder)
orderRouter.route('/deleteOrder').post(verifyUser, deleteOrder)



export default orderRouter