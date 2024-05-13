import { Request, Response } from "express";
import { getSingleStone } from "../services/stonesService";
import { StoneInterface } from "../utils/interfaces";
import { Stone } from "../schemas/Stone";
import { SERVER_ENDPOINTS } from "../utils/constants";


export function getEditView(req: Request, res: Response): void {
    const stoneId = req.params.id;

    getSingleStone(stoneId)
        .then((stoneData: StoneInterface) => {
            res.render("edit", {stoneData});
        })
        .catch(err => console.error(err));
}


export function editHandler(req: Request, res: Response): void {
    const stoneId: string = req.params.id;

    const {name, category, color, image, location, formula, description} = req.body;
    
    Stone.findByIdAndUpdate(stoneId, {name, category, color, image, location, formula, description})
        .then((stoneData: StoneInterface) => {
            console.log(stoneData);
            
            res.redirect(`${SERVER_ENDPOINTS.details}/${stoneId}`);
        })
        .catch((err: Error) => console.error(err));
}