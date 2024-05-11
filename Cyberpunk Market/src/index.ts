import page from "page";
import { homeView } from './controllers/views/homeController';
import { registerView } from './controllers/views/registerController';
import { loginView } from "./controllers/views/loginController";
import { dashboardView } from "./controllers/views/dashboard";
import { detailsView } from "./controllers/views/detailsController";
import { createView } from "./controllers/views/createController";
import { editView } from "./controllers/views/editController";
import authMiddleware from "./middlewares/authMiddleware";
import headerMiddleware from "./middlewares/headerMiddleware";


page(authMiddleware);

page(headerMiddleware);



page("/", homeView);


page("/register", () => registerView());

page("/login", () => loginView());



page("/create", () => createView());

page("/dashboard", () => dashboardView());

page("/details/:id", () => detailsView());

page("/edit/:id", () => editView());


page.start();