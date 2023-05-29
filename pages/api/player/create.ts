import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

const CreatePlayer = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body
    switch (req.method) {
        case "POST":
            try {
                const result = await prisma.player.create({ data: data })
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

export default CreatePlayer;