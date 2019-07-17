const express = require('express');
const path = require('path')
// const logger = require
const members = require('./members');
const logger = require('./midlware/logger')
const app = express();
const cors = require('cors')

app.use(cors())

app.get('/', (req, response)=> {
    
    console.log('Hello from Node')   
    response.json({message: 'hello from the server'})

});


app.get('/poop/:text', (req, res)=> {
    console.log(req.params.text)


});


// app.use(logger);

//gets all members
app.get('/api/members',(req, res)=> res.json(members));

// app.get('/',(req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

//set a static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;



app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));