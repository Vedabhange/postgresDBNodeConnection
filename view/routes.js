import express from 'express';
import { getAllEmp, addEmp } from '../controller/userController.js';
const router = express.Router();

router.get("/getall",getAllEmp);
router.get("/addEmp",addEmp);


export default router;