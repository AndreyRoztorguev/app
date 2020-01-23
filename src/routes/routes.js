const express = require('express');
const bodyParser = require('body-parser');
const UserModel = require('./models/User');


const app = express();
app.use(bodyParser.json());
app.get('/api/signIn', () => {
    res.send('cerf')
})
app.post('/api/signIn', (req, res) => {
    const {email, password, name, surname} = req.body;
    // UserModel.find({email}, (err, user) => {
    //     if(user){
    //         res.send('Пользователь с таким email уже существует.')
    //     }
    const userData = {
        email,
        password,
        name,
        surname
    };
    const newUser = new UserModel(userData);
    newUser.save()
        
});

