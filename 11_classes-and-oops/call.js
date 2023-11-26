function SetUsername(username){
    //complex DBcalls
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email = email;
    this.password = password;

}

const chai = new createUser("chai","chai@1233.com","123454")
console.log(chai);

