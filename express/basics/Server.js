const express = require('express') // use express library

const app = express()
const port = 3000
 
app.get('/',
    (req, res) => {
         res.send('<h1 style="color:red">Hello World!</h1>')
    }
)

app.get('/now',
    (req, res) => {
         let dt = new Date()
         res.send(`<h1 style="color:blue">${dt.toString()}</h1>`)
    }
)

app.listen(port, 
    () => {  console.log(`Server listening on port ${port}`)
})