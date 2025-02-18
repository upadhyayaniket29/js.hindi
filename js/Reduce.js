const numbers=[1,2,3,4,5,6,7,8,9,10]

// const newnums=numbers.map( (num)=> num+10) 

// console.log(newnums);



// numbers.forEach((value,index,array)=>{
//     array[index]=value+10

// })
// console.log(numbers);


//Chaining :- use mutiple metods 

// const newNo=numbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)

// console.log(newNo);


// reduce()

const myn=["1","2","3"]

// const mytotal=myn.reduce( function (acc,curVal){
//     console.log(`acc:${acc} and current value is:${curVal}`);
    
//    return acc+curVal
// },0)

const myTot=myn.reduce((acc,curVal)=> acc+curVal , 0)

console.log(myTot);



const shoppingcart=[
    {
       itemName:"js course",
       Price:999
    },
    {
       itemName:"dev course",
       Price:1999
    },
    {
       itemName:"java course",
       Price:1890
    },
]



const shop=shoppingcart.reduce((acc,item)=>acc+ item.Price,0)

console.log(shop);









    
   




   





