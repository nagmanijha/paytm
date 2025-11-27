import express from "express"
import router from './routes/index.js'
import authmiddleware from './middleware.js'
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json()) 

app.use('/api/v1', authmiddleware, router)

app.listen(3000, () => {
   console.log("hello there, i am listening.")
});

