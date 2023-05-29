import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

const GetByIdClass = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = +req.query.id
    switch (req.method) {
        case "GET":
            try {
                const result = await prisma.class.findFirst({where: {id : data}})
                if (result != null) {
                    res.status(200).json(result)
                } else {
                    res.status(200).json({ message: 'Not found'})
                }
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

export default GetByIdClass;