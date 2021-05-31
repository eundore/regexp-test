let str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbbbcccccdddd
`

//const regexp = new RegExp('the','gi') //모두(g) + 대소문 구분 없이(i)
const regexp = /the/gi
console.log(str.match(regexp))

const regexp1 = /brown/gi
console.log(regexp1.test(str))

str = str.replace(regexp1,'AAA')
console.log(str)

// 이스케이프 문자란 백슬래시(\) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자
//$ 문자가 끝나는 부분
console.log(str.match(/\.$/gim)) // 각각의 줄(m)

console.log(
  str.match(/^t/gim)
)

console.log(
  str.match(/h..p/g),
  str.match(/fox|dog/g),
  str.match(/https?/g)
)

console.log(
  str.match(/\b\w{2,3}\b/g) //숫자를 포함한 영어 알파벳 (\w) 2~3개 글자
)

console.log(
  str.match(/[0-9]{1,}/g)
)

console.log(
  str.match(/\bf\w{1,}\b/g),
  str.match(/\d/g)
)

const h = ` the hello world   !

`
console.log(h.replace(/\s/g, ''))

console.log(
  str.match(/.{1,}(?=@)/g),
  str.match(/(?<=@).{1,}/g) 
)