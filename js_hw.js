//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, array){
    for (let i=0; i < array.length; i++) {
        console.log(array[i]);

       if (string.search(array[i])){
           return "Matched dog_name";
       
       }else {
           return "No Matches"
       }
    
    }

}

console.log(findWords(dog_string, dog_names))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i=0; i < arr.length; i++){
        if (i % 2 ==0){
            arr.splice(i,1,"even index")
        }

    }
    return arr
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//3. Codewars Problem
// Perimeter sequence
//The first three stages of a sequence are shown.The blocksize is a by a and a ≥ 1. 
//What is the perimeter of the nth shape in the sequence (n ≥ 1) ?

function perimeter_sequence(a, n){
    let total = a * n * 4
    return total
}
    
console.log(perimeter_sequence(4,6))

//4. Codewars Problem
//Leap Years
//In this kata you should simply determine, whether a given year is a leap year or not. 
//In case you don't know the rules, here they are: 
//years divisible by 4 are leap years
//but years divisible by 100 are not leap years 
//but years divisible by 400 are leap years
//Additional Notes:
//Only valid years (positive integers) will be tested, 
//so you don't have to validate them

function isLeapYear(year){
    if (year % 4 == 0 && year % 100 != 0){
        return 'True'
    } else if (year % 100 == 0 && year % 400 == 0){
        return 'True'
    } else {
        return 'False'
    }
}

console.log(isLeapYear(2021))