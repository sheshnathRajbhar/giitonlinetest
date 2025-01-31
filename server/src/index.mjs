import { app } from "./app.mjs";

import env from "dotenv"
env.config()




const port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`App is running on port http://localhost:${port}`)
})

