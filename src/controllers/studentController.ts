import { Request, Response } from "express";
import {Student} from "../models/studentModel";

// Get all students
export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.render("index", { students });
  } catch (error) {
    res.status(500).send("Error fetching students");
  }
};

// Show form to add a student
export const showAddStudentForm = (req: Request, res: Response) => {
  res.render("addStudent");
};

// Add a new student
export const addStudent = async (req: Request, res: Response) => {
  try {
    await Student.create(req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error)
    res.status(400).send("Error adding student" );
  }
};

// Show edit student form
export const showEditStudentForm = async (req: Request, res: Response) => {
  try {
    const student = await Student.findById(req.params.id);
    res.render("editStudent", { student });
  } catch (error) {
    res.status(404).send("Student not found" );
  }
};

// Update student
export const updateStudent = async (req: Request, res: Response) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (error) {
    res.status(400).send("Error updating student" );
  }
};

// Delete student
export const deleteStudent = async (req: Request, res: Response) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Error deleting student");
  }
};
