const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')

app.use(cors('*'))

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './images')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now()+'--'+file.originalname)
    }
})

const upload = multer({storage: fileStorageEngine})

app.post('/single', upload.single('image'), (req, res)=>{
    console.log(req.file)
    res.send('single file upload successful')
})

app.post('/multiple', upload.array('images', 3), (req, res)=>{
    console.log(req.files)
    res.send('multiple file upload successful')
})

app.listen(3000, ()=> {
    console.log('server running on http://localhost:3000')
})