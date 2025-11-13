import {Student} from "./student";
import {SchoolCourse} from "./schoolCourse";


type EnrollmentStatus = "active" | "completed" | "failed";

export interface Enrollment {
    student: Student;
    course: SchoolCourse
    status: EnrollmentStatus;
}

export const getActiveStudents = (enrollments: Enrollment[]): Student[] => {
    let result: Student[] = []
    for (const enrollment of enrollments) {
        if (enrollment.status === "active") result.push(enrollment.student)
    }
    return result
}