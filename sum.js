function sum(int) {
  return String(int).split('').reduce((s, n) => s + Number(n), 0)
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45