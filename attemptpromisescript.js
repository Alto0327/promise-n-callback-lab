let SixsecPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 6 seconds, First")
    }, 6000)})

let ThreesecPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 3 seconds, second")
    }, 3000)
})

console.log("Before calling promise");

SixsecPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
    ThreesecPromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
    })
})

