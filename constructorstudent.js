function student(name, enrollment, phone, course, year){
    this.name = name;
    this.enrollment = enrollment;
    this.phone = phone;
    this.course = course;
    this.year = year;

    this.updateName = function(newName){
        this.name = newName;
    };
    this.bark = function(){
        console.log("Woof!");
    };
}
const studentThesahil = new student("sahil", "1234567", 9876543210, "Computer Science", 2028);
console.log(studentThesahil);
studentThesahil.updateName("Dhanu ji")
console.log(studentThesahil);
