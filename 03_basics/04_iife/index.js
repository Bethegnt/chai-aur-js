/* Immediately Invoked Function Expressions (IIFE):-
This helps prevent polluting the global namespace with variables and functions. 
Anything defined inside the IIFE remains local to it, and it doesn't interfere with other scripts or libraries. 
This is particularly important when working in larger codebases or collaborating with others to avoid naming conflicts.
*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('gagan')

// first () is the function's defination where we write fn and secound one () is the excection of the first () so its basically ()()