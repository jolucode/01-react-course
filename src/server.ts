import express from 'express';

const app = express();

//Routing
app.get('/', (req, res) => {
    res.send('Hello, World! with typescript and nodets zs');
});

app.get('/ecommerce', (req, res) => {
    res.send('Hello, World! from E-commerce route');
});

export default app;