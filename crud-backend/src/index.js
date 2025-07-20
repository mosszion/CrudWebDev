dotenv.config();
import express from 'express';
import dotenv from 'dotenv';


const app = express ();
const PORT = process.env.PORT || 3000;



app.get('/', (req,res) => {
    res.send('Hello Mossi in the hello World!');
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

