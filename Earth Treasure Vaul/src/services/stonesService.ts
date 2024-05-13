import { Stone } from "../schemas/Stone";
import { StoneInterface } from "../utils/interfaces";


export function getLastThreeLatestStones(): Promise<StoneInterface[]> {
    return Stone.find().limit(3).lean().exec();
}


export function getAllStones(): Promise<StoneInterface[]> {
    return Stone.find().lean().exec();
}


export function getSingleStone(id: string): Promise<StoneInterface> {
    return Stone.findById(id).lean().exec();
}
