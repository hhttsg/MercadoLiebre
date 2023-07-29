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