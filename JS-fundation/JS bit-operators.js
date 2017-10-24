/**
 * Created by miaozixiong on 2017-10-24.
 */

//Left shift
let val1 = 2; //Binary 10
let newVal = val1 << 5; //Binary 1000000, which is decimal 64

//Signed right shift
let val2 = 64;  //Binary 1000000
val2 >> 5;  //Decimal 2

let val3 = -64; //Negative number
val3 >> 5;  //Decimal -2

//Unsigned right shift
val3 >>> 5; //134217726

//Logical NOT operator
!false; //true
!"";  //true
!"blue";  //false
!12345; //false
!NaN; //true
!null;  //true
!undefined; //true

//Logical AND operator
"a" && "b"; //If first operand is an object, second operand is returned
null && 1;  //null
undefined && 1; //undefined
NaN && 1; //NaN

//Logical OR
1 || "b";  //If first operand is an object, then the first operand is returned
null || 1;  //1
NaN || 1;   //1
undefined || 1; //1
false || 1; //1

//Add
/*
 * 1.If either operand is NaN, the result is NaN.
 * 2.If both operands are strings, the second string is concatenated to the first.
 * 3.If only one operand is string, the other operand is converted to a string.
*/

//Subtract
/*
* 1.If either operand is NaN, the result is NaN
* 2.If either operand is a string, boolean, null or undefined, then convert is to Number().
* */

//Relational operators
"abcd" > "abcde" //false. If the operands are strings, compare the character codes of each corresponding character in the string.
1 < '2' //true. If one operand is number, then convert the other operand to number
true < '22' //true
//Note: To string, the character codes of uppercase letters are all lower than that the char codes of lowercase letters. Like:
"Bring" < "apache"; //true

//Equality operators
true == 1   //true
false == 1  //false
"123" == 123  //true
"c" == 50 //false
null == undefined //true
NaN == 1  //false. If either operand is NaN, the equal operator returns false and the not-equal operator
          //returns true. Important note: even if both operands are NaN, the equal operator returns
          //false because, by rule, NaN is not equal to NaN.
NaN != "s"  //true

//Identically equal
//The identically equal operator is represented by three equal signs (===) and returns true only if the operands are equal without
//conversion
'55' === 55 //false


