import express from 'express';
import {Student} from '../models/studentModel';
import { getStudents, showAddStudentForm, addStudent, showEditStudentForm, updateStudent, deleteStudent } from "../controllers/studentController";
const router = express.Router();

router.get("/", getStudents); 
router.get("/add", showAddStudentForm); 
router.post("/add", addStudent); 
router.get("/edit/:id", showEditStudentForm); 
router.post("/edit/:id", updateStudent); 
router.post("/delete/:id", deleteStudent); 


export{
  router
}