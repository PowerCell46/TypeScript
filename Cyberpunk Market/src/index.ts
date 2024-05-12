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
import { appEndpoints } from "./utils/constants";


page(authMiddleware);

page(headerMiddleware);

// authRequired authForbidden isCreator !!! middlewares


page(appEndpoints.home, homeView);


page(appEndpoints.register, registerView);

page(appEndpoints.login, loginView);



page(appEndpoints.create, createView);

page(appEndpoints.dashboard, dashboardView);

page(`${appEndpoints.details}/:id`, detailsView);

page(`${appEndpoints.edit}/:id`, editView);


page.start();