const express = require('express') // use express library
const path = require("path")
const app = express()
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/add',
    (req, res) => {
        res.render('add',
            {
                total: '',
                first: '',
                second: ''
            })
    }

)

app.get('/addprocess',
    (req, res) => {
        // Handle form submission 
        let total = parseInt(req.query.first) +
            parseInt(req.query.second)
        res.render("add",
            {
                total: total,   // result
                first: req.query.first,  // input
                second: req.query.second
            }
        )  // input
    }
)

app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)