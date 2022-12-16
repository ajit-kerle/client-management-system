import express from "express";
import {getUsers,getUserById,addUser,editUser,deleteUser} from "../controller/userController.js"

const router=express.Router()

router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/edit/:id', editUser);
router.delete('/delete/:id', deleteUser);

export default router