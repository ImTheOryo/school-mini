export class Person {
    public FirstName: string;
    public LastName: string;
    constructor(firstName: string, lastName: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
    }

    getFullName() {
        return `${this.FirstName} ${this.LastName}`;
    }
}