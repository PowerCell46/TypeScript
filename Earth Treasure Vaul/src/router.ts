const router = require("express").Router();
import { getRegisterView, registerHandler } from "./controllers/register";
import { SERVER_ENDPOINTS } from "./utils/constants";
import { getLoginView, loginHandler } from "./controllers/login";
import { getHomeView } from "./controllers/home";
import { createHandler, getCreateView } from "./controllers/create";


router.get(SERVER_ENDPOINTS.home, getHomeView);


router.route(SERVER_ENDPOINTS.register)
.get(getRegisterView)
.post(registerHandler);

router.route(SERVER_ENDPOINTS.login)
.get(getLoginView)
.post(loginHandler);


router.route(SERVER_ENDPOINTS.create)
.get(getCreateView)
.post(createHandler)

export default router;