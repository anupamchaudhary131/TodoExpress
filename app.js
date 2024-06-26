import express from 'express';
import todoRouter from './routes/todo.js';
import mongoose from 'mongoose';
import cors from 'cors';
await mongoose.connect(process.env.MONGODB_URI);

const  app = express();
app.use(cors());
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static('public'));
app.use(express.static('dist'));



app.use('/', todoRouter);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
