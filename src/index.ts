import express from 'express';

const app = express();

//Routing
app.get('/', (req, res) => {
    res.send('Hello, World! with typescript and nodets zs');
});

app.get('/ecommerce', (req, res) => {
    res.send('Hello, World! from E-commerce route');
});


const port = process.env.PORT || 5000;


// Start the server
app.listen(4000, () => {
    console.log('Server is running on port', port);
});