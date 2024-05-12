import { Request, Response } from "express";
const express = require("express");

const app = express();
const PORT = 3001;


app.get("/", (req: Request, res: Response) => {
    res.send("WORKS")
    console.log("Home Page!");
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
