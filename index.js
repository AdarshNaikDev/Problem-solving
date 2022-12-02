// let arr = [23,44,56,65,32]
// let position = 2;
// let newval = 99;
// for(let i=arr.length-1; i>=2; i--)
// {
//   if(i >= position)
//   {
//     arr[i+1]=arr[i]
//   }
// }

// arr[position]=newval;

// console.log(arr)

let arr = [23, 76, 89, 76, 27, 65];
arr.splice(3, 0, 99);
//arr. splice (index where u want to insert, zero elements to be deleted, element you are inserting)
console.log(arr);
