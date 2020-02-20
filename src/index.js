
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arr = [];
  for(let i in matrix) {
    if(!(i % 2))
      arr.push(...matrix[i]);
    else
      arr.push(...matrix[i].sort((a, b) => (a > b)? -1 : 1));
  }
  return arr;
}
