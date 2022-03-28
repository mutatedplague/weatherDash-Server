import { Router, Request, Response } from "express";
import indexController from "../controllers/indexController";

const routes = Router();

routes.use("/", indexController.index);

export default routes;