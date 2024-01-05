// var rect = {
//   perimeter: (x, y) => {
//     return 2 * (x + y);
//   },
//   area: (x, y) => {
//     return x * y;
//   },
// };

// function solveRect1(l, b) {
//   console.log(`Solving for rectangle with l = ${l} and b = ${b}`);

//   if (l <= 0 || b <= 0) {
//     console.log(
//       "Rectangle dimension should be greater than zero: l =" +
//         l +
//         ", and b = " +
//         b
//     );
//   } else {
//     console.log("The area of rectangle is", rect.area(l, b));
//     console.log("The perimeter of rectangle is", rect.perimeter(l, b));
//   }
// }

// solveRect1(2, 4);

// const { perimeter, area } = require("./rectangle");

// function solveRect2(l, b) {
//   console.log(`Solving for rectangle with l = ${l} and b = ${b}`);

//   if (l <= 0 || b <= 0) {
//     console.log(
//       "Rectangle dimension should be greater than zero: l =" +
//         l +
//         ", and b = " +
//         b
//     );
//   } else {
//     console.log("The area of rectangle is", perimeter(l, b));
//     console.log("The perimeter of rectangle is", area(l, b));
//   }
// }

// solveRect2(2, 4);

const rect = require("./updateRectangle");

function solveRect3(l, b) {
  console.log(`Solving for rectangle with l = ${l} and b = ${b}`);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("The area of rectangle is", rectangle.perimeter(l, b));
      console.log("The perimeter of rectangle is", rectangle.area(l, b));
    }
  });
}

solveRect3(2, 4);

