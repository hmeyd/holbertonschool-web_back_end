/* eslint-disable */
import getListStudents from "./0-get_list_students.js";
export default function getStudentIdsSum(students) {

   return students.reduce((sum, student) => sum + student.id, 0);
}


const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
