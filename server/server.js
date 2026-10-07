import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/',(req, res) => {
    res.send('Server is running');
});


app.use('/api/contact', contactRoutes);



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});