
var makeRequest =  function(url, callback) {
  var request = new XMLHttpRequest(); // object for making requests
  
  request.addEventListener("load", callback);

  request.open("GET", url); // open and send are methods built in in the object above
  request.send();// open initializes the request, send makes the request
}

var requestComplete = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var allArticles = JSON.parse(jsonString);
  populateList(allArticles);
}

var populateList = function(allArticles) {
  console.log(allArticles.source)
  var news = [];
  for (eachNews of allArticles.articles) {
    news.push(eachNews)
  }
  console.log(news)

  if (allArticles.source === "techcrunch") {
    var div = document.querySelector("#tech");  
  } else if (allArticles.source === "bbc-news") {
    var div = document.querySelector("#bbc");
  } else if (allArticles.source === "entertainment-weekly") {
  var div = document.querySelector("#entertain");
}

for (article of news) {
  var div1 = document.createElement("div");
  var h3 = document.createElement("h3")
  h3.innerText = article.title;
  var p1 = document.createElement("p");
  p1.innerText = article.description
  var img = document.createElement("img");
  img.style.width = "100%"
  img.src = article.urlToImage;
  var a = document.createElement('a');
  a.href =  article.url; 
  a.innerHTML = "Read the full article"; 
  console.log(article)
  div1.appendChild(img)
  div1.appendChild(h3);
  div1.appendChild(p1)
  div1.appendChild(a)
  div.appendChild(div1);
}
};

var app = function(){
 //document.getElementById("button-displays-articles").addEventListener("click", function(){
   var urlTech = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=0e1f3379a0344401a415b6bf48a73db9';
   var urlBbc = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=0e1f3379a0344401a415b6bf48a73db9';
   var urlEntertain = 'https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=0e1f3379a0344401a415b6bf48a73db9';
   console.log(urlTech)
   console.log(urlBbc)
   console.log(urlEntertain)
   makeRequest(urlTech, requestComplete);
   makeRequest(urlBbc, requestComplete);
   makeRequest(urlEntertain, requestComplete);
 //});
}



window.addEventListener('load', app);
