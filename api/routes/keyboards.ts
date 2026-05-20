import { Router, Request, Response } from 'express';
import * as zmk from '../services/zmk/index.js';

const router = Router();

router.get('/behaviors', (_req: Request, res: Response) => res.json(zmk.loadBehaviors()));
router.get('/keycodes', (_req: Request, res: Response) => res.json(zmk.loadKeycodes()));
router.get('/layout', (req: Request, res: Response) => res.json(zmk.loadLayout(req.query.layout as string)));
router.get('/keymap', (_req: Request, res: Response) => res.json(zmk.loadKeymap()));
router.post('/keymap', (req: Request, res: Response) => {
  const keymap = req.body;
  const layout = zmk.loadLayout();
  const generatedKeymap = zmk.generateKeymap(layout, keymap);
  
  zmk.exportKeymap(generatedKeymap, 'flash' in req.query, (err: any) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send();
  });
});

export default router;
