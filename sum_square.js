function sumSquareDifference(n) {
  let sum = 0;
  let square = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }
  sum = sum ** 2;

  for (let i = 1; i <= n; i += 1) {
    square += i ** 2;
  }

  return sum - square;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150