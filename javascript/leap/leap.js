//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
//
  this.value = year;
//
};

Year.prototype.isLeap = function () {

  if (this.value % 4 === 0) {
    // If evenly divisible by 100 and 400 then true
    if ((this.value % 100 === 0) && (this.value % 400 === 0)) {
      return true
    }
    // If only evenly divisible by 100 and not 400, then false
    if (this.value % 100 === 0) {
      return false
    }
    // All others true.
    return true

  } else {
    // Not divisible by 4, return false.
    return false
  }
};

module.exports = Year;
