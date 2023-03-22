const myCar = [{
    "make": 'Ford',
    "model": 'Mustang',
    "year": "1969"
    }]
for(let index of myCar)
{
 console.log(index)
  
}

// for..of not suitable for the Objects and  its iterates in the form of array of objects

const myCar1 = {
    "make": 'Ford',
    "model": 'Mustang',
    "year": "1969"
    }

for(let index of myCar1)
{
 console.log(index)
  
}

// output : Error

//myCar is not iterable