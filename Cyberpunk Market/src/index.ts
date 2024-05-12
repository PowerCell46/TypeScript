import page from "page";
import { homeView } from './controllers/views/homeController';
import { registerView } from './controllers/views/registerController';
import { loginView } from "./controllers/views/loginController";
import { dashboardView } from "./controllers/views/dashboard";
import { detailsView } from "./controllers/views/detailsController";
import { createView } from "./controllers/views/createController";
import { editView } from "./controllers/views/editController";
import authMiddleware, { authForbidden, authRequired, creatorRequired } from "./middlewares/authMiddlewares";
import headerMiddleware from "./middlewares/headerMiddleware";
import { appEndpoints } from "./utils/constants";


page(authMiddleware);

page(headerMiddleware);



page(appEndpoints.home, homeView);


page(appEndpoints.register, authForbidden, registerView);

page(appEndpoints.login, authForbidden, loginView);



page(appEndpoints.create, authRequired, createView);

page(appEndpoints.dashboard, dashboardView);

page(`${appEndpoints.details}/:id`, detailsView);

page(`${appEndpoints.edit}/:id`, creatorRequired, editView);


page.start();