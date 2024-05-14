import { Request, Response } from "express";
import { Stone } from "../schemas/Stone";
import { StoneInterface } from "../utils/interfaces";
import { SERVER_ENDPOINTS } from "../utils/constants";
import { validateStoneData } from "../utils/validators";


export function getCreateView(req: Request, res: Response): void {
    res.render("create");
}


export function createHandler(req: Request, res: Response): void {
    const name: string = req.body["name"].trim();
    const category: string = req.body["category"].trim();
    const color: string = req.body["color"].trim();
    const image: string = req.body["image"].trim();
    const location: string = req.body["location"].trim();
    const formula: string = req.body["formula"].trim();
    const description: string = req.body["description"].trim();

    const userId = (req as any).userId as string;

    const validateResult = validateStoneData(name, category, color, formula, location, description, image);

    if (validateResult !== true) {
        res.render("create", {error: validateResult, name, category, color, image, location, formula, description});
        return;
    }
    
    Stone.create({name, category, color, image, location, formula, description, owner: userId})
        .then((stone: StoneInterface) => {
            // console.log(stone);

            res.redirect(SERVER_ENDPOINTS.dashboard);
        })
        .catch((err: Error) => res.render("create", {error: "Error with the creation!", 
            name, category, color, image, location, formula, description
        }));
}