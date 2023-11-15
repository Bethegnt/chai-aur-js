const user ={
    username:'Gagan',
    loginCount:8,
    signedIn:true,

    getUserDetails:function()
{
    console.log("got user details from database");
    console.log(`Username: ${this.username}`)
    console.log(this);
}}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn - isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}
const userOne = new User("Gagan",24,true);
const userTwo = new User("ChaiAurCode",12,false)
console.log(userOne.constructor);
console.log(userTwo)