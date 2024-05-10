import { UserInterface } from "../utils/interfaces";
import { Http } from "./http";


export class UserApi extends Http<UserInterface> {
    // custom logic when fetching or sending data - validations & sanitizations
}
