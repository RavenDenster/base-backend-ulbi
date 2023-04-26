import express from "express"
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from "express-fileupload"

const PORT = 5000
const DB_URL = `mongodb+srv://user-ulbi:user@cluster0.mzwv7u7.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

mongoose.set('strictQuery', false)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlparser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))
    } catch (e) {
        console.log(e)
    }
} 
 
startApp()
