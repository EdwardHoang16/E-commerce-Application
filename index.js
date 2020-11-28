const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const adminProductsRouter = require("./routes/admin/products");
const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cookieSession({
        keys: ["fdkghdfjgdlfgjlfdgjkl"]
}));
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Has Started!");
});