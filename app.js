const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const connectDB = require('./config/db');
connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('views',path.join(__dirname,'./views'))
app.set('view engine', 'ejs');

//Start Server
app.listen(process.env.PORT,()=>{
    console.log("Server has started");
});

app.use('/home',(req,res)=>{
    res.render('homepage');
})


//Routes
app.use('/api/v1',apiRoutes);