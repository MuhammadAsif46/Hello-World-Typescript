// Inheritance in TypeScript:

class Persons {
    name: string;
    age: number;
    hobbies: string[];
    // create a constructor:
    constructor(name: string, age: number, hobbies: string[]) {
      this.name = name;
      this.age = age;
      this.hobbies = hobbies;
    }
  }

// Inheritance create with extend keyword:
  class Students extends Persons{
    grade: number;
    constructor(name: string, age: number, hobbies: string[], grade:number){
        super(name, age,hobbies);
        this.grade = grade;
    }
  }
  
  // Intance of class in TS:
  const persons1: Persons = new Persons("Jhon", 19, ["reading", "writing"]);
  const persons2: Persons = new Persons("Elia", 21, ["coding", "palying"]);
  const students1: Persons = new Students("Smith", 31, ["leaning", "sleeping"],9);
  console.log(students1.name);
  console.log(students1.grade);
  console.log(students1.age);
  