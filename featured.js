function accur_once(int) {
  return String(int).split('').every((char) => String(int).indexOf(char) === String(int).lastIndexOf(char))
}

function featured(int) {
  const MAX_FEATURED = 9876543201;

  if (int >= MAX_FEATURED) {
    return 'There is no possible number that fulfills those requirements.';
  }

  for (let i = int + 1; i <= MAX_FEATURED; i += 1) {
    if (i % 7 === 0 && accur_once(i) && i % 2 !== 0) {
      return i;
    }
  }
  return 'There is no possible number that fulfills those requirements.';
}


featured(12);           // 21
featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// featured(9876543200);   // 9876543201
// featured(9876543201);   // "There is no possible number that fulfills those requirements."
