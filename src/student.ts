import {Person} from "./person";

class Student extends Person {
    private _grades: number[];

    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
        this._grades = [];
    }

    getAverageGrade() {
        if (this._grades.length === 0) return 0;

        const sum = this._grades.reduce((sum, grade) => sum + grade, 0);
        return parseFloat((sum / this._grades.length).toFixed(2));
    }

    addGrade(grade: number) {
        this._grades.push(grade < 0 ? 0 : grade);
    }
}
