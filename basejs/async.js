// TIme related
// executes the callback after mentioned time

setTimeout(() => {
    console.log("I am inside timeout with 3 sec.")
},3000)
// setIntervall()

setTimeout(() => {
    console.log("I am inside timeout with 1 sec")
},1000)


// polling  
const interval = setInterval(() => {
    console.log("I am executed on every second")
},1000)

setTimeout(() => {
    clearInterval(interval)
}, 10000)