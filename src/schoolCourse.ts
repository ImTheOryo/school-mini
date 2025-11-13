import {Course} from "./course";
import {Teacher} from "./teacher";
import {Student} from "./student";

export class SchoolCourse implements Course {
    title: string;
    teacher: Teacher;
    students: Student[];

    constructor(title: string, teacher: Teacher, students: Student[]) {
        this.title = title;
        this.teacher = teacher;
        this.students = students;
    }

    addStudent(student: Student) {
        this.students.push(student);
    }

    averageGrade() {
        let sum : number = 0
        for (const student of this.students) {
            sum += student.getAverageGrade()
        }
        return parseFloat((sum / this.students.length).toFixed(2));
    }
}