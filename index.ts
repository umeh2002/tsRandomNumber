

const getNum =(arr:number[], count:number):number[]=>{
    const rand =arr.slice().sort(()=>0.5 -Math.random())
    return rand.slice(0,count)
}
let input:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const shuffle =getNum(input,5)

console.log(shuffle)