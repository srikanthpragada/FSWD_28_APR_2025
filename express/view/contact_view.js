const express = require('express') // use express library
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views','./templates')

app.get('/contact',
    (req, res) => {
         res.render('contact',
              { 
                email : 'info@srikanthtechnologies.com',
                mobile : '905905700'
              }
         )  // ./templates/contact.ejs 
    }
)
 
app.listen(port, () => {
       console.log(`Server listening on port ${port}`)
})