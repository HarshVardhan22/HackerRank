function getDayName(dateString) {
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let calender = dateString.split("/");
    calender[0] = parseInt(calender[0]);
    calender[1] = parseInt(calender[1])
    calender[2] = parseInt(calender[2])
    let m 
    switch(calender[1]){
        case(1): m = 11;
                break;
        case(2): m = 12;
                break;
        case(3): m = 1;
                break;
        case(4): m = 2;
                break;
        case(5): m = 3;
                break;
        case(6): m = 4;
                break;
        case(7): m = 5;
                break;
        case(8): m = 6;
                break;
        case(9): m = 7;
                break;
        case(10): m = 8;
                break;
        case(11): m = 9;
                break;
        case(12): m = 10;
                break;
    }
        // Write your code here f = k + [(13*m-1)/5] + D + [D/4] + [C/4] - 2*C.
     let d = 0;
     if(m===11||m===12)
         d = (calender[2]/100) -1;
     else 
         d =calender[2]/100;
     
     let f;
     f = calender[0] + Math.floor([(13*m-1)/5]) + d + Math.floor(d/4) + Math.floor([calender[2]%100]/4) - 2*(calender[2]%100)
     f = Math.floor(f);
    console.log(f);
    if(f<0){
    let count = 0;
    while(f%7!==0){
        count++;
        f=f+count;
     }
    f = count;
    }
    else
        f=f%7;
    console.log(f);
    console.log(dayName[f])    
    return dayName[f]
    
}
// 01/01/1990
// 09/11/1999
// 12/12/2013
// 12/12/2012
getDayName("12/12/2012");