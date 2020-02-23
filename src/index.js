
exports.min = function min (array) {
  if(array === undefined || array.length === 0){
    return 0;
  }
  var MinNumber = array[0];
  for(let i = 0; i < array.length; i++){
    if(MinNumber > array[i]){
      MinNumber = array[i];
    }
  }
  return MinNumber;
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0){
    return 0;
  }
  return array.reduce((acc, cur) => {if(acc > cur){return acc} else {return acc = cur}});
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0){
    return 0;
  }
   var sum = array.reduce((acc, cur) => acc + cur, 0);
   return sum / array.length;
}
