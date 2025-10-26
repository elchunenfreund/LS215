function fridayThe13ths(year) {
  let count = 0;
  for(let m = 0; m < 12; m++) {
    if (new Date(year, m, 13).getDay() === 5) count += 1;
  }
  console.log(count)
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
