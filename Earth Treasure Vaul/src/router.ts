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
import { getSearchView, searchHandler } from "./controllers/search";


router
.get(SERVER_ENDPOINTS.home, getHomeView);


// Authentication
router.route(SERVER_ENDPOINTS.register)
.get(authForbidden, getRegisterView)
.post(authForbidden, registerHandler);


router.route(SERVER_ENDPOINTS.login)
.get(authForbidden, getLoginView)
.post(authForbidden, loginHandler);


router
.get(SERVER_ENDPOINTS.logout, authRequired, logoutHandler);


// Stones
router.route(SERVER_ENDPOINTS.create)
.get(authRequired, getCreateView)
.post(authRequired, createHandler);


router
.get(SERVER_ENDPOINTS.dashboard, getDashboardView);


router.route(SERVER_ENDPOINTS.search)
.get(authRequired, getSearchView)
.post(authRequired, searchHandler);


router
.get(`${SERVER_ENDPOINTS.details}/:id`, getDetailsView);


router.route(`${SERVER_ENDPOINTS.edit}/:id`)
.get(creatorRequired, getEditView)
.post(creatorRequired, editHandler);


router
.get(`${SERVER_ENDPOINTS.delete}/:id`, creatorRequired, deleteHandler);


// Likes
router.get(`${SERVER_ENDPOINTS.like}/:id`, authRequired, likeHandler);



// Error 
router
.all("*", getErrorView);



export default router;