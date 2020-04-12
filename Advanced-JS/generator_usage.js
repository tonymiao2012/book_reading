// Generator的本质是一种特殊的迭代器
function createNumber() {
	let i = 0
	return {
		next: function () {
			return {done: i >= 100, value: i++}
		}
	}
}

for (let i of createNumber()) {
	console.log(i)
}

// 生成器函数，语法上仅仅比普通function多了个*
function* generatorNaturalNumber() {
	console.log('function start')

	let i = 0
	while (i <= 5) {
		console.log('yield start')
		yield i
		console.log('yield end')
		i++
	}

	console.log('function end')
}

// run generator function here
let result = generatorNaturalNumber()

// next可以接受一个任意参数。作为上一个yield的返回值
// yield作为一个关键字，也有返回值，返回就是下一次next的传入参数
function* generatorTest() {
	let i = 0 
	while (i < 100) {
		let j = yield i
		j && (i = j)
		i++
	}
}

