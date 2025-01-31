import express from "express"
import questionRouter from "./routes/question.route.mjs"
import cors from "cors"

export const app = express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))

app.use("/api/v1/question", questionRouter)