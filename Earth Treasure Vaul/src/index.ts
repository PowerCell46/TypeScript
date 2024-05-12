
const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
import router from "./router";
import { DB_CONNECTION, SERVER_PORT } from "./utils/constants";


const app = express();


app.engine("hbs", handlebars.engine({extname: "hbs"}));
app.set("view engine", "hbs");


app.use("/static", express.static(`${__dirname}\\static`));
app.set("views", `${__dirname}\\views`); 
app.use(express.urlencoded({extended: false})); // parses the sent data


app.use(cookieParser());

app.use(router);


mongoose.set("strictQuery", false);
mongoose.connect(DB_CONNECTION);
// mongoose.set("debug", true);


app.listen(SERVER_PORT, () => 
    console.log(`Server is running on http://localhost:${SERVER_PORT}`
));
