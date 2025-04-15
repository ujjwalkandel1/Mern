const func1 = () =>{
    return new Promise((res, rej) =>{
        const x = true;
        if(x) {
            res("I am resolve of func1")
        }else {
            rej("I am reject of func1")
        }
    })
}