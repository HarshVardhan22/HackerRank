//min bribe without data stuctures on hacker rank
function minBribes(q){
    let originalQ =[];
    let flag =0;
    //making an array of bribed Q length

    for(let i =1; i<= q.length; i++)
        originalQ[i-1] = i;

    let bribe = 0;
    let minBribe = 0;
    for(let i = 0 ; i< q.length ; i++){
        if(originalQ[i]!==q[i]){
            originalQ.forEach((item,index) => {
                if(item===q[i]){
                    while(originalQ[i]!==q[i]){
                        let temp = originalQ[index-1-bribe];
                        originalQ[index-1-bribe] = originalQ[index-bribe];
                        originalQ[index-bribe] = temp;
                        minBribe++;
                        bribe++;
                        if(bribe>2){
                            flag++;
                            return console.log("too chaotic");
                        }
                    }
                    bribe = 0;
                }              
            })
        }
        if(flag)
            break;
    }
    if(flag===0)
        return console.log(minBribe);

}

(minBribes([5, 1 ,2 ,3 ,7 ,8 ,6 ,4]));