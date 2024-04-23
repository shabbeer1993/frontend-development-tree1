function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {
    console.log("Function Execution Finished");
  }

  console.log("Function Execution Finished last");
}

function clickHandler() {
  console.log("Click Event");
}

// listen for the click event

document.addEventListener("click", clickHandler);

waitThreeSeconds();

console.log("Finished Execution");

//Data Types : Primitive Data Types, Reference Types

//Primitive / Value Types  : String , Number , Boolean , undefined, Null, Symbol

//Reference Types: Objects , Arrays , Functions

//JavaScript is  Dynamic Language

String;

let x = "Session With Siva";
console.log(x);
console.log(typeof x);

x = 1;

// Number
let y = 1;

console.log(y);
console.log(typeof y);

let z = 1.5;

console.log(z);
console.log(typeof z);

// boolean

let p = true;
console.log(p);
console.log(typeof p);

//undefined

let w;
console.log(w);
console.log(typeof w);
w = 9;
console.log(typeof w);

Null;

let r = null;

console.log(r);

console.log(typeof r);

//Reference Types: Objects , Arrays , Functions

let coursew = {
  title: "Front End Development",
  description: "Projects real time",
  amout: 30000,
  duration: {
    html: "1 month",
    css: "15 Days",
    js: "1 month",
    angular: "1 months",
  },
};

let xcourses = course;

console.log(course);
console.log(typeof course);

console.log(course.title);
console.log(course.description);
console.log(course.amout);
console.log(course.duration.css);
console.log(course["duration"]["css"]);

// Call By value

let a = "Something";

let b = a;

console.log(a);
console.log(b);

a = "Nothing";

console.log(a);
console.log(b);

// Call By Reference

let course = {
  title: "Front End Development",
  description: "Projects real time",
  amout: 30000,
  duration: {
    html: "1 month",
    css: "15 Days",
    js: "1 month",
    angular: "1 months",
  },
};

let xcourse = course;
console.log(course);
console.log(xcourse);

course.title = "BackEnd Developemnt"; // Mutate

console.log(course);
console.log(xcourse);

function toChangeAmout(obj) {
  // let ycourse = obj;

  obj.amout = 40000;
  console.log(obj.amout);
  console.log(course);
  console.log(xcourse);
}

toChangeAmout(course);
console.log(course);
console.log(xcourse);

course = {
  title: "Xyz End Development",
  description: "Projects real time",
  amout: 30000,
  duration: {
    html: "1 month",
    css: "15 Days",
    js: "1 month",
    angular: "1 months",
  },
};

console.log(course);
console.log(xcourse);
