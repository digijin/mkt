// filepath: /c:/Users/digi/workspace/mkt/backend/src/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Define other routes and API endpoints here

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});