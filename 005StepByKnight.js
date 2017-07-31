//http://practice.geeksforgeeks.org/problems/steps-by-knight/0

/*
Given a square chessboard of N x N size, the position of Knight and position of a target is given. We need to find out minimum steps a Knight will take to reach the target position.

Input:
The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. Each test case contains an integer n denoting the size of the square chessboard. The next line contains the X-Y coordinates of the knight. The next line contains the X-Y coordinates of the target.

Output:
Print the minimum steps the Knight will take to reach the target position.

Constraints:
1<=T<=100
1<=N<=20
1<=knight_pos,targer_pos<=N
*/

(() => {
  var n = 20;
  var knightPos = {
    x: 4,
    y: 6
  };
  var targetPos = {
    x: 14,
    y: 19
  };

  //Set up chessboard
  var chessboard = [];
  for(let i = 0; i < n; i++) {
    let arr = [];
    for(let j = 0; j < n; j++) {
      arr.push(false);
    }
    chessboard.push(arr);
  }

  var queue = [{
    pos: knightPos,
    steps: 0
  }];
  var found = false;

  while(!found && queue.length !== 0) {
    found = mapMovement(queue.shift());
  }

  console.log(found);

  function isInbound(x, y) {
    if(x < 0 || y < 0 || x >= n || y >= n) {
      return false;
    }
    return true;
  }

  function hasVisited(x, y) {
    if(!chessboard[x][y]) {
      chessboard[x][y] = true;
      return false;
    }
    return true;
  }

  function mapMovement(curr) {
    var x = curr.pos.x;
    var y = curr.pos.y;

    //If current position is out of bounds
    if(!isInbound(x, y)) {
      return false;
    }
    //check if has visited before
    if(hasVisited(x, y)) {
      return false;
    }

    var steps = curr.steps;
    //If found target position
    if(targetPos.x === x && targetPos.y === y) {
      return steps;
    }

    //Increment step for next step
    steps++;

    //Push all possible next steps to queue
    queue.push({
      pos: {x: x - 1, y: y - 2},
      steps: steps
    });
    queue.push({
      pos: {x: x - 1, y: y + 2},
      steps: steps
    });
    queue.push({
      pos: {x: x + 1, y: y - 2},
      steps: steps
    });
    queue.push({
      pos: {x: x + 1, y: y + 2},
      steps: steps
    });
    queue.push({
      pos: {x: x - 2, y: y - 1},
      steps: steps
    });
    queue.push({
      pos: {x: x - 2, y: y + 1},
      steps: steps
    });
    queue.push({
      pos: {x: x + 2, y: y - 1},
      steps: steps
    });
    queue.push({
      pos: {x: x + 2, y: y + 1},
      steps: steps
    });
  }
})();
