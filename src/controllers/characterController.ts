import { Request, Response } from "express";

class CharacterController {
    constructor() { }

    async getAllCharacters(req: Request, res: Response) {
        try {
            const data = "Todos characters";
            res.status(200).json(data);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
        }
    }
}

export default new CharacterController();