import express from 'express';
import router from './router';
import {connectDB} from './config/db';

const app = express();

const port = process.env.PORT || 4000;

connectDB();
// Middlewares
//app.use(express.json());

app.use(express.json());

// Rutas
app.use('/', router);

// Aquí SÍ se arranca el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;

//user database
//root
//ww12Fijo