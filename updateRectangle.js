module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    setTimeout(
      () =>
        console.log(
          "Rectangle dimension should be greater than zero: l =" +
          l +
          ", and b = " +
          b
        ),
      2000
    );
  } else {
    setTimeout(() => {
      callback(null, {
        perimeter: (x, y) => {
          return 2 * (x + y);
        },
        area: (x, y) => {
          return x * y;
        },
      });
    }, 2000);
  }
}  