exports.min = function min (array) {
  if (Array.isArray(array) !== true || array.length < 1) {return (0)}
  else
    {
      var mi = array[0];
      for (var i = 0; i < array.length; i++) {
        if (mi > array[i]) mi = array[i]};
      return mi
    }
 
}

exports.max = function max (array) {
  if (Array.isArray(array) !== true || array.length < 1) {return (0)}
  else
    {
      var ma = array[0];
      for (var i = 0; i < array.length; i++) {
        if (ma < array[i]) ma = array[i]};
      return ma
    }

}

exports.avg = function avg (array) {
  if (Array.isArray(array) !== true || array.length < 1) {return (0)} 
  else
    {
      var av = 0;
      for (var i = 0; i < array.length; i++) {
      av = av + array[i]};
    return(av/array.length)
    }

}
