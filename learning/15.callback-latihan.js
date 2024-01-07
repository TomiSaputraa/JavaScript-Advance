$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=1b412ccf&s=" + $(".input-keyword").val(),
    success: function (result) {
      const movies = result.Search;
      let cards = "";
      movies.forEach((e) => {
        cards += showCards(e);
      });
      $(".movie-container").html(cards);

      // ketika tombol detail di klik
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=1b412ccf&i=" +
            $(this).data("imdbid"),

          success: function (res) {
            const movieDetails = showDetails(res);

            $(".modal-body").html(movieDetails);
          },
          error: (err) => {
            console.log(err.responseText);
          },
        });
      });
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
});

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
