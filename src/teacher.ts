import {Person} from "./person";

export class Teacher extends Person {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    teach(courseTitle: string) {
        console.log(`${this.getFullName()} is teaching ${courseTitle}`)
    }
}