import { UserApi } from "./api/user-api";
import { onNavigate } from "./utils/onNavigate";


const homeAnchor:HTMLElement|null = document.getElementById("home");

const aboutAnchor:HTMLElement|null = document.getElementById("about");

const contactAnchor:HTMLElement|null = document.getElementById("contact");



homeAnchor?.addEventListener("click", () => onNavigate("/"));


aboutAnchor?.addEventListener("click", () => onNavigate("/about"));


contactAnchor?.addEventListener("click", () => onNavigate("/contact"));

const userApi = new UserApi();

userApi.getAll();
userApi.getOne(10);
// userApi.delete(10);