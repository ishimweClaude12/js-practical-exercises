function GCD(x, y) {
  var commonDiviser = 0;
  var greater = x > y ? x : y;
  var smaller = x < y ? x : y;
  for (let i = greater; i > smaller; i++) {
    if (i % smaller == 0 && i % greater == 0) {
      return i;
    }
  }
}

const res = GCD(120, 300);

console.log(res);
