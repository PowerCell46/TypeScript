const bcrypt = require("bcryptjs");
import {SALT_ROUNDS} from "./constants";



export function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
}


export function verifyPassword(password: string, hashedPass: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPass);
}





