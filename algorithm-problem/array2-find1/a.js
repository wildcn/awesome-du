function Find(target, array) {
  // write code here
  if (!/^[\d]+$/.test(target) || !Array.isArray(array) || array.length === 0) {
    return false;
  }
  const columnLen = array.length;
  const rowLen = array[0].length;
  if (target < array[0][0] || target > array[columnLen - 1][rowLen - 1]) {
    // 不在范围内
    return false;
  }
  return array.some((row) => {
    return new Set(row).has(target);
  });
}
/**
 * 看题目，是有序矩阵，从左下角开始，当查找数字大时，右移，当查找数字小时，上移
 */
function Find2(target, array) {
  var rowCount = array.length;
  var colCount = array[0].length;
  var i, j;
  for (i = rowCount - 1, j = 0; i >= 0 && j < colCount; ) {
    if (target == array[i][j]) return true;
    if (target < array[i][j]) {
      i--;
      continue;
    }
    if (target > array[i][j]) {
      j++;
      continue;
    }
  }
  return false;
}

var a = Find(7, [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
]);
var b = Find(3, [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
]);
var c = Find2(3, [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
]);
console.log(a);
console.log(b);
console.log(c);
