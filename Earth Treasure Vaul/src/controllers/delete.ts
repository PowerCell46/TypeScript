import { Request, Response } from "express";
import { Stone } from "../schemas/Stone";
import { SERVER_ENDPOINTS } from "../utils/constants";


export function deleteHandler(req: Request, res: Response): void {
    const stoneId: string = req.params.id;

    Stone.findByIdAndDelete(stoneId)
        .then((data: any) => {
            console.log(data);
            
            res.redirect(SERVER_ENDPOINTS.dashboard);
        })
        .catch((err: Error) => console.error(err));
}