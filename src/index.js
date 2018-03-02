module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) return 0;
  if (array.length == 1) return 1;

  array.sort(function (a, b){
   return a - b;
 })
 var count = 1;
 var max = 1;
 var val;
 for (let i = 0; i <= array.length; i++) {
    val = array[i];
    if ( val == array[i + 1]) continue;
     if (array[i + 1] - val == 1)   {
       count++;
       if (max < count) { max = count;}
     } else {
       count = 1;
     }
 }

  return max;

  
}
