    
    // window.addEventListener("load", function(event){
    //     let myPromise = new Promise(function(myResolve, myReject) {
    //         // "Producing Code" (May take some time)
            
    //           myResolve(); // when successful
    //           myReject();  // when error
    //         });
            
    //         // "Consuming Code" (Must wait for a fulfilled Promise)
    //         myPromise.then(
    //           function(value) { /* code if successful */ },
    //           function(error) { /* code if some error */ }
    //         );
    //     gapi.load("client:auth2", function() { 
    //         console.log("Sound Bath")
    //         gapi.auth2.init({client_id: "63303441351-oj03veb03olj4le9bcvas5n873tiaq4k.apps.googleusercontent.com"});
    //       }); 
    //     loadClient()
    // })
   
   setTimeout(()=>{
    loadClient()
   },2000)
    
//    function authenticate() {
//    return gapi.auth2.getAuthInstance()
//       .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
//       .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//     }

  function loadClient() {
    gapi.client.setApiKey("AIzaSyDoUXzepXuwRqDCS65-J-rld4zpvZlOO1U");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API");execute() },
              function(err) { console.error("Error loading GAPI client for API", err); });
    }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
        "part": [
            "snippet"
        ],
        "maxResults": 25,
        "q": "Sound Bath"
    })
        .then(function(response) {
            var youTubeurl= "https://www.youtube.com/embed/" 
                // Handle the results here (response.result has the parsed body).
                console.log(response.result.items[0].id);
                var youtube=document.querySelector(".youtube")
                for (let index = 0; index < 3; index++) {
                var id=response.result.items[index].id.videoId    
                var video=document.createElement("iframe")
                video.setAttribute("src",youTubeurl+id)
                video.setAttribute("height",250)
                video.setAttribute("width",250)
                youtube.append(video)
                }
              },
              function(err) { console.error("Execute error", err); });
  }


  
 
var apiFetch = function () {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
      // console.log(response)
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < 100; i++) {
        var randNum =Math.floor(Math.random() * 100);
        var quote = data[randNum].text
        console.log(quote)
        var qAuthor = data[randNum].author
        console.log(qAuthor)
      }
    });


}
apiFetch()