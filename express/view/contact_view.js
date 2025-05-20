const express = require('express') // use express library
const app = express()
const port = 3000

app.get('/contact',
    (req, res) => {
         // 
    }
)
 
app.listen(port, () => {
       console.log(`Server listening on port ${port}`)
})