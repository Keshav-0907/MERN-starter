const express = require('express');
const app = express();
const dotenv = require('dotenv');
const router = require('./routes/userRoutes');
const connectDb = require('./db/connectDb');

dotenv.config();
connectDb();

app.use(express.json());
app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})