import {SchoolCourse} from "./schoolCourse";
import {Student} from "./student";
import {Teacher} from "./teacher";
import {canAccessRole} from "./permissions";
import {Enrollment, getActiveStudents} from "./enrollment";

const PrettyPrinter = (course: SchoolCourse) => {
    const line = "-".repeat(20)
    console.log(line)
    console.log(`Cours : ${course.title}`)
    console.log(`Professeur : ${course.teacher.getFullName()}`)
    console.log(`Étudiants : ${course.students.length}`)
    console.log(`Moyenne générale : ${course.averageGrade()}`)
    console.log(line)
}

const studentLucas = new Student("Lucas", "Moreau")
const studentEmma = new Student("Emma", "Dubois")
const studentNoah = new Student("Noah", "Lefèvre")
const studentChloe = new Student("Chloe", "Martin")
const studentHugo = new Student("Hugo", "Bernard")
const studentLea = new Student("Lea", "Fontaine")

const teacherLaurent = new Teacher("Jean-Pierre", "Laurent")
const teacherLemoine = new Teacher("Sophie", "Lemoine")
const teacherDelattre = new Teacher("François", "Delattre")

const classMath = new SchoolCourse("Mathématique", teacherLaurent, [])
const classFrench = new SchoolCourse("Français", teacherLemoine, [])
const classComputer = new SchoolCourse("Informatique", teacherDelattre, [])

classMath.addStudent(studentLucas)
studentLucas.addGrade(-10)
classMath.addStudent(studentEmma)
studentEmma.addGrade(20)

classFrench.addStudent(studentNoah)
studentNoah.addGrade(5)
classMath.addStudent(studentChloe)
studentChloe.addGrade(19)

classComputer.addStudent(studentHugo)
studentHugo.addGrade(13)
classComputer.addStudent(studentLea)
studentLea.addGrade(17)

const tabEnrollment : Enrollment[] = [
    {student: studentLucas, course: classMath, status: "failed"},
    {student: studentEmma, course: classMath, status: "active"},
    {student: studentNoah, course: classMath, status: "completed"},
    {student: studentChloe, course: classMath, status: "active"},
    {student: studentLea, course: classMath, status: "failed"},
    {student: studentLea, course: classMath, status: "active"},
]

console.log(getActiveStudents(tabEnrollment))

console.log(`canAccessRole teacher : ${canAccessRole("teacher")}`)
console.log(`canAccessRole admin : ${canAccessRole("admin")}`)
console.log(`canAccessRole student : ${canAccessRole("student")}`)

PrettyPrinter(classMath)
PrettyPrinter(classFrench)
PrettyPrinter(classComputer)



