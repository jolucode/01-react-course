import app from './server';

const port = process.env.PORT || 5000;


// Start the server
app.listen(4000, () => {
    console.log('Server is running on port', port);
});