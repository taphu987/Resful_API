import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';

import productRoute from './routes/productRoute';
import routes from './routes';
import connectDB from './config/db';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
// const URI = process.env.MONGODB_URL as string;
// mongoose.connect(URI, {
//     autoIndex: false,
// }, (err) => {
//     if (err) throw err;
//     console.log("Connected to MongoDB");
// })

connectDB();

// Routes
app.use('/api', routes);

// Start server listening on port
const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Express is listening on port : ${port}`);
});
