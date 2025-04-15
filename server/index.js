const expreess = require('express')

require('dotenv').config()

const PORT = process.env.PORT ?? 8000

const app = expreess()

app.use(expreess.json())

app.listen(PORT => {
    console.log("Server is running")
})