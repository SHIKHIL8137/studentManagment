import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
    name: string;
    age: number;
    grade: string;
}

const StudentSchema = new Schema<IStudent>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true, unique: true },
});

const Student = mongoose.model<IStudent>("Student", StudentSchema);
export{
  Student
}