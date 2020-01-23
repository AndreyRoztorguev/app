const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const UserModel = require('./models/User');
const jsonParser = express.json();
const app = express();

dotenv.config();
const PORT = process.env.PORT; 



app.post('/api/signIn', jsonParser, (req, res) => {
    const data = req.body.name;
    if(data){
        res.send(data)
    }
    res.send('hui')
}) 
app.get('/api/signIn', (req, res) => {
    res.send('gopa')
})

app.listen(PORT, (error) => {
    if(error) console.log(`app.listen: ${error}`);
    console.log(`App listen on ${PORT}`);
});

