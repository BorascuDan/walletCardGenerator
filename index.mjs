import express from "express"
import dotenv from "dotenv"
import apiRoute from "./src/routes.mjs";

dotenv.config();
const { PORT: port = "" } = process.env

const app = express();
app.use(
  express.urlencoded({ extended: true }),
  express.json(),
)
app.use('/api', apiRoute)

const server = app.listen(port);
server.on('error', (e) => { console.error("failed to start due to: ", e) })
