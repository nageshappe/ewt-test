var express= require("express")
var fs= require("fs")
var cors=require("cors")

var app=express()
app.use(express.json())
var express= require("express")
var mongoClient =require("mongodb").MongoClient
var app =express()
app.use(express.json())
app.use(cors({
    origin:'*'
}))
mongoClient.connect("mongodb+srv://asnagesh:Ananya25*@cluster0.ex2qxhz.mongodb.net/?retryWrites=true&w=majority",(err,client)=>{
    if(err)
    {
        console.log("Error in connection",err)
    }
    else{
        console.log("Connection Established")
    }

    db = client.db("studb").collection("student")
    
app.get("/",(req,res)=>{
    res.send("Testing...")
})
app.post("/addStudent",(req,res)=>{
    db.insertOne(req.body,(err,data)=>{
        if(err){
            return res.status(401).send("Data is not inserted")
        }
        else{
            return res.send("Inserted Succesffuly")
        }
    })
})

    app.get("/listStudents",(req,res)=>{
           var name=req.params.name
            db.find().toArray((err,items)=>{
            console.log(items)
            res.write(JSON.stringify(items))
            res.end()
            })
    })

    app.delete("/deleteStudent/:id",(req,res)=>{
        id = req.params.id
        db.deleteOne({"id":id})
        res.send()

    }

    )
   
})



app.listen("2000",()=>{
    console.log("Server started..")
})

module.exports=app