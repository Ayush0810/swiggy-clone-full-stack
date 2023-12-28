import express ,{ Router } from "express"
import userV1apiRoutes from './v1/userRoute'
import orderV1apiRoutes from './v1/orderRoute'
const router = express.Router()

router.use("/v1", userV1apiRoutes)
router.use("/v1", orderV1apiRoutes)

export default router