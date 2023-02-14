"use strict";
exports.__esModule = true;
var express = require('express');
var dotenv = require('dotenv');
var cors = require('cors');
// const cookieParser = require('cookie-parser');
var userRouter = require('./routes/user.routes');
// const errorMiddleware = require('./middlewares/error-middleware')
dotenv.config();
var app = express();
// const port: number = Number(process.env.PORT);
var port = 8080;
app.use(express.json());
// app.use(cookieParser());
app.use(cors());
app.use('/api', userRouter);
var main = function () {
    try {
        app.listen(port, function () {
            console.log("[server]: Server is running at http://localhost:".concat(port));
        });
    }
    catch (e) {
        console.log(e);
    }
};
main();
