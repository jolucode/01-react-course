import { Router } from 'express';

const router = Router();

//Routing
router.get('/', (req, res) => {
  res.send('Hello, World! with typescript and nodetsss');
});

router.get('/ecommerce', (req, res) => {
  res.send('Hello, World! from E-commerce route');
});

router.get('/nosotros', (req, res) => {
  res.send('nosotros');
});

export default router;
