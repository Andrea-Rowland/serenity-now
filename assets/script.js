<body>
    <script src="https://apis.google.com/js/api.js"></script>
<script>
  /**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */
   var youTubeurl= "https://www.youtube.com/watch?v=" 

  function loadClient() {
    gapi.client.setApiKey("AIzaSyDoUXzepXuwRqDCS65-J-rld4zpvZlOO1U");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
        q:"Sound Bath"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "63303441351-oj03veb03olj4le9bcvas5n873tiaq4k.apps.googleusercontent.com"});
  }); 
  //window.onload = load;
</script>
<button onclick="loadClient()">authorize and load</button>
<button onclick="execute()">execute</button>    
</body>