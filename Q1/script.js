// Q1 Create custom flat function to create array from nested array

let arr=[
    [1,2],
    [3,4,5],
    [5,6,[7,8,[20,30]],9],
    [10,11,12]
   ]
   
   const customFlat=(arr,dept=1)=>{
     let result=[];

      arr.forEach(el => {
       if(Array.isArray(el) && dept>0)
       {
          result.push(...customFlat(el,dept-1))
       }else{
         result.push(el)
       }
     });
     return result
   }
   
   let result=customFlat(arr,3)
   console.log(result)

//Q2 Create customer Bind method

const obj1={
  firstname:"mike",
  lastname:"Jordon",
  
 }
 
  let fullname =function(a,city){
   console.log(`${this.firstname} ${this.lastname} ${a} ${city}` )
 }
 
 const obj2={
   firstname:"sham",
   lastname:"Sundar"
 }
 
 Function.prototype.myBind=function(...args){
   let fun=this
   let obj=args[0]
   let param=args.splice(1)
  return function(...args2){
    fun.apply(obj,[...param,...args2])
  }
 }
 
 let newfun=fullname.myBind(obj2,20);
 newfun("Pune");

 //@3
 // how to move 0 at last position

let ar=[0,2,1,5,8,9]

let ln=ar.length;

for(let i=0;i<ln;i++)
{
 if(ar[i]<ar[i+1])
  {
    let s=ar[i+1] //2
    ar[i+1]=ar[i]; //0
    ar[i]=s //2
    console.log(ar)
  }
}

console.log(ar)
 
 