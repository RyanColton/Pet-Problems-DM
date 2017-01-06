// Write a function that takes in a string, then returns a new string with all vowels removed

  // For example, "Coding in Javascript is the best!" would become: "Cdng n Jvscrpt s th bst!"
  
  var noVowels = function(str){
    var arr = str.split('');
    for(i = 0; i < arr.length; i++){
     if (arr[i] == "a" ||
         arr[i] == "e" ||
         arr[i] == "i" ||
         arr[i] == "o" ||
         arr[i] == "u"){
         arr.splice(i,1);
        }
    }
        return arr.join("");
  };
  
  var test = "Hello World";
  noVowels(test);
