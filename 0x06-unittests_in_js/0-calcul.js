/**
 * A function which round a and b and return the sum of it
 * @param {number} a the first argument
 * @param {number} b the second argument
 * @author Yidnekachew Bantrga <https://github.com/Yidne21>
 */
function calculateNumber(a, b) {
  if ((typeof a === "number") & (typeof b === "number")) {
    return Math.round(a) + Math.round(b);
  } else {
    return NaN;
  }
}

module.exports = calculateNumber;
