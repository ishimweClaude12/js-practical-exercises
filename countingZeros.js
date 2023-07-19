function countZeros(nbr) {
  var count = 0;
  if (nbr < 100) {
    while (nbr > 0) {
      count++;
      nbr -= 10;
    }
  } else {
    while (nbr >= 0) {
      count++;

      nbr -= 10;
    }
  }

  return count;
}

const res = countZeros(100);

console.log(res);
