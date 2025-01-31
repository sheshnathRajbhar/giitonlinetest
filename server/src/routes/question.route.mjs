import { Router } from "express";
import { questionController } from "../controllers/question.controller.mjs";

const router = Router()

router.route("/").get(questionController)


export default router