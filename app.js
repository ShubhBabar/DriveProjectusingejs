const express = require('express')
const app = express();
const userRouter = require('./routes/user.routes')
const dotenv = require('dotenv')
const connectToDB = require('./config/db')
const cookieParser =require('cookie-parser');
const indexRouter = require('./routes/index.routes')
const path = require('path');
dotenv.config();

connectToDB();

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/',indexRouter)
app.use('/user',userRouter)

app.listen(3000,()=>{
    console.log("Server is started");
    
})