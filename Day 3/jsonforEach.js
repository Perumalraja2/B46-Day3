
const Car={
    "make": "Ford",
    "model": "Mustang",
    "year": "1969",
};


let keys = Object.keys(Car)
console.log(keys)

let values = Object.values(Car)
console.log(values)




const res=keys.forEach (values=>{
console.log(values)
})

const res1=values.forEach (values=>{
    console.log(values)
    })

let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }]

let keys1= Object.keys(cars[0])
console.log(keys1)

let values1 = Object.values(cars[0])
console.log(values1)

let result = keys1.forEach(element=>{
    console.log(element)
})

let result1 = values1.forEach(element=>{
    console.log(element)
})