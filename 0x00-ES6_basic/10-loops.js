/* eslint-disable */

export default function appendToEachArrayValue(array, appendString) {
  let res = [];
  for (const value of array) {
    res.push(appendString + value);
  }

  return res;
}
