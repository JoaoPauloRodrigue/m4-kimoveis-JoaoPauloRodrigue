import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./error";
import {
  categoriesRouter,
  realEstateRouter,
  schedulesRouter,
  sessionRouter,
  usersRouter,
} from "./routes";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);

app.use("/login", sessionRouter);

app.use("/categories", categoriesRouter);

app.use("/realEstate", realEstateRouter);

app.use("/schedules", schedulesRouter);

app.use(handleErrors);
export default app;
