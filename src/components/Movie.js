import "./Movie.scss";

const Movie = ({ movie, searchValue, nominateMovie, nominated }) => {
  let isNominated = false;
  nominated.forEach(nominee => {
    if (nominee.imdbID  === movie.imdbID) {
      isNominated = true;
    }
  })

  return (
    <>
      {searchValue.length >= 2 ? (
        <li className="movie-row" key={movie.imdbID}>
          <img className="poster"
            src={movie.Poster !== "N/A" ? movie.Poster : ''}
            alt={`Movie Poster for ${movie.Title}`}
          />
          <div className="column">
            <p>
              <span className="movie-title">{movie.Title}</span>
              <span> ({movie.Year})</span>
            </p>

            <button
              className="nominate-button"
              data-testid="nominate-button"
              key={movie.imdbID}
              disabled={isNominated || nominated.length > 4 ? true : false}
              onClick={() => {
                nominateMovie(movie);
              }}
            >
              Nominate
            </button>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default Movie;