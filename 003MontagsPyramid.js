(function() {
  var input = `1\n4 2\n7 2 8\n1 2 3 4`;

  findLowestSum(input);

  //Start here
  function findLowestSum(input) {
    //Replaces all \n with space and splits on space
    var pyra = input.replace(/\n/g, ' ').split(' ');
    if(pyra.length === 0) {
      console.log(0);
      return;
    }

    var sum = 0;
    //Count the height of the pyramid (to get left right children)
    var count = 0;
    var index = 0;
    //Left and right child values

    var left, leftIndex, right, rightIndex;

    while(true) {
      //Increment sum
      sum += Number(pyra[index]);
      //Increment which level of pyramid you're at
      count++;
      //Get left and right index of left and right child
      //(Left child = current index plus current level of pyramid)
      leftIndex = index + count;
      rightIndex = leftIndex + 1;

      //How to break out of while true
      if(leftIndex >= pyra.length || rightIndex >= pyra.length) {
        break;
      }
      //Get left and right child
      left = Number(pyra[leftIndex]);
      right = Number(pyra[rightIndex]);

      //Compare children
      if(left < right) {
        index = leftIndex;
      }
      else {
        index = rightIndex;
      }
    }

    console.log(sum);
  }
})()
