function best(arr){
    let count = 0;
    let a = [0,0,0,0,0]
    let destination = ['Malasiya','Australia','germany','dubai','france'];
    for(i=0;i<arr.length;i++){
       count++;
       if(count===1){
            if(arr[i]===1)
                a[0] += 1;
       } else if(count === 2) {
         if(arr[i] === 1);
         a[1] += 1;
       } else if(count === 3) {
         if(arr[i] === 1);
         a[2] += 1;
       } else if(count === 4) {
         if(arr[i] === 1);
         a[3] += 1;
       } else if(count === 5) {
         if(arr[i] === 1);
         a[4] += 1;
       }
     if(count===5)  
       count = 0;
    }
  let max = 0;
  let index = 0;
  for(let i = 0;i<a.length;i++){
      if(a[i]>max){
        max = a[i];
        index= i;
      }
  }
  return console.log(destination[index]);
}

best([1,2,3,4,5,1,2,3])