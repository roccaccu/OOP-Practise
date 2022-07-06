// class Worker {
// 	constructor(name, surname, rate, days) {
// 		this.name = name
// 		this.surname = surname
// 		this.rate = rate
// 		this.days = days
// 	}

// 	getSalary() {
// 		return this.rate * this.days
// 	}
// }

// let worker = new Worker('Иван', 'Иванов', 10, 31)

// console.log(worker.name) //выведет 'Иван'
// console.log(worker.surname) //выведет 'Иванов'
// console.log(worker.rate) //выведет 10
// console.log(worker.days) //выведет 31
// console.log(worker.getSalary()) //выведет 310 - то есть 10*31

// let worker1 = new Worker('Haechan', 'lee', 20, 25)
// let worker2 = new Worker('Jaemin', 'Na', 15, 30)
// console.log(worker1.getSalary() + worker2.getSalary())

// class Worker {
// 	constructor(name, surname, rate, days) {
// 		this.#name = name
// 		this.#surname = surname
// 		this.#rate = rate
// 		this.#days = days
// 	}

// 	#name
// 	#surname
// 	#rate
// 	#days
// 	getName() {
// 		return this.#name
// 	}
// 	getSurname() {
// 		return this.#surname
// 	}
// 	getRate() {
// 		return this.#rate
// 	}
// 	getDays() {
// 		return this.#days
// 	}
// 	getSalary() {
// 		return this.#rate * this.#days
// 	}
// 	setRate(newRate) {
// 		this.#rate = newRate
// 	}
// 	setDays(newDays) {
// 		this.#days = newDays
// 	}
// }

// let worker = new Worker('Иван', 'Иванов', 10, 31)

// console.log(worker.getName()) //выведет 'Иван'
// console.log(worker.getSurname()) //выведет 'Иванов'
// console.log(worker.getRate()) //выведет 10
// console.log(worker.getDays()) //выведет 31
// console.log(worker.getSalary()) //выведет 310 - то есть 10*31

// //Теперь используем сеттер:
// worker.setRate(20) //увеличим ставку
// worker.setDays(10) //уменьшим дни
// console.log(worker.getSalary()) //выведет 200 - то есть 20*10

// class MyString {
// 	reverse(text) {
// 		let s = text.length
// 		let newText = ''
// 		for (let i = s - 1; i >= 0; i--) {
// 			newText = newText + text[i]
// 		}
// 		return newText
// 	}
// 	ucFirst(text) {
// 		let newText = text.slice(1)
// 		let firstLetter = text.slice(0, 1).toUpperCase()
// 		return firstLetter + newText
// 	}
// 	ucWords(text) {
// 		let newText = ''
// 		for (let i = 0; i < text.length; i++) {
// 			if (i === 0 || (i > 0 && text[i - 1] === ' ')) {
// 				newText = newText + text[i].toUpperCase()
// 			} else {
// 				newText = newText + text[i]
// 			}
// 		}
// 		return newText
// 	}
// }

// let str = new MyString()

// console.log(str.reverse('abcde')) //выведет 'edcba'
// console.log(str.ucFirst('abcde')) //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')) //выведет 'Abcde Abcde Abcde'

// class Validator {
// 	isEmail(text) {
// 		let s = text.search('@')
// 		s ? true : false
// 	}
// 	isDomain(text) {

// 	}
// 	isDate(text) {

// 	}
// 	isPhone(text) {

// 	}
// }

class Animal {
	constructor(type, age, name) {
		this.type = type
		this.age = age
		this.name = name
	}
}

class Dog extends Animal {
	constructor(type, age, name) {
		super(type, age, name)
	}
	sayGav() {
		console.log('Гав')
	}
}

class Cat extends Animal {
	constructor(type, age, name) {
		super(type, age, name)
	}
	jump() {
		console.log('Прыгаю')
	}
}

class Wolf extends Dog {
	constructor(type, age, name, weight) {
		super(type, age, name, sayGav)
		this.weight = weight
	}
	sayWeight() {
		console.log(`Этот волк весит ${this.weight} кг.`)
	}
}

class Tiger extends Cat {
	constructor(type, age, name, weight) {
		super(type, age, name, jump)
		this.weight = weight
	}
	sayWeight() {
		console.log(`Этот тигр весит ${this.weight} кг.`)
	}
}
