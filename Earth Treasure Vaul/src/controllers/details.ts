import { Request, Response } from "express";
import { getSingleStone } from "../services/stonesService";
import { StoneInterface } from "../utils/interfaces";


export function getDetailsView(req: Request, res: Response): void {
    const stoneId: string = req.params.id;
    const userId = (req as any).userId as string;
    
    getSingleStone(stoneId)
    .then((stoneData: StoneInterface) => {
        const isCreator = stoneData.owner.toString() === userId;

        const foundItem = stoneData.likedList.find(id => id.toString() === userId);
        
        const hasNotLiked =  userId !== undefined && foundItem === undefined && !isCreator;
        const hasLiked = userId !== undefined && foundItem !== undefined && !isCreator;

        res.render("details", {stoneData, isCreator, hasLiked, hasNotLiked})
    })
    .catch((err: Error) => 
        res.render("error", {error: "Error fetching the data!"}
    ));
}
