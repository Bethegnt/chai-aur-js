// for of loop

const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

const greeting = 'hello World!'
for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
    
}

// map

const map = new Map();
map.set("in","india")
map.set("us","US")

console.log(map);
for(const [key,value] of map){
    console.log(key,':-', value)
}

const myObj ={
    'game1':'NFS',
    'game2':'Spiderman',
}
// for(const [key,value] of myObj){} // this for of loop doesnt work for object 

// iteration for obj:(for in loop)
const myObj2 = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for(const key in myObj2){
    console.log(`${key}shortcut is for ${myObj2[key]}`);
}

const map2 = new Map();
map.set("in","india")
map.set("us","US")
for(const key in map2){
    console.log(map2[key]);
}// for in loop map is not iterated


//for each loop:-
const coding = ['js','ruby','java','py','cpp'];
coding.forEach(function(val){console.log(val)});
coding.forEach((val)=>{console.log(val)});

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);

coding.forEach((item,index,arr)=>{console.log(item,index,arr)})

//for big database array call:

const myCoding = [
    {
        languageName:'javascript',
        langFileName:'js'
    },
    {
        languageName:'java',
        langFileName:'java'
    },
    {
        languageName:'python',
        langFileName:'py'
    }
]
myCoding.forEach((item)=>{console.log(item.langFileName)})


