const isMatch = function (string, pattern) {
  let s = 0,
    p = 0;
  let starIdx = -1,
    pointer = -1;

  while (s < string.length) {
    if (
      (p < pattern.length && string[s] === pattern[p]) ||
      pattern[p] === "?"
    ) {
      s++;
      p++;
    } else if (p < pattern.length && pattern[p] === "*") {
      starIdx = p;
      pointer = s;
      p++;
    } else if (starIdx === -1) return false;
    else {
      p = starIdx + 1;
      s = pointer + 1;
      pointer = s;
    }
  }
  for (let idx = p; idx < pattern.length; idx++) {
    if (pattern[idx] !== "*") return false;
  }
  return true;
};


var minimumOperationsToWriteY = function (grid) {
  let countY = Array(3).fill(0);
  let countOutside = Array(3).fill(0);
  let n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isPartOfY(i, j, n)) {
        countY[grid[i][j]]++;
      } else {
        countOutside[grid[i][j]]++;
      }
    }
  }
  let ans = Infinity;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) continue;
      let costY = countY[0] + countY[1] + countY[2] - countY[i];
      let costOutsideY =
        countOutside[0] + countOutside[1] + countOutside[2] - countOutside[j];
      ans = Math.min(ans, costY + costOutsideY);
    }
  }
  return ans;
};

function isPartOfY(row, col, n) {
  let isLeftPart = row <= Math.floor(n / 2) && row === col;
  let isRightPart = row <= Math.floor(n / 2) && row + col === n - 1;
  let isMiddlePart = row >= Math.floor(n / 2) && col === Math.floor(n / 2);
  return isLeftPart || isRightPart || isMiddlePart;
}