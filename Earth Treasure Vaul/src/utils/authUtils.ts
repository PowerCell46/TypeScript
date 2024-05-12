const bcrypt: any = require('bcrypt');
import { SALT_ROUNDS } from "./constants";

// There is some problem !!!

export function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
}