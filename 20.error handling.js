// Error handling

// 1. Error handling : Promise
// .then() : untuk resolve
// .catch() : untuk reject atau error

// 2. Error handling : Reject
// try : untuk resolve
// catch() : untuk reject

// Contoh dari project movie sebelumnya

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUi(movies);
  } catch (error) {
    alert(error);
  }
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=1b412ccf&s=" + keyword)
    .then((res) => {
      // contoh error handling lalu dikembalikan errornya ke try catch di atas
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((res) => {
      if (res.Response === "False") {
        throw new Error(res.Error);
      }
      return res.Search;
    });
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
  try {
    if (e.target.classList.contains("modal-detail-button")) {
      // console.log(e.target.dataset);
      const imdbID = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetails(imdbID);
      updateUiDetail(movieDetail);
    }
  } catch (error) {
    alert(error);
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
