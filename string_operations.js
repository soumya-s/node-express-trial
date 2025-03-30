//charAt(index) =>Finds specific character at the postion

var text ="Hello good morning";
var character = text.charAt(5);
console.log("character at index 0 is "+character);
var length = text.length;
console.log("length of the string "+length);
function characterOccurence(){
//occurence of character
    let count =0;
    for(let i =0;i<length;i++){
        if(text.charAt(i)=="o")
        {
            count++;
        }
    }
    console.log("occurence of o is "+count);
}

function getSubstring(data){
    var substring = data.substring(2);// will give substring starting from index 2
    console.log("The String is "+data+","+"SubString is::"+substring);
    substring = data.substring(1,3);
    console.log("substring is "+substring);

}

function sortString(array){
    array.sort();
}
function sortNumber(array){
    array.sort(function(a,b){
        return a-b;
    });
}
characterOccurence();
getSubstring("soumya");

const fruits = ["orange","mango","apple","grapes"];
const numbers = [40, 100, 1, 5, 25, 10];
console.log("Before sorting "+fruits);
sortString(fruits);
console.log("after sorting "+fruits);
console.log("numbers before sorting "+numbers)
sortNumber(numbers);
console.log("Numbers after sorting "+numbers);