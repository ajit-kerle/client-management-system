import mongoose from "mongoose";

const connection = async(username,password)=>{
 const URL=`mongodb+srv://${username}:${password}@cluster0.djs4ptj.mongodb.net/awesome-db?retryWrites=true&w=majority`

 try{
   
    await mongoose.connect(URL,{useNewUrlParser: true,useUnifiedTopology: true,})
    console.log("Database Connected successfully")
    

 }catch(error){
  console.log("Error: ",error.message)
 }
}
mongoose.set('strictQuery', true)

export default connection;