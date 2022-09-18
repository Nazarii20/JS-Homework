function counthtml(string, word) {
    return string.split(word).length - 1;
    
 }
 var text=prompt('Enter a sentence');
 var count=counthtml(text,"html");
 console.log(counthtml(text,"html"));