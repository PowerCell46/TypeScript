import { Request, Response } from "express";
import { getAllStones, getSearchedStones } from "../services/stonesService";
import { StoneInterface } from "../utils/interfaces";


export function getSearchView(req: Request, res: Response): void {
    getAllStones()
        .then((stones: StoneInterface[]) => res.render("search", {hasStones: stones.length > 0, stones}))
        .catch((err: Error) => 
            res.render("error", {error: "Error fetching the data!"}
        ));
}


export function searchHandler(req: Request, res: Response): void {
    const searchName = req.body["searchName"].trim().toLowerCase(); // sanitization

    getSearchedStones(searchName)
        .then((stones: StoneInterface[]) => res.render("search", {hasStones: stones.length > 0, stones}))
        .catch((err: Error) => 
            res.render("error", {error: "Error fetching the data!"}
        ));
}