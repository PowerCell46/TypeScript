import { Request, Response } from "express";
import { getAllStones } from "../services/stonesService";
import { StoneInterface } from "../utils/interfaces";


export function getDashboardView(req: Request, res: Response): void {
    getAllStones()
        .then((stones: StoneInterface[]) => {
            // console.log(stones);
            
            res.render("dashboard", {hasStones: stones.length > 0, stones});            
        })
        .catch((err: Error) => 
            res.render("error", {error: "Error fetching the data!"}
        ));
}