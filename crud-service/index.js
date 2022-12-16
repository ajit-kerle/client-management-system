import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import Routes from "./server/routes.js"

import Connection from "./database/db.js"
dotenv.config()
const app=express()


app.use(cors());
app.use(express.json())
app.use('/', Routes);

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const PORT=8000

Connection(USERNAME,PASSWORD)

app.listen(PORT,()=>console.log(`server is running on ${PORT}..`))

