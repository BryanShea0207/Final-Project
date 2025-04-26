const expreess = require('express')
const userControler = require('./controllers/users')
const summaryControler = require('./controllers/summaries')
const postControler = require('./controllers/posts')

require('dotenv').config()

const PORT = process.env.PORT ?? 8000

const app = expreess()

app
    .use(expreess.json())
    .use('/users',userControler)
    .use('/summaries', summaryControler)
    .use('/posts', postControler)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})