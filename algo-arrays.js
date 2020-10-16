/* In this problem I was asked to write an algorythm that prints the numbers in the array and sums the previous number
*/
var testArr = [6,3,5,1,2,4]
var sum = 0
for (var i=0; i < testArr.length; i++) {
    sum = sum + testArr [i]
    console.log("num" + testArr [i], "sum" + sum)
}
/* In this problem I was asked to write an algorythm that multiplies each number in the Array by it's position
*/
console.log("Problem2")

var testArr = [6,3,5,1,2,4]
for( var i=0; i < testArr.length; i++) {
    console.log (testArr [i] * i)
}
