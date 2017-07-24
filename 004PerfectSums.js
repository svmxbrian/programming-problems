//http://practice.geeksforgeeks.org/problems/perfect-sum-problem/0?_sm_au_=iqVRFHSqr5kkW7sN


/*SOLUTION METHOD:
  Iterate through the array
  At each index, add the current index number to the previous indexs' numbers
  while also keeping a copy of the previous sums (if index == 0, skip)
  Then add the current index number to the array and continue interation.
  Ex:
    arr = [2, 3]
    at the end of iterations, the array should be [2, 5, 3]
*/
(function() {
  var arr = arguments[0] || [2, 3, 5, 6, 8, 10];
  var sum = arguments[1] || 10;

  findSums(arr, sum)
  //All numbers (sums, array nums) are positive >= 1 , <= 10^5
  //Start here
  function findSums(arr, sum) {

    var sums = [];
    for(var i = 0; i < arr.length; i++) {
      var curr = arr[i];
      sums = findSumsHelper(sums, curr);
    }

    var count = 0;
    var sums = sums.filter((num) => {
      return num === sum;
    });
    count = sums.length;
    console.log(count);
  }

  function findSumsHelper(arr, num) {
    var ret = [];
    ret.push(num);
    arr.forEach((index, curr) => {
      ret.push(curr);
      ret.push(curr + num);
    });
    return ret;
  }
})();
