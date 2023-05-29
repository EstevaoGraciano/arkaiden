import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

const GetAllClass = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            try {
                const result = await prisma.class.findMany()
                res.status(200).json(result)
            } catch (e) {
                res.status(500).json({ message: e.message })
            } finally {
                prisma.$disconnect();
            }
            break;
        default:
            res.status(500).json({ message: 'WRONG METHOD '})
            break;
    }
}

export default GetAllClass;