const expreess = require('express')
const userControler = require('./controllers/users')

require('dotenv').config()

const PORT = process.env.PORT ?? 8000

const app = expreess()

app
    .use(expreess.json())
    .use('/users',userControler)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})