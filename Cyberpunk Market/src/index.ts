import page from "page";
import { homeView } from './controllers/homeController';
import { registerView } from './controllers/registerController';
import { loginView } from "./controllers/loginController";
import { dashboardView } from "./controllers/dashboard";
import { detailsView } from "./controllers/detailsController";
import { createView } from "./controllers/createController";
import { editView } from "./controllers/editController";
import authMiddleware from "./middlewares/authMiddleware";


page(authMiddleware);


page("/", homeView);


page("/register", () => registerView());

page("/login", () => loginView());



page("/create", () => createView());

page("/dashboard", () => dashboardView());

page("/details/:id", () => detailsView());

page("/edit/:id", () => editView());


page.start();