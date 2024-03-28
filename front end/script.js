const APILINK = "https://api.themoviedb.org/3/discover/movie? sort_by=popularity.desc&api_key=b94d41eeab329ed78d0c068c25efd435&page=1 ";
const SERVER_API = "https://127.0.0.1:3002/api/v1/reviews"
const IMG_PATH = "https://image.tmdb.org/t/p/w500"

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=b94d41eeab329ed78d0c068c25efd435&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");




returnMovies(APILINK);

function returnMovies(url) {
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      data.results.forEach(element => {
       
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');

        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');

        const title = document.createElement('h3');
        title.setAttribute('id', 'title');

        const center = document.createElement('center');

        
        title.innerHTML = `${element.title}<br><a href="movies.html?id=${element.id}&title=${element.title}">reviews</a>`;
        image.src = IMG_PATH + element.poster_path;

        center.appendChild(image);
        div_card.appendChild(center);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        main.appendChild(div_row);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';
  const search = document.getElementById("query");
  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});



