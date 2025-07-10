const fibonacci = function (n) {
  n = Number(n);
  if (n < 0) return "OOPS";
  if (n < 2) return n;
  let sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    let nextNum = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNum);
  }
  return sequence[n];
};

// Do not edit below this line
module.exports = fibonacci;
