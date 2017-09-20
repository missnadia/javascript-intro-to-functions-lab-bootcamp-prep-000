function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
      console.log(string.toUpperCase())
}
function logWhisper(string) {
      console.log(string.toLowerCase())
}
var uppercase = "HELLO"
uppercase.toUpperCase() === uppercase

var lowercase = 'hello'
lowercase.toLowerCase() === lowercase

var mixedCase = 'I love you, Grandma.' 
mixedCase.toLowerCase() === mixedCase

function sayHiToGrandma(string) {
  string === string.toLowerCase()
  return("I can\'t hear you!")
}
function sayHiToGrandma(string) {
  string === string.toUpperCase()
  return("YES INDEED!")
}
function sayHiToGrandma(string) {
  string === "I love you, Grandma."
  return "I love you, too."
}
