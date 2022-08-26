import Movie from "./Movie";
import "./SearchResults.scss";

const SearchResults = ({ movies, searchValue, nominateMovie, nominated }) => {
    return (
        <div className="search-results-wrapper">
            <h3>
                {searchValue.length > 0 ? (
                    <div data-testid="search-results-div" className="search-results-div">
                        <span>Results for "</span>{searchValue}<span>"</span>
                    </div>
                ) : (
                    ""
                )}
            </h3>

            <ul className="search-results-ul">
                {movies.map((movie) => {
                    return (
                        <Movie
                            movie={movie}
                            key={movie.imdbID}
                            searchValue={searchValue}
                            nominateMovie={nominateMovie}
                            nominated={nominated}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default SearchResults;