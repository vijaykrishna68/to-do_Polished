const express  = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const taskRouter = require('./routes/taskRoutes')

dotenv.config();// loads the .env file

const app = express();
app.use(express.json())

app.use('/api/tasks', taskRouter);

connectDB();

app.get('/',(req,res)=>{
    res.send('server is running');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})