 let myurl = url("https://www.chess.com");
 
 function url(myurl) {
    var url = myurl.split( '//' );
    if (url[0] === "http:" || url[0] === "https:") {
      var protocol = url[0] + "//";
      var host = url[1].split( '/' )[0];
      
    return{
    protocol: protocol,
    host: host
    }
    }
  }
  console.log(myurl.protocol); 
  console.log(myurl.host);