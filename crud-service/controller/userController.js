import User from '../models/user.js'

const getUsers=async (req,res)=>{
     try{
        const users=await User.find()
        res.status(200).json(users)
     }catch(error){
        console.log(error.message)
       res.status(500).json({message:error.message})
     }
}

const getUserById=async (req,res)=>{
    try{
        const userId=req.params.id
        const user=await User.findById(userId)
        res.status(200).json(user)
    }catch(error){
        res.status(409).json({ message: error.message});  
    }
}

const addUser=async(req,res)=>{
    
    try{
       const userData=req.body
       const savedUser=await User.create(userData)
       console.log(savedUser)
       res.status(201).json(savedUser)
    }catch(error){
       res.status(500).json({message:error.message})
    }
}

const editUser=async(req,res)=>{
    try{
       const userId=req.params.id
       const userData=req.body
       const updatedData=await User.findByIdAndUpdate({_id:userId},userData,{new:true})
       res.status(201).json(updatedData)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const deleteUser=async(req,res)=>{
    try{
       const userId=req.params.id
       await User.deleteOne({_id:userId})
       res.status(200).json("user deleted successfully")
    }catch(error){
        res.status(500).json({message:error.message})
    }
}



export {getUsers,getUserById,addUser,editUser,deleteUser}
