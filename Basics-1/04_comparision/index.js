console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
| Operator |    Description	  |     Type Coercion	                                    |    Example	      |  Result  +
|  ==	   |   Loose Equality |	Performs type coercion to compare values.	            |   1 == '1'      	  |  true    + 
|  ==	   |   Loose Equality |	Performs type coercion to compare values.	            |   0 == false	      |  true    +
|  ==	   |   Loose Equality |	Performs type coercion to compare values.	            |   null == undefined |	 true    +
|  ===	   |   Strict Equality|	Compares values and data types without type coercion.	|   1 === '1'	      |  false   +
|  ===	   |   Strict Equality|	Compares values and data types without type coercion.	|   0 === false	      |  false   +
|  ===	   |   Strict Equality|	Compares values and data types without type coercion.	|   null === undefined|	 false   +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

console.log("2" === 2);

