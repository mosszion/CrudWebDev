import dotenv from 'dotenv';
dotenv.config({ path: '/Users/mussie/Desktop/mossFullStackProjects/CrudWebDev/crud-backend/.env' });
import express from 'express';
import cors from 'cors';
import clientRoute from './routes/clientRoute.js';


const app = express ();
const PORT = process.env.PORT || 3000;
//////////////Middlewares////////////////
app.use(cors()); // Middleware to enable CORS
app.use(express.json());  // Middleware to parse JSON bodies

app.use('/api/clients', clientRoute);// Ensure the route is correctly set up



app.get('/', (req,res) => {
    res.send('Hello Mossi in the hello World!');
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

