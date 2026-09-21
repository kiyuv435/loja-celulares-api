import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.use("/celulares", celularesRouter)

app.listen(port, () => {
    console.log(`app rodando em http://localhost:3000`);

})