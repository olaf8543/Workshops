// Fill in during tutorial!

let age: number = 30
let firstName: string = 'mario'
let isFictional = false

let planet = 'earth'
let moons = 1
let isLarge = false

planet = 'Saturn'
moons = 145
isLarge = true

//null & undf

let something: null
let anotherThing: undefined

//----------
//Arrays
//----------

let names: string[] = ['mario', 'luigi', 'peach']
let ages: number[] = [35, 38, 34]

names.push('bowser')
ages.push(43)

const f = names[0]
//f is inferred as a string type

let things = [1, true, 'hello']

const t = things[1]
//t is inferred as either a string, number, or boolean

//-----------
//Object literals
//-----------

let user: {firstName: string, age: number, id: number} = {
    firstName: 'mario',
    age: 30,
    id: 1
}

console.log(user)
console.log('First Name: Mario')

user.firstName = 'peach'
user.id = 2
