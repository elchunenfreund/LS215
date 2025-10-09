function leadingSubstrings(str) {
  let result = []
  for(let i = 1; i <= str.length; i++) {
    result.push(str.slice(0, i))
  }
  return result
}

function substrings(str) {
  const result = []
  let currentSub = ''
  for(let i = 0; i < str.length; i++) {
    currentSub = str.slice(i)
    result.push(...leadingSubstrings(currentSub))
  }
  return result;
}

function palindromes(str) {
  let subResult = substrings(str)
  let result = subResult.filter((word) => word.length > 1 && word.split('').reverse().join('') === word)
  return result
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]