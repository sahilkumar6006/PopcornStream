import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { connectDB } from './db';
import router from './routes';

const app = express();

app.use(cors());
connectDB();

app.use(express.json());

app.use('/api/v1', router);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
