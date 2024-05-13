import { Request, Response } from "express";
import { Stone } from "../schemas/Stone";
import { StoneInterface } from "../utils/interfaces";
import { SERVER_ENDPOINTS } from "../utils/constants";


export function getCreateView(req: Request, res: Response): void {
    res.render("create");
}


export function createHandler(req: Request, res: Response) {
    const {name, category, color, image, location, formula, description} = req.body;
    const userId = (req as any).userId as string;

    // move to a service
    Stone.create({name, category, color, image, location, formula, description, owner: userId})
        .then((stone: StoneInterface) => {
            // console.log(stone);

            res.redirect(SERVER_ENDPOINTS.dashboard);
        })
        .catch((err: Error) => console.error(err));
}