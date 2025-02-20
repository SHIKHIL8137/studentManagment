import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import {connectDB} from './database/connect'
import { router } from './routes/main';
dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.set('view engine','ejs');
app.use(express.static("public"));
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',router);

connectDB();

app.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`);
})