const obj = {a:1,b:2,c:3,soma(a,b,c){return a+b+c}}
console.log(obj)
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a:1,b:2,c:3}"))
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))
// console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
// console.log(JSON.parse('{\'a\':1,\'b\':2,\'c\':3}'))
console.log(JSON.parse('{"a":1.7,"b":2,"c":3,"d":{"a":1,"b":"String"},"e":[1.9,2.3,"String"]}'))
