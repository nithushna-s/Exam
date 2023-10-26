// 1
let empty={
    
    }
    console.log(empty);
    //2
    let person={
        name:"nithushna",
        age:22,
        You: function(){
           console.log("hello,my name is"+this.name)
        }
    };
    person.You();
        //3
        function greenStudent(student) {
            console.log("Hello " + student.name + ", welcome to the Coding School");
          }
          var student1 = {
            name: "nithu",
          };
          greenStudent(student1);

          //4
          var person_v = {
            firstName: "sivarasa",
            lastName: "nithushna",
            age: "22"
          };
          console.log("First Name: " + person_v.firstName);
          console.log("Last Name: " + person_v.lastName);
          console.log("Age: " + person_v.age);
          console.log("First Name: " + person_v["firstName"]);
          console.log("Last Name: " + person_v["lastName"]);
          console.log("Age: " + person_v["age"]);
//5
var person_n = {
    name: "nithu",
    age: 22,
  };
  person_n.email = "john@example.com";
  console.log(person_n);
  //6
  const myObject = {
    name: "NITHU",
    age: 22,
    city: "BATTI"
  };
  console.log(myObject);
  delete myObject.city;
  console.log(myObject);
// 7
const obj = { name: "John", age: 30 };
const propertyExists = "name" in obj;
console.log(propertyExists); 

//8
function Person(first,course ) {
  this.student= first;
 this.course = course;
}
const studentCourse= new Person("NITHU", "HTML");
document.getElementById("demo").innerHTML ="Student: " + studentCourse.student + ", Course: " + studentCourse.course;
//9
const my_Object = {
  name: "vithu",
  age: 20
};

if (myObject.hasOwnProperty("address")) {
  console.log("Address is there:", myObject.address);
} else {
  console.log("Address not found");
}

//Q10
  const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  };
  const bookJSON = JSON.stringify(book);
  console.log(bookJSON);
//11
let students = [
 {
      name: "Nithushna",
      age: 21,
      gpa:5,
    },
 {
      name: "Jane Smith",
      age: 22,
   gpa:6,
  },
 {
      name: "Mike Johnson",
      age: 19,
    gpa:7,
  },
];
console.log(students);
