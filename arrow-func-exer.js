// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

const numArray = [2,3,4,5,6,7];

const double = (arr) => arr.map((val) => val * 2);

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

const squareAndFindEvens = (numbers) =>{
    let squares = numbers.map((num) => num ** 2);
    let evens = squares.filter((square) => square % 2 === 0 ? square : false);
    return evens;
}