//promise is a commitment   fulfill or reject

// promise is an object data of class promise
//3 stages
//Pending
//resolve/Fulfilled  //Reject/Reject
// settlement

// promises are always asynchronous

// how to create a promise

const promiseObj = new Promise((resolve, reject) =>{
    //timeconsume
    //output
    //success
    resolve({name : "ujjwal"})       //fulfilled stage return
    // code meaningless
    // reject()   // Exception throw
    //code meaningless
    //reject({reason: "Test data"})      //Exception throw
})

//  console.log(promiseObj.name)      // resolve = > {name }

//. then().catch() or async-await
let loading = true;
promiseObj
.then((response) => {
    //promise => resolve (data) => response
    //
    console.log(response.name)

    //code
    // 
    loding = false
}).catch(exception => {
    console.log(exception)

    //loading = false// codes
})
.finally(() => {
    loading = false
})