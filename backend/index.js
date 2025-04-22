import express from 'express'
import mongoose from 'mongoose'
import { PORT, MONGODBURL} from './config.js'
import { Book } from './models/BookModel.js'
import BooksRoute from './routes/BooksRoute.js'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//for custom

// app.use(cors({
//     origin:'http://localhost:3000',
//     methoods:['POST', 'DELETE', 'PUT', 'GET'],
//     allowedHeaders: ['Content-Type']
// }))

app.get('/', (request, response) => {
    response.send("Hello")
})

app.use('/books', BooksRoute)

mongoose.connect(MONGODBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })



