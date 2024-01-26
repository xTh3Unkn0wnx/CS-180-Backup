import { Router, Request, Response } from 'express';

const router = Router();

router.get('/message', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend!' });
});

export default router;