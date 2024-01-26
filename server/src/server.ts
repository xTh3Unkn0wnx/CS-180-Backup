import express, { Request, Response } from 'express';
import router from "./api";

const app = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});