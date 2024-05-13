import { Request, Response } from "express";
import { Stone } from "../schemas/Stone";
import { StoneInterface } from "../utils/interfaces";
import { SERVER_ENDPOINTS } from "../utils/constants";


export default function likeHandler(req: Request, res: Response): void {
    const stoneId: string = req.params.id;
    const userId = (req as any).userId as string;

    Stone.findByIdAndUpdate(stoneId, { $push: { likedList: userId } }, { new: true })
        .then((stone: StoneInterface) => {
            console.log(stone);
            
            res.redirect(`${SERVER_ENDPOINTS.details}/${stoneId}`);
        })
        .catch((err: Error) => {
            console.log(`Error adding the user Id to the Like list.`);

            res.render("error", {error: "An Error Occurred!"})
        });
}