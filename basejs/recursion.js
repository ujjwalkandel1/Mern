const category = [
    {
        name: "Category",
        children: [
            {
                name: "Category 1.1",
                children: [
                    {
                        name: "Category 1.1.1",
                        children: null
                    },
                    {
                        name: "Category 1.1.2",
                        children: [
                            {
                                name: "Category 1.1.2.1",
                                children: null
                            }
                        ]
                    }
                ]
            },
            {
                name: "Category 1.2",
                children: [
                    {
                        name: "Category 1.2.1",
                        children: [
                            {
                                name: "Category 1.2.1.1",
                                children: null
                            }
                        ]
                    },
                    {
                        name: "Category 1.2.2",
                        children: [
                            {
                                name: "Category 1.2.2.1",
                                children: null
                            }
                        ]
                    }
                ]
            }
        ]
    }
] 

//interview question print 1 to 10 without loop  . Function recursion. When function call itselef.
// const getPrint = (toPrint,i) => {
//     console.log(toPrint + i)    // Loop 1, Loop 2

//     if(i < 10){               // i<=10, 1<=10
//         getPrint(toPrint, ++i)  // Loop, i++, 2
//     }
// }

// getPrint("Loop: ", 1)


/** 
print ==>  
    category1
      category1.1
         category1.1.1
         category1.1.2
               category1.1.2.1
    category1.2
        category1.2.1
             category1.2.1.1
        category1.2.2
                category1.2.2.1 

**/

// for(let cat of category){
//     // categpry 1
//     console.log(cat.name)

//     if(cat.children){
//          let padding1 = "     "
//         for (let catChild1 of cat.children){
//             // Category 1.1
//             // Categort 1.2
//             console.log(padding1+catChild1.name)

//             if(catChild1.children) {

//                 let padding2 = padding1+"    "
//                 for(let catChild2 of catChild1.children) {
//                     console.log(padding2+catChild2.name)

//                     if(catChild2.children) {
//                         let padding3 = padding2+"    "
//                         for(let catChild3 of catChild2.children) {
//                         console.log(padding3+catChild3.name)
//                     }    
//                        } 
//                 }
//             }
//         }
//     }
// }
// manage code from recursion function
const toPrint = (category) => {

    if(category) {
        for(let cat of category){

            console.log(cat.name)

            if(cat.children) {
                toPrint(cat.children)
            }
        }
    }
}
 toPrint(category)
 
 /** 
  * generate a randow number in js
  * assign some random value to a variable
  * print found and no of iteration used to get the value
  * condition
  * the value should be less than 100
  * random number generated should be also less than 100;
  * randomNo = 30
  * function -> found, iteration
  * random number -> 100 less
  *  
 */
const numToGet = 30
// functiom
 const randoNo = Math.cell(Math.random()) 
 // find -> numTOGet