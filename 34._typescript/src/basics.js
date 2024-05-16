// Primitives: number, string, boolean, null, undefined, symbols
// Complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age = 12.1;
var userName = 'Max';
var isInstructor = true;
// more complex types
var hobbies; // array of strings
hobbies = ['Sports', 'Cooking'];
var user;
user = {
    name: 'Max',
    age: 32
};
user = {
    isInstructor: true
};
var person;
person = {
    name: 'Max',
    age: 32
};
var people;
// Type inference
var course = 'React - the complete Guide';
// course = 12345; // Error
// Union types
var courseId = 'React - the complete Guide';
courseId = 12345;
var onePerson;
var multiplePersons;
// Functions and types
function add(a, b) {
    return a + b;
}
function printFunc(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd'); // ['d','a','b','c']
// Class
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('Max', 'Schwartz', 32, ['Angular']);
student.enroll('React');
console.log(student);
console.log(student.listCourses());
console.log(student.courses);
// Interface
