const exp=require("express")
const expressAsyncHandler = require("express-async-handler")
const reviewsApi = exp.Router()

reviewsApi.use(exp.json());

console.log("---------------------")

reviewsApi.post('/add', expressAsyncHandler(async (req, res, next) => { 

 let reviewsCollectionObject = req.app.get("reviewsCollectionObj")
 
    console.log("in the reviewsApi")
    
    console.log(req.body)

    await reviewsCollectionObject.insertOne(req.body);
    
    console.log("done addition of the data to the DBS")

    res.send({message:"new review created!"});

}))

module.exports=reviewsApi 