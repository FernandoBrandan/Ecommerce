const express = require("express");
const app = express();

//middleware
const setupMiddlewares = require("./middlewares/init");
setupMiddlewares.setupMiddlewares(app);

//database
require("./database.js")

//routes
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.use("/home", require("./routers/homeRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/admin", require("./routers/adminRouter"));
app.use("/product", require("./routers/productsRouter"));
app.use("/auth", require("./routers/authRouter"));

// administrador: /admin/login
// administrador: /admin/logout

module.exports = app;
