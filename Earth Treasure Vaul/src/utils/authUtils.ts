const bcrypt: any = require('bcrypt');
import { SALT_ROUNDS } from "./constants";


export function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
}