import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class OrderRepository {
	//@ts-ignore
	async create(data, userId) {
		try {
			//@ts-ignore
			const order = await prisma.order.create({
				data: {
					...data,
					user: {
						connect: {
							id: userId,
						},
					},
				},
			});
			return order;
		} catch (error) {
			if (error instanceof Error) {
				console.log("error occured at repository level", error.message);
				throw { error };
			}
		}
	}

	async findByOrderId(id: string) {
		try {
			const particularOder = prisma.order.findUnique({
				where: {
					id,
				},
			});
			return particularOder;
		} catch (error) {
			if (error instanceof Error) {
				console.log("error occured at repository level", error.message);
				throw { error };
			}
		}
	}

	async findAll(userId: string) {
		try {
			const allOrder = await prisma.order.findMany({
				where: {
					userId,
				},
			});
			return allOrder;
		} catch (error) {
			if (error instanceof Error) {
				console.log("error occured at repository level", error.message);
				throw { error };
			}
		}
	}

	//TODO : need to check what happens on updating of order
	// async update(data , id:string) {
	// 	try {
	//         const particularOder = prisma.order.update({
	// 			where: {
	// 				id,
	// 			},
	// 		});
	// 		return particularOder;
	// 	} catch (error) {
	// 		if (error instanceof Error) {
	// 			console.log("error occured at repository level", error.message);
	// 			throw { error };
	// 		}
	// 	}
	// }

	async destroy(orderId: string) {
		try {
			const deleteOrder = prisma.order.delete({
				where: {
					id: orderId,
				},
			});
			return deleteOrder;
		} catch (error) {
			if (error instanceof Error) {
				console.log("error occured at repository level", error.message);
				throw { error };
			}
		}
	}
}
