import express from "express";
import { logger } from "./middlewares/logger.js";
import { todoRouter } from "./routes/todoRouter.js";
import cors from "cors";

const port = 8000;

const app = express();

app.use(express.json());
app.use(cors());
// app.use(logger);

app.use("/todo", todoRouter);

app.listen(port);
