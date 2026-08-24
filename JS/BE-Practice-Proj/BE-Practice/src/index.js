import dotenv from 'dotenv'
import connectDB from './db/db.js'
import { app } from './app.js';

dotenv.config()
console.log("Mongo URI:", process.env.MONGODB_URI);

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at port ${process.env.PORT}`);

        })
    })
    .catch((err) => {
        console.log("MongoDB connection ERR", err);

    })





/*const app = express()
    (async () => {
        try {

            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on('error', (error) => {
                console.log("Error: ", error)
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`)
            })

        } catch (err) {
            console.log('Error: ', err)
            throw err
        }

    })()*/