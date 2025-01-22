class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    study() {
      return `${this.name} is studying.`;
    }
  }
  
  // Example usage:
  const student1 = new Student("ლუკა", 15, "B");
  console.log(student1.greet()); // From Person class
  console.log(student1.study()); // New method in Student class
  