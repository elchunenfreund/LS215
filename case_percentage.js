function letterPercentages(str) {
  const cases = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  str.split('').forEach((char) => {
    if (/[a-z]/.test(char)) {
      cases.lowercase += 1
    } else if (/[A-Z]/.test(char)) {
      cases.uppercase += 1
    } else {
      cases.neither += 1
    }
  })

  let sum = Object.values(cases).reduce((accum, int) => accum + int)
  const result = {
    lowercase: ((cases.lowercase * 100) / sum).toFixed(2),
    uppercase: ((cases.uppercase * 100) / sum).toFixed(2),
    neither: ((cases.neither * 100) / sum).toFixed(2),
  }

  return result
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
