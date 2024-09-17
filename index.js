//1

function  calculateDifference(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

let res0= calculateDifference(30, 10)
console.log(res0)







//2

function isOdd(number){
    if (number % 2 === 1){
        return true

    }
    else{
        return false
    }
}

let res1= isOdd(11)
console.log(res1)





//3

function findMin(number){
    return Math.min(...number)
}

const arr=[4, 3, 5, 9, 7]

let minNumber= findMin(arr)

console.log(minNumber)




//4



function filterEvenNumbers(numbers){
    return numbers.filter(function(number){

    return number %2===0

})
}


let numbersArray= [5,6,8,4,2,9]
let evenNumbers=filterEvenNumbers(numbersArray)

console.log(evenNumbers)





//5

function sortArrayDescending(numbers){
    return numbers.sort(function(a,b){
        return b - a
    })
}

let NumberArray= [8, 9, 5, 6, 10, 7]
let sortedArray= sortArrayDescending(NumberArray)

console.log(sortedArray)




//6

function lowercaseFirstLetter(str){
    return str[0].toLowerCase() + str.slice(1)
}

let result= lowercaseFirstLetter("Hello")
console.log(result)






//7

function countVowels(str) {
    const vowels = "aeiouAEIOU"; 
    let count = 0; 

    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++; 
        }
    }

    return count;
}

let text= "Hello Ostad Team"
let res3= countVowels(text)
console.log(res3)





//8

function findAverage(numbers){
    if (numbers.length === 0){
        return 0
    }

    let sum = 0

    for(let i=0; i < numbers.length; i++){
        sum += numbers[i]
    }

    return sum / numbers.length
}

let number= [10, 20, 30, 40, 50]
let output2= findAverage(number)

console.log(output2)



// ====================== END ======================

