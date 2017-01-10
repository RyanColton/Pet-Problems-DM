// A croquet country club has two categories of membership for its members: Open and Senior.
// If a member is at least 55 years old and has a handicap over 7, they are categorized as a Senior.  Handicaps range from -2 to 26.

// Write a function that, given an array of nested arrays, evaluates whether a prospective member is "Open" or "Senior", then return an array of strings indicating each member's status. The provided arrays will be in the format [Age, Handicap].

// For example, if given the array [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]], your function would return ["Open", "Open", "Senior", "Open", "Open", "Senior"]


var array = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];

function seniorOrOpen(arr){
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
    if (arr[i][0] >= 55 && arr[i][1] > 7){
      newArray.push("senior");
    }else {
      newArray.push("open");
    }
  }
return newArray;
}

seniorOrOpen(array);


// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.
var test = "Ryan Colton"
function vowelCounter(str){
  var strArray = str.split('')
  var vowelArray = []
  for(var i = 0; i < strArray.length; i++){
    if(strArray[i] === 'a' || 
       strArray[i] === 'e' ||
       strArray[i] === 'i' ||
       strArray[i] === 'o' ||
       strArray[i] === 'u'){
         vowelArray.push(strArray[i]);
       }
  }
  return vowelArray.length;
}

function vowelCounterRegex(str){
 var count = str.match(/[aeiou]/gi).length;
 return count;
}

/* vowelCounter(test); */

vowelCounterRegex(test);


// Write a function that takes in an array of integers and removes the lowest value, then returns the adjusted array.  If there are multiple instances of the same number, remove the number with the lowest index.  If passed an empty array, your function should return an empty array.
// Do not change the order of the remaining elements of the array.


function removeSmallest(numbers){
  var lowestNum = numbers[0];
  var index = 0;
  for (var i = 1; i < numbers.length - 1; i++) {
    if (numbers[i] < lowestNum) {
        lowestNum = numbers[i];
        index = i;
    }
  }
  numbers.splice(index, 1);
  return numbers;
}

 removeSmallest([1, 2, 3, 4, 5]) //Returns [2, 3, 4, 5]
//removeSmallest([5, 3, 2, 1, 4])// Returns [5, 3, 2, 4]
// removeSmallest([2, 2, 1, 2, 1])// Returns [2, 2, 2, 1]
// removeSmallest([])// Returns []


// Triple Trouble
//
// Create a function that will return a string that combines
// all of the letters of the three inputed strings in groups.
// Taking the first letter of all of the inputs and grouping
// them next to each other. Do this for every letter, see example below!
//
// Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"
//
// Note: You can expect all of the inputs to be the same length.
function tripleTrouble(one, two, three){
  var finalString = '';
  for(var i =  0; i < one.length; i++){
    finalString = finalString + one[i] + two[i] + three[i];
  }
  return finalString
}
console.log(tripleTrouble("Bm", "aa", "tn"));
console.log(tripleTrouble("LLh","euo","xtr"));


//Build a bank constructor Function
//It needs an account number, and owner name, and a balance.
//Give it methods to add and withdraw from the balance
//Give it a method to log the remaining balance for the owner name
//Make 2 accounts and manipulate their balances.
function add(number){
  this.balance += number;
}

function withdraw(number){
  this.balance -= number;
}


function Account(accountNum, name, balance){
  this.accountNumber = accountNum;
  this.ownerName = name;
  this.balance = balance;
  this.add = add;
  this.withdraw = withdraw;
}

var account1 = new Account(123, "Bill", 500);
var account2 = new Account(456, "Ted", 600);

account1.add(30);
account1.withdraw(125);

account2.add(700);
account2.withdraw(243);
console.log(account1);
console.log(account2);
