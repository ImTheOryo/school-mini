import {Teacher} from "./teacher";
import {Student} from "./student";


export interface Course {
    title: string
    teacher: Teacher
    students: Student[]
}