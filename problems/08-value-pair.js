/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  let values = []
  // let obj3 = {obj2, obj1};
  // let obj = {...obj3}
  // console.log(obj);
  if (key){
    values.push(obj1[key])
    values.push(obj2[key])
  }
  // for (let key in obj3){
  //   if (key) values.push(obj3[key])
  // }
  return values
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
