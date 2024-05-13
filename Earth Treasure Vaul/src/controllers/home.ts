import { Request, Response } from "express";
import { getLastThreeLatestStones } from "../services/stonesService";
import { StoneInterface } from "../utils/interfaces";


export function getHomeView(req: Request, res: Response): void {
    getLastThreeLatestStones()
        .then((stones: StoneInterface[]) => {
            // console.log(stones);

            res.render("home", {hasStones: stones.length > 0, stones});
        })
        .catch((err: Error) => 
            res.render("error", {error: "Error fetching the data!"}
        ));
}