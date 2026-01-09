// Error handling in JS

// try and catch block
try{
    if (typeof a === "undefined") {
        throw new ReferenceError("a is undefined. oooolala");
    }
    console.log(a)
}catch(err){
    console.log(err)
    console.log(err.message)
    console.log(err.name)
}