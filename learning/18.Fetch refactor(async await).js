const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");

  const movies = await getMovies(inputKeyword.value);
  updateUi(movies);
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=1b412ccf&s=" + keyword)
    .then((res) => res.json())
    .then((res) => res.Search);
}

function updateUi(movies) {
  let cards = ``;

  movies.forEach((e) => {
    cards += showCards(e);
  });
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// Event binding
// yaitu memberi event ke elemen yang awal nya belum ada, tapi ketika dia ada event nya tetap bisa berjalan
document.addEventListener("click", async function (e) {
  // e berisi semua elemen dari event yang di click
  // e akan mengambil semua input dari user
  //   console.log(e.target);

  if (e.target.classList.contains("modal-detail-button")) {
    // console.log(e.target.dataset);
    const imdbID = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetails(imdbID);
    updateUiDetail(movieDetail);
  }
});

function getMovieDetails(imdbID) {
  return fetch("http://www.omdbapi.com/?apikey=1b412ccf&i=" + imdbID)
    .then((res) => res.json())
    .then((m) => m);
}

function updateUiDetail(m) {
  const movieDetail = showDetails(m);
  const modalBody = document.querySelector(".modal-body");

  modalBody.innerHTML = movieDetail;
}

function showCards(e) {
  return `
      <div class="col-md-4 my-5">
        <div class="card">
          <img src="${e.Poster}" class="card-img-top" alt="image" />
          <div class="card-body">
            <h5 class="card-title">${e.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${e.Year}</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
            data-target="#movieDetailModal" data-imdbid="${e.imdbID}">Go somewhere</a>
          </div>
        </div>
      </div>
      `;
}

function showDetails(res) {
  return `
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <img src="${res.Poster}" alt="" class="img-fluid" />
          </div>
          <div class="col-md">
            <ul class="list-group">
              <li class="list-group-item">${res.Title}</h4></li>
              <li class="list-group-item">
                <strong>Director : ${res.Director}</strong>
              </li>
              <li class="list-group-item">
                <strong>Actors : ${res.Actors}</strong>
              </li>
              <li class="list-group-item">
                <strong>Writter : ${res.Writer}</strong>
              </li>
              <li class="list-group-item">
                <strong>Plot : ${res.Plot}</strong><br />
              </li>
            </ul>
          </div>
        </div>
      </div>
      `;
}

// Versi chat gpt
// const searchButton = document.querySelector(".search-button");

// searchButton.addEventListener("click", async function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   const movies = await getMovies(inputKeyword.value);
//   updateUi(movies);
// });

// async function getMovies(keyword) {
//   const response = await fetch(
//     `http://www.omdbapi.com/?apikey=1b412ccf&s=${keyword}`
//   );
//   const data = await response.json();
//   return data.Search || [];
// }

// function updateUi(movies) {
//   const cards = movies.map(showCards).join("");
//   const movieContainer = document.querySelector(".movie-container");
//   movieContainer.innerHTML = cards;
// }

// document.addEventListener("click", async function (e) {
//   if (e.target.classList.contains("modal-detail-button")) {
//     const imdbID = e.target.dataset.imdbid;
//     const movieDetail = await getMovieDetails(imdbID);
//     updateUiDetail(movieDetail);
//   }
// });

// async function getMovieDetails(imdbID) {
//   const response = await fetch(
//     `http://www.omdbapi.com/?apikey=1b412ccf&i=${imdbID}`
//   );
//   const data = await response.json();
//   return data;
// }

// function updateUiDetail(movieDetail) {
//   const details = showDetails(movieDetail);
//   const modalBody = document.querySelector(".modal-body");
//   modalBody.innerHTML = details;
// }
