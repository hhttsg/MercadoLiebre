const express =require('express');
const app = express();

const path =require('path');
const pathPublic= path.resolve(__dirname,'./public');
app.use(express.static(pathPublic));

app.listen(3000, ()=>{
    console.log('servidor andando');
});

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
})
function alLogin(){
    location.href="login.html"
}
function alInicio(){
    location.href="home.html"
}
