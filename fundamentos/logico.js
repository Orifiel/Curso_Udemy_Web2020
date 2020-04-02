function buy(job1, job2) {
    const buyicecream = job1 || job2
    const buyTV50 = job1 && job2
    const buyTV32 = job1 != job2
    const KeepHealth = job1 != job2

    return { buyicecream, buyTV50, buyTV32, KeepHealth }

}

console.log(buy(true, true))
console.log(buy(true, false))
console.log(buy(false,true))
console.log(buy(false,false))