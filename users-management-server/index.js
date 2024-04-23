const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const users = [
    {id:1, name: 'rakibul', email:'rakibul@gmail.com'},
    {id:2, name: 'jonak', email:'jonak@gmail.com'},
    {id:3, name: 'akash', email:'akash@gmail.com'}
]

app.get('/',(req, res) => {
    res.send('Users managemen server ')
})

app.get('/users',(req, res) => {
    res.send(users)
})

app.post('/users',(req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser =  req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port,()=>{
    console.log(`Server is running on Port: ${port}`);
})