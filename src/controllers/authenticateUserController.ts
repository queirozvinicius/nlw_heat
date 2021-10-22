import {Request, Response} from "express";
import { AuthenticateUSerService } from "../services/authenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response){

        const { code } = request.body;

        const service = new AuthenticateUSerService();

        const result = await service.execute(code);

        return response.json(result);
    }
}

export { AuthenticateUserController }