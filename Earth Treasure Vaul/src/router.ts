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
import { authForbidden, authRequired, creatorRequired } from "./middlewares/authMiddleware";
import likeHandler from "./controllers/like";


router
.get(SERVER_ENDPOINTS.home, getHomeView);


router.route(SERVER_ENDPOINTS.register)
.get(authForbidden, getRegisterView)
.post(authForbidden, registerHandler);


router.route(SERVER_ENDPOINTS.login)
.get(authForbidden, getLoginView)
.post(authForbidden, loginHandler);


router
.get(SERVER_ENDPOINTS.logout, authRequired, logoutHandler);


router.route(SERVER_ENDPOINTS.create)
.get(authRequired, getCreateView)
.post(authRequired, createHandler);


router
.get(SERVER_ENDPOINTS.dashboard, getDashboardView);


router
.get(`${SERVER_ENDPOINTS.details}/:id`, getDetailsView);


router.get(`${SERVER_ENDPOINTS.like}/:id`, authRequired, likeHandler);


router.route(`${SERVER_ENDPOINTS.edit}/:id`)
.get(creatorRequired, getEditView)
.post(creatorRequired, editHandler);


router
.get(`${SERVER_ENDPOINTS.delete}/:id`, creatorRequired, deleteHandler);


router
.all("*", getErrorView);


export default router;