
const fs = require("fs")

function showContents(error, data) {
   if(!error)
       console.log(data)
}

fs.readFile("./files/async/names.txt", "utf-8", 
               (err, data) => {
                if(err) // err is not null
                   console.log("Error " + err.message)
                else
                   console.log(data)
               }
            )

fs.readFile("./files/async/names.txt", "utf-8", showContents)            

console.log(new Date())
