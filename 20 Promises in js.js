// promises in js

// promises are used to handle asynchronous operations in js

// A Promise can be in one of three states:

// Pending – initial state, not completed yet

// Fulfilled – operation completed successfully

// Rejected – operation failed

// const myPromise = new Promise((resolve, reject)=>{
//     let success = false;
//     if(success){
//         resolve('Promise Resolved')
//     }else{
//         reject('Promise Rejected')
//     }
// })

// myPromise.then(msg => console.log(msg)).catch(err => console.log(err))

// promise with asynchronous task
const myPromise2 = new Promise((resolve, reject) => {
    const outCome = Math.random();

    if(outCome > 0.5){
        setTimeout(()=> {resolve('Data fetched successfully')}, 2000);
    }else{
        setTimeout(()=> {reject('Data fetched successfully')}, 2000)
    }
    
})

myPromise2.then(data => console.log(data)).catch(err => console.log(err))