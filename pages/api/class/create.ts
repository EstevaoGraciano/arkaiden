import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

const CreateClass = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body
    switch (req.method) {
        case "POST":
            try {
                if (data.id && data.id > 0) {
                    var id = +data.id
                    const result = await prisma.class.update({ where: { id: id }, data: {
                        name: data.name,
                        description: data.description,
                        baseStr: data.baseStr,
                        baseRes: data.baseRes,
                        baseInt: data.baseInt,
                        baseAgi: data.baseAgi,
                        baseKnw: data.baseKnw,
                        baseCon: data.baseCon,
                        baseHealth: data.baseHealth,
                        baseGuard: data.baseGuard,
                        baseLowGuard: data.baseLowGuard,
                        baseDeathTurns: data.baseDeathTurns
                        
                    }})
                    res.status(200).json(result)
                } else {
                    const result = await prisma.class.create({ data: {
                        name: data.name,
                        description: data.description,
                        baseStr: data.baseStr,
                        baseRes: data.baseRes,
                        baseInt: data.baseInt,
                        baseAgi: data.baseAgi,
                        baseKnw: data.baseKnw,
                        baseCon: data.baseCon,
                        baseHealth: data.baseHealth,
                        baseGuard: data.baseGuard,
                        baseLowGuard: data.baseLowGuard,
                        baseDeathTurns: data.baseDeathTurns
                    } })
                    res.status(200).json(result)
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

export default CreateClass;