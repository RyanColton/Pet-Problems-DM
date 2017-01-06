/* This function simply takes a string and pushes each X and O into 
its own array. May need to add functionality to recognize capital letters */

function exOh(str) {
    var  arrayX = [],
         arrayO = [],
         str = str.split('')
    
    for(var i = 0; i < str.length; i++){
      if(str[i] == "x"){
        arrayX.push(str[i]);
      } else if(str[i] == "o"){
        arrayO.push(str[i]);
      }
        
    }
  
    if(arrayX.length === arrayO.length) return true;
    return false

}
