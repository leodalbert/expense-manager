const promsie = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Leo')
        resolve({
            name: 'Leo',
            age: 28
        })
        reject('something went wrong!')
    }, 5000)
})

promsie.then((data) => {
    console.log(data)
}).catch((error) => {               // without catch function, a JS error is thrown with reject data (in this case error string)
    console.log('error: ', error)   // then can take two arguments (two functions) instead of a catch function. it acts the same way as a catch function, just harder to read
})