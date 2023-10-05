const exp=require('express')
const expressAsyncHandler = require('express-async-handler')
const mclient=require("mongodb").MongoClient

const app = exp()

const path=require("path")

app.use(exp.static(path.join(__dirname,'./build')))
app.use(exp.json())


require("dotenv").config()

const DBurl=process.env.DATABASE_CONNECTIVITY

mclient.connect(DBurl)
.then((client)=>{
    let dbObj=client.db("ArtGallery")
    let reviewsCollectionObj=dbObj.collection("reviewsCollection")

    app.set("reviewsCollectionObj",reviewsCollectionObj)

    console.log("DB CONNECTION success🙃......")

})
.catch(err=>console.log("error in Db Connection",err))




const reviewsApi=require("./APIs/reviewsApi")


app.use("/reviews-api",reviewsApi)

//app.use("/getusers",expressAsyncHandler())


 app.use((req,res,next)=>{
     res.send({message:"Invalid path @@@@@@@",reason:`this path is    ${req.url}    invalid path`})
  })
 
 
  
 app.use((error,req,res,next)=>{
    res.send({message:"Error occurred",
 reason:`44${error.message}`})
    
 })

 if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
    });
   }

app.listen(process.env.PORT,()=>console.log(`server listening on post ${process.env.PORT}..`))

