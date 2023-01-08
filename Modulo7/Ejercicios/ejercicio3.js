const dateToDay = new Date()
console.log(dateToDay)

const birthday = new Date('1986-06-06')
console.log(birthday)

const esMayor = dateToDay > birthday
console.log(esMayor)

const mesNacimiento = birthday.getMonth() + 1
console.log(mesNacimiento)

const yearBirth = birthday.getFullYear()
console.log(yearBirth)