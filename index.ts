import { Express } from 'express';
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user.routes')
// const errorMiddleware = require('./middlewares/error-middleware')

dotenv.config();

const app: Express = express();
// const port: number = Number(process.env.PORT);
const port: number = 8080;

app.use(express.json())
// app.use(cookieParser());
app.use(cors());

app.use('/api', userRouter);

const main = () => {
    try {
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        })
    } catch (e) {
        console.log(e);
    }
}

main();
