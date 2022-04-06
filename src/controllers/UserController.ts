import { Request, Response } from 'express';

const users = [
    { name: 'John', email: 'john@gmail.com' },
]

export default {
    async index(req: Request, res : Response) {
        return res.json(users)
    }
}