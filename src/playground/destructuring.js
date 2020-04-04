//Object Destructoring

const person = {
    //name: 'Leo',
    age: 28,
    location: {
        city: 'NY',
        temp: 56
    }
}


// const name = person.name
// const age = person.age


// set default and change variable name
const { name: firstName = 'Anon', age = 10 } = person
const { city, temp : temperature } = person.location

console.log(`${firstName} is ${age}`)

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}


const book = {
    title: 'Ego sucker',
    author: 'Ryan Dingle',
    publisher: {
        name: 'Ant Eater'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)

//Array Destructoring

const address = ['1299 S Dingleberry Street', 'Philly', 'PA', '19147']

const [, cityy, state = 'NY'] = address

console.log(`you are in ${cityy} ${state}`)