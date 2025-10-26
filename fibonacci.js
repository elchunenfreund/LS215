function fibonacci(int) {
  let result = [1n, 1n]
  let index = 2n
  while (index < int) {
    result.push(result[0] + result[1])
    result.shift()
    index += 1n
  }
  return result[1]
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

// The last example may take a minute or so to run.
