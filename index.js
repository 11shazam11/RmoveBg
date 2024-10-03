import dotenv from "dotenv";
dotenv.config();

import express from "express";
//for login and register features
import {
  reisterUser,
  loginUser,
} from "./src/features/users/user.controller.js";

import session from "express-session";
//multer upload config
import { uploadconfig } from "./src/features/files/fileUpload.js";
//preview peatures
import {
  saveAndPreview,
  externalURL,
} from "./src/features/files/file.controller.js";
//Api integrations
import { upscale } from "./src/features/files/file.api.js";
//starting server
const app = express();
//serve static files from "public" directory
app.use(express.static("public"));
//set Ejs as temlate engine
app.set("view engine", "ejs");
//dir whrere ejs templates are located
app.set("views", "./src/views");
//middleware for parsing URL-encodeddata
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//session config
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
//home page
app.get("/", (req, res) => {
  res.render("layout", { er: false });
});

app.post("/login", loginUser);

app.get("/register", (req, res) => {
  res.render("register");
});
//remove bg
app.get("/upscale", upscale);

app.post("/remove",externalURL);

app.post("/register", reisterUser);

app.post("/upload", uploadconfig.single("data"), saveAndPreview);
//port congig
app.listen(3000, () => {
  console.log("Server is listning at 3000");
});
