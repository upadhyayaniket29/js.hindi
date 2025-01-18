// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Heap(Non Primitive),Stack(Primitive)

// In heap we get its original reference only
// In Stack we get its copy


let myname="aniket"

let mynamecopy=myname

mynamecopy="upadhyay"

console.log(myname);
console.log(mynamecopy);


let heap1={
    myname1:"ishiket",
    myname2:"raman"
}

let heap2=heap1

heap2.myname1="upadhyay"

console.log(heap1.myname1)
console.log(heap2.myname1)
