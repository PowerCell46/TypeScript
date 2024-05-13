import { Request, Response } from "express";
import { getSingleStone } from "../services/stonesService";
import { StoneInterface } from "../utils/interfaces";


export function getDetailsView(req: Request, res: Response): void {
    const stoneId: string = req.params.id;

    getSingleStone(stoneId)
        .then((stoneData: StoneInterface) => 
            res.render("details", {stoneData}))
        .catch(err => console.error(err));
}
