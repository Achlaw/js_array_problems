// printReverse

function printReverse(arr) {
  for(var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

console.log("printReverse([1,2,3,4])")
printReverse([1,2,3,4]);
console.log("printReverse([\"a\",\"b\",\"c\"])")
printReverse(["a","b","c"]);

//ifUniform

function isUniform(arr){
  var first = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] !== first){
      console.log(false);
      return false;    
    }
  }
  console.log(true);
  return true;
}

console.log("isUniform([\"a\",\"b\",\"c\"])")
isUniform(["a","b","c"]);

console.log("[1,1,1,1]");
isUniform([1,1,1,1]);

console.log("[2,1,1,1]");
isUniform([2,1,1,1]);

//sumArray

function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element){
  	total += element;
  });
  return total;
}

console.log("sumArray([1,2,3])");
console.log(sumArray([1,2,3]))

console.log("sumArray([10,3,10,4])");
console.log(sumArray([10,3,10,4]));

console.log("sumArray([-5,100])])");
console.log(sumArray([-5,100]));
