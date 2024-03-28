import app from "../server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviews.dao.js"

const MongoClient = mongodb.MongoClient
const uri =  'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.3'

const port = 3002

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS : 2500,
    })

    .then(async client => {
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
          console.log(`listening on port ${port}`)
        })
      })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })