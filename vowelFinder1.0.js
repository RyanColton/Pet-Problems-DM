/* function finds all the vowels in a string 
can be cleaned up, want to find a better solution in the future*/

function vowelCount(str){
    var vowels = 'aeiouAEIOU';
    var count = 0;
    var str1 = str.toLowerCase().split('');
    for(var i = 0; i < str1.length ; i++){
        if(str1[i] === 'a' ||
        str1[i] === 'e' ||
        str1[i] === 'i' ||
        str1[i] ==='o' ||
        str1[i] === 'u'){
          count = count + 1;
        } else{
          count = count + 0;
        }
    }
    return count;
}
