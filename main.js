// https://newsapi.org/v2/top-headlines?country=us&apiKey=0ea54bfd94b7423d8654e9d59809db7d
let actualplace = document.getElementById("actualplaces")

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=0ea54bfd94b7423d8654e9d59809db7d`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="carousel-item" style="height:90vh; width:100vw">
                            <img src="${element['urlToImage']}" style="height:100%; width:100%" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                            <h5 style="background: rgba(0, 0, 0, 0.5); color: white">${element["title"]}</h5>
                            <p style="background: rgba(0, 0, 0, 0.5); color: white">${element["description"]} <a href="${element["url"]}" target="_blank">Read More</a></p>
                            </div>
                        </div>
                        
                        `;
            newsHtml += news;
        });
        actualplace.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()