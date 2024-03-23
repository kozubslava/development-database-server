const express = require("express");
const router = require("./routers");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(router);

const PORT = 5000;

app.listen(PORT);
