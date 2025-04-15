// const guess = 75;
// let counter = 0;

// const getGuess = () => {
//     counter++
//     const random = Math.cell(Math.random() * 100)
//     console.log(random)
//     if(random == guess) {
//         console.log("Match found on Iteration:" +counter)
//     } else {
//         getGuess();
//     }
// }

// getGuess()

// const func1 = () =>{
//     const func2 = () => {
//         return 2
//     }

//     return func2()
// }
// func1()

// func2()

// const func1 = (cb) => {
//     console.log("I am in function 1")
//     cb()
// }

// const func2 = () => {
//     console.log("I am in function2")
// }

// func1(func2)

// const products = [ 
// {
//     name: "ABC",
//     price: 200,
//     discount:10
// },
// {
//     name: "CDE",
//     price: 100,
//     discount:30
// },
// ]

//array loop
// products.map((value, index) => {
    //calculate
    //return or default undefine
//     const afterDis = value.price - (value.price * value.discount/100)
//     value['afterDiscount'] = afterDis
// });

// console.log(products);


// const numb = [1,2,3,4,5,6,7,8,9,10]
// // const numb1 = numb.map((val, ind) => {
// //     return val * 2
// // })
// const numb1 = numb.map((val, inc) =>val * 2)
// console.log(numb1)



//  const numb = [2,4,6,8,10]

// two array
// one is of odd numbers
//another is of even number

// const oddNumbs = []
// const evenNumbs = []

// numb.map((val, ind) => {
//     if(val % 2 === 0){
//          evenNumbs.push(val)
//     } else {
//         oddNumbs.push(val)
//     }
//     // return undefined
// })


// // for filter data
// evenNumbs = numb.filter((val, ind) => val % 2 === 0) 
// oddNumbs = numb.filter((val, ind) => val % 2 === 0) 
// console.log(oddNumbs) //[1,3,5,7,9]
// console.log(evenNumbs)//[2,4,6,8,10 ]

const numblist = [1,2,3,4,5,6,7,8,9,10]

// loop => present, pat
const result =  numblist.reduce((sum, currv) =>{
    console.log(sum, currv)
    // sum =+ currv
    // return sum;
    sum= currv; 
    return sum
},0)

console.log(result)