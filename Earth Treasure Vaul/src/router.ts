const router = require("express").Router();
import { getRegisterView, registerHandler } from "./controllers/register";
import { SERVER_ENDPOINTS } from "./utils/constants";
import { getLoginView, loginHandler } from "./controllers/login";
import { getHomeView } from "./controllers/home";
import { createHandler, getCreateView } from "./controllers/create";
import { logoutHandler } from "./controllers/logout";
import { getDashboardView } from "./controllers/dashboard";
import { getDetailsView } from "./controllers/details";
import { editHandler, getEditView } from "./controllers/edit";
import { getErrorView } from "./controllers/error";
import {deleteHandler} from "./controllers/delete";


router
.get(SERVER_ENDPOINTS.home, getHomeView);


router.route(SERVER_ENDPOINTS.register)
.get(getRegisterView)
.post(registerHandler);

router.route(SERVER_ENDPOINTS.login)
.get(getLoginView)
.post(loginHandler);

router
.get(SERVER_ENDPOINTS.logout, logoutHandler);


router.route(SERVER_ENDPOINTS.create)
.get(getCreateView)
.post(createHandler);

router
.get(SERVER_ENDPOINTS.dashboard, getDashboardView);

router
.get(`${SERVER_ENDPOINTS.details}/:id`, getDetailsView);

router.route(`${SERVER_ENDPOINTS.edit}/:id`)
.get(getEditView)
.post(editHandler);

router
.get(`${SERVER_ENDPOINTS.delete}/:id`, deleteHandler);

router
.all("*", getErrorView);


export default router;