import { Request, Response } from "express";


export const createOrder =async (req:Request , res:Response) => {
    try {
        
    } catch (error) {
        if (error instanceof Error){
            console.log("error occured at controller layer" , error.message)
            return res.status(500).json({
                success:false,
                message:"internal server error"
            })
        }
    }
}


export const getOrder =async (req:Request , res:Response) => {
    try {
        
    } catch (error) {
        if (error instanceof Error){
            console.log("error occured at controller layer" , error.message)
            return res.status(500).json({
                success:false,
                message:"internal server error"
            })
        }
    }
}
export const getAllOrder =async (req:Request , res:Response) => {
    try {
        
    } catch (error) {
        if (error instanceof Error){
            console.log("error occured at controller layer" , error.message)
            return res.status(500).json({
                success:false,
                message:"internal server error"
            })
        }
    }
}

export const updateOrder =async (req:Request , res:Response) => {
    try {
        
    } catch (error) {
        if (error instanceof Error){
            console.log("error occured at controller layer" , error.message)
            return res.status(500).json({
                success:false,
                message:"internal server error"
            })
        }
    }
}

export const deleteOrder =async (req:Request , res:Response) => {
    try {
        
    } catch (error) {
        if (error instanceof Error){
            console.log("error occured at controller layer" , error.message)
            return res.status(500).json({
                success:false,
                message:"internal server error"
            })
        }
    }
}