// Variables are container for storing data.

/*
The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers. 
*/


/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
| Keyword |	Scope	 |  Hoisting	|  Reassignment	 | Initialization |
|  var	  | Function |  Hoisted	    |   Allowed      |    Optional    |
|  let    |  Block	 | Not hoisted	|   Allowed	     |    Optional    | 
| const	  |  Block   | Not hoisted	|  Not allowed	 |    Required    |    
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Scope: Indicates the scope in which the variable is accessible.
Hoisting: Refers to whether the variable declaration is moved to the top of its containing function or block during the compilation phase.
Reassignment: Specifies whether the variable's value can be changed after it's initially assigned.
Initialization: Indicates whether the variable must be given an initial value when declared.
*/

const accountId = 144553
let accountEmail = "tyagigagan@google.com"
var accountPassword = "12345"
var accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "tyagigagan@google.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



// vit-c,hyloronic,sunscreen-dr.sheth
