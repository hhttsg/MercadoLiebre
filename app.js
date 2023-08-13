const express =require('express');
const app = express();

const path =require('path');
const pathPublic= path.resolve(__dirname,'./public');
app.use(express.static(pathPublic));

const port = process.env.port || 3001;
app.listen(port, ()=>console.log('Servidor corriendoen el puerto ${port}'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
})
