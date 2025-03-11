// // ------------------------------------Arrays------------------------------------

let array=[4,2,6,33,2,723,7345,925,635];
let newArray=['Bilal' ,'Subhan','Uzair','Toqueer'];


console.log("\nLength : " ,array.length)

console.log("\nConverting array to String : " ,newArray.toString())
console.log("\nGetting value at index (5) : " ,array.at(5))

console.log("\nJoining the array values with  \'-'  : " ,array.join("-"))
console.log("\nRemoving value from array using Pop :  " ,array.pop()+":-  Resulting array is "+array)

console.log("\nAdding value in array using Push ( it return\'s the length of array ) : " ,array.push(66)+":- Resulting array is "+array)

console.log("\nRemoving value from the start of array using Shift :" ,array.shift()+":- Resulting array is "+array)

console.log("\nAdding the value to the start of array using Unshift :" ,array.unshift(56)+" :-Resulting array is "+array)

console.log("\nDeleting value from the specific index of an array ( it return\'s the deleting status ) :  " ,delete array[0]+":- Resulting array is "+array)

console.log("\nConcatination of two arrays : " ,array.concat(newArray))

console.log("\nRemoving values from array at specific index also the number of values and adding more values using Splice :  " + array.splice(4,0,2,2,2,2)+" Resulting array is "+array)
console.log("\nRemoving value from the specific index of array using Splice "+array.splice(4,4))

console.log("\nRemoving value fron array also return the remainig array : "+array.slice(1,5))

console.log("\nGetting the index of specific value : "+array.indexOf(6))
console.log("\nGetting the last index of specific value : "+array.lastIndexOf(2))

console.log("\nChecking weather the value exist in array or not : "+array.includes(6))

console.log("\nFinding value of specific condition using find method : "+array.find((value)=>{
    return value>10
}))


console.log("\nFinding index of any value based on specific condition using findIndex method : "+array.findIndex((value)=>{
    return value>33
}))


console.log("\nFinding last index of any value based on any conditio : "+array.findLast((value)=>{
    return value>723
}))

array.sort()
console.log("\nSorting array using sort() : "+array)


newArray=array.sort((x,y)=>{
    return x-y;
})

console.log("\nSorting array using callBack function in sort() : "+newArray)

 newArray=array.map((value)=>{
    if(value>10){
    return value
    }
})
console.log("\nMap method : "+ newArray)

newArray=array.filter((value)=>{

    return value>=55
})
console.log("\nFilter method : "+newArray)


let value=array.reduce((value1,value2)=>{
    return value1+value2;
})

console.log("\nSum using reduce is : "+value)


// // ------------------------------------Strings------------------------------------

let string = "    I am the student of Comsats University     ";

console.log("\nLength : " + string.length)

console.log("\nCharacter at index ( 6 ) : " + string.charAt(6))
console.log("\nCharacter code at index ( 6 ) : " + string.charCodeAt(6))

console.log("\nConcatination of two strings : " + string.concat(' Islamabad'))

console.log("\nConverting string to upper case : " + string.toUpperCase())
console.log("\nConverting string to lower case : " + string.toLocaleLowerCase())

console.log("\nBreak string using slice method : " + string.slice(4, 15))

let newString = string.substring(0, 11);
console.log("\nSubstring : " + newString)

console.log("\nTrimmed string : " + string.trim())

console.log("\nSplit the string with ('') : " + string.split(''))

string = string.replace('New', 'old')
console.log("\nReplace the word \'New' with \'old' : " + string)

console.log("\nRepeat the string 6 time : \n" + string.repeat(6))

console.log("\nSearching index of \'o' : " + string.indexOf('o'))
console.log("\nSearching the last index of \'o' : " + string.lastIndexOf('o'))
console.log("\nChecking the string has charater \'o' or not : " + string.includes('o'))