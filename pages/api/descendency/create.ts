import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

const CreateDescendency = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body
    switch (req.method) {
        case "POST":
            try {
                if (data.id && data.id > 0) {
                    var id = +data.id
                    const result = await prisma.descendency.update({ where: { id: id }, data: {
                        name: data.name,
                        description: data.description
                    }})
                    res.status(200).json(result)
                } else {
                    const result = await prisma.descendency.create({ data: data })
                    res.status(200).json(result)
                }
            } catch (e) {
                res.status(500).json({ messate: e.message })
            } finally {
                prisma.$disconnect();
            }
            break;
        default:
            res.status(500).json({ message: 'WRONG METHOD '})
            break;
    }
}

export default CreateDescendency;