

function getRandomUser() {
 var apiResponse = fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(data => console.log(data));

  apiResponse.then(response => {
    var quoteHeader = document.createElement("p");
    var node = document.createTextNode(response);
    quoteHeader.appendChild(node);

    
    ;

  })
}
