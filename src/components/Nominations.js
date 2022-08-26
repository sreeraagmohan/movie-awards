import "./Nominations.scss";

const Nominations = ({ nominated, removeNomination, nominatedCount }) => {
  return (
    <>
      {nominated.length > 0 ? (<div className="nominations-wrapper">
        <h3>
          <div>Nominations</div>
          <div className="nominee-badge-wrapper">
            {nominated.length >= 5 ? (
              <span data-testid="done-span" className="done-span">5/5 nominated!</span>
            ) : (
              <span data-testid="selection-span" className="selection-span">{nominatedCount}/5</span>
            )}
          </div>
        </h3>
        <ul data-testid="nominees-list">
          {nominated.map((movie, index) => (
            <div className="column" key={index}>
              <li className="nominees-list-item" key={movie.imdbID}>
                <p>
                  <span className="nominee-span">{movie.Title}</span>
                  <span> ({movie.Year})</span>
                </p>
                <button 
                  data-testid="remove-nominee"
                  className="remove-nominee"
                  key={index}
                  onClick={(e) => {
                    removeNomination(movie);
                  }}
                >
                  Remove
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
      ) : ("")}</>
  )
};

export default Nominations;