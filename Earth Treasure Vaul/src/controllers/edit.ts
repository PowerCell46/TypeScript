import { Request, Response } from "express";
import { getSingleStone } from "../services/stonesService";
import { StoneInterface } from "../utils/interfaces";
import { Stone } from "../schemas/Stone";
import { SERVER_ENDPOINTS } from "../utils/constants";
import { validateStoneData } from "../utils/validators";


export function getEditView(req: Request, res: Response): void {    
    const stoneId = req.params.id;

    getSingleStone(stoneId)
        .then((stoneData: StoneInterface) => {
            // console.log(stoneData);

            res.render("edit", {stoneData});
        })
        .catch((err: Error) => 
            res.render("error", {error: "Error fetching the data!"}
        ));
}


export function editHandler(req: Request, res: Response): void {
    const stoneId: string = req.params.id;

    const name: string = req.body["name"].trim();
    const category: string = req.body["category"].trim();
    const color: string = req.body["color"].trim();
    const image: string = req.body["image"].trim();
    const location: string = req.body["location"].trim();
    const formula: string = req.body["formula"].trim();
    const description: string = req.body["description"].trim(); // sanitization

    const validateResult = validateStoneData(name, category, color, formula, location, description, image);

    if (validateResult !== true) { // validation
        res.render("create", {error: validateResult, name, category, color, image, location, formula, description});
        return;
    }
    
    Stone.findByIdAndUpdate(stoneId, {name, category, color, image, location, formula, description})
        .then((stoneData: StoneInterface) => {
            // console.log(stoneData);
            
            res.redirect(`${SERVER_ENDPOINTS.details}/${stoneId}`);
        })
        .catch((err: Error) => {
            console.log(`Error updating the Stone!`);
            
            res.render("edit", {name, category, color, image, location, formula, description})
        });
}