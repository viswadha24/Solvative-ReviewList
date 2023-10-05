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



app.post('/reviews-api/add', expressAsyncHandler(async (req, res, next) => { 

 let reviewsCollectionObject = req.app.get("reviewsCollectionObj")
 
    console.log("in the reviewsApi")
    
    console.log(req.body)

    await reviewsCollectionObject.insertOne(req.body);
    
    console.log("done addition of the data to the DBS")

    res.send({message:"new review created!"});

}))


app.get("/reviews-api/get-all-review",expressAsyncHandler(async (req,res)=>{

   let reviewsCollectionObject = req.app.get("reviewsCollectionObj")

    let reviews= await reviewsCollectionObject.find().toArray()
    res.send({message:"got all data",products:reviews})

}))



const reviewsApi=require("./APIs/reviewsApi")


app.use("/reviews-api", reviewsApi)

//app.use("/getusers",expressAsyncHandler())


 app.use((req,res,next)=>{
     res.send({message:"Invalid path @@@@@@@333",reason:`this path is    ${req.url}    invalid path`})
  })
 
 
 app.use((error,req,res,next)=>{
    res.send({message:"Error occurred",
 reason:`44${error.message}`})
    
 })

app.listen(process.env.PORT,()=>console.log(`server listening on post ${process.env.PORT}..`))

