   setTimeout(()=>{
    loadClient()
   },2000)
    
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

  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    const data = JSON.parse(response);
    console.log(data);
  });

  
 
var apiFetch = function () {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
      // console.log(response)
    })
    .then(function (data) {
      console.log(data);
      
      document.getElementById("quote-gen").addEventListener("click", function() {
        var randNum =Math.floor(Math.random() * 100);
        var quotes = data[randNum]
        // console.log(quotes.text)
        // console.log(quotes.author)
        var quote = JSON.stringify(quotes.text)
        var quoteAuthor =JSON.stringify(quotes.author)
        
        if (quoteAuthor === "null") {
          document.getElementById("quote-item").innerHTML = quote
        }else{
          document.getElementById("quote-item").innerHTML = quote + " -" + quoteAuthor
        }
      })
    });


}
apiFetch()





