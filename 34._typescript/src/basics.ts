

// Primitives: number, string, boolean, null, undefined, symbols
// Complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number = 12.1;

let userName: string = 'Max';

let isInstructor: boolean = true;

// more complex types
let hobbies: string[]; // array of strings
hobbies = ['Sports', 'Cooking'];

let user: any;
user = {
    name: 'Max',
    age: 32
};
user = {
    isInstructor: true
}

let person: {
    name: string;
    age: number;
};
person = {
    name: 'Max',
    age: 32
};

let people: {
    name: string;
    age: number;
}[];

// Type inference

let course = 'React - the complete Guide'
// course = 12345; // Error

// Union types

let courseId: string | number = 'React - the complete Guide'
courseId = 12345;


// Type Aliases
type Person = {
    name: string;
    age: number;
}
let onePerson: Person;
let multiplePersons: Person[];

// Functions and types
function add(a: number,b: number) : number {
    return a + b;
}

function printFunc(value: any) {
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(['a','b','c'], 'd'); // ['d','a','b','c']


// Class
class Student {
    firstName: string;
    lastName: string;
    age: number;
    courses: string[];
    constructor(firstName: string, lastName: string, age: number, courses: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    enroll(courseName: string) {
        this.courses.push(courseName);
    }
    listCourses() {
        return this.courses.slice();
    }
}
const student = new Student('Max', 'Schwartz', 32, ['Angular']);
student.enroll('React');

console.log(student)
console.log(student.listCourses())
console.log(student.courses)


// Interface
// only exists in TypeScript, will not be compiled to JavaScript
// can be implemented by classes
interface Human {
    firstName: string;
    age: number;
    greet: () => void;
}

let max: Human;
max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!')
    }
}

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!')
    }
    constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
    }
}













