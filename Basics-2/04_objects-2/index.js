// if u merge the two array then u should use concat like a.concat(b) and other is ES6;
// if u merge the two object then u should use object.assing(a,b) and other is ES6;
// Array merge:
const a = [12,23,4,45];
const b = [23,23444,2321];
//const c = a.concat(b); //normal use for merge
const c = [...a,...b]; //ES6 spread operator
console.log(c);


// how to declare a object:-
const some = new Object(); // singleton
console.log(some);


const obj1 = {
    1:'asd',
    2:'qwe',
}
const obj2 = {
    1:'asde',
    2:'qwer',
}
//merging objects types:
const obj3 = {...obj1,...obj2}
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);






const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Gagan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "gagan@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Gagan",
            lastname: "Tyagi"
        }
    }
}

const users = [
    {
        id: 1,
        email: "gagan@gmail.com"
    },
    {
        id: 1,
        email: "gagan@gmail.com"
    },
    {
        id: 1,
        email: "gagan@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Chai-aur-code",
    price: "999",
    courseInstructor: "Gagan"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Gagan",
//     "coursename": ""Chai-aur-code",
//     "price": "free"
// }

[
    {},
    {},
    {}
]