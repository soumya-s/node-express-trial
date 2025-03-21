// repeated execution fro fixed intervals 
// setInterval(() =>{
//     console.log("Interval")
// },1000);





//need to clear the interval
let count =0;
const intervalId = setInterval(() =>{
    count++;
    console.log("showing inerval..")
    if(count == 5){
        clearInterval(intervalId);
    }
},2000);

