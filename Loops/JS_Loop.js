// What are loops?

//What are "for loops"?

//How to write for loops?

//Examples


//Without loops
// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

console.log('========================');

////////////////////////////////////////////////////////////////////////////////

//For loop

//Starting point
//Condition to end loop
//Incrementor

// for(var i=0; i <= 10; i+=3) {
//   console.log(i);
// }

////////////////////////////////////////////////////////////////////////////////

// var total = 0;
//
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
//   total += i;
// }
//
// console.log(`total is ${total}`);

////////////////////////////////////////////////////////////////////////////////

//Array For Loop
// var fruit = ['Mango', 'Banana', 'Apple', 'Cherry', 'Orange'];
//
// for (var i = 0; i < fruit.length; i++) {
//   console.log(fruit[i])
// }

////////////////////////////////////////////////////////////////////////////////

//Object loop
// var data = {
//   name: 'Jason',
//   age: '26',
//   maritalStatus: true
// }
// console.log(data['age'])
// for (var i in data) {
//   console.log(i, data[i])
// }

////////////////////////////////////////////////////////////////////////////////

// var total = 0;
//
// for (var num = 99; num >= 0; num--) {
//   total = total + num;
// }
//
// console.log(total)

////////////////////////////////////////////////////////////////////////////////

//While loop

// var num = 0
//
// while (num <= 10) {
//   console.log(num)
//   num++
// }

////////////////////////////////////////////////////////////////////////////////

// var sum = 0;
// var num = 0;
//
// while (num < 10) {
//   sum += num;
//   num++
// }
//
// console.log(sum)

////////////////////////////////////////////////////////////////////////////////

//While loop though an array

// var randomStuff = ['apple', 3.14, 7608, true, false, undefined, ['apple', 'ball', 'cat'], 4543, 'lastObject'];
//
// var x = 0;
//
// while (x < randomStuff.length){
//   console.log(randomStuff[x])
//   x++;
// }

////////////////////////////////////////////////////////////////////////////////

//Reverse while loop through an array

// var otherSuff = ['apple', 3.14, 7608, true, false, undefined, ['apple', 'ball', 'cat'], 4543, 'lastObject'];
//
// var num = otherSuff.length - 1;
//
// while (num >= 0) {
//   console.log(otherSuff[num])
//   num--;
// }

////////////////////////////////////////////////////////////////////////////////

// var cars = ['lambo', 'bmw', 'tesla'];
//
// var num = 0;
//
// while (num < cars.length) {
//   console.log(cars[num]);
// }
