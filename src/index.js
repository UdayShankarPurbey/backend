import dotenv from 'dotenv';
import { serverConnection } from './server.js';
import app from './app.js';
dotenv.config({
    path : './.env'
});

serverConnection().then(
    () => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
).catch(err => console.log(`MongoDB connection error: ${err}`))