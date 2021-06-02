/**
 * Copy an array/object
 */

const arr = [1,2,3,4];
const obj = {
  a: 1,
  b: 2
};

/**
 * Function parameters
 */
function log(a,b,c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const numbers = [1,2,3];
log(numbers); // it won't work


/**
 * Destruct an object
 */
const destrObj = { name: 'Joe', lastName: 'Doe' };