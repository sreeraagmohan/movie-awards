import { useState, useEffect } from "react";
import { debounce } from "lodash";
import { API_URL } from "../constants";

/* Components */
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Nominations from "./Nominations";

import "./Home.scss";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [nominated, setNominated] = useState([]);
    const [nominatedCount, setNominatedCount] = useState(0);

    useEffect(() => {
        const getMovieRequest = debounce(async (searchValue) => {
            const url = `${API_URL}&s=${searchValue}`;
            const response = await fetch(url);
            const responseJson = await response.json();
            if (responseJson.Search) {
                setMovies(responseJson.Search);
            }
        }, 500);
        getMovieRequest(searchValue);
    }, [searchValue]);

    const nominateMovie = (movie) => {
        if (nominated.length > 4) {
            return;
        }
        setNominatedCount(nominatedCount => nominatedCount + 1);
        setNominated(nominated => [...nominated, movie]);
    };

    /* If there are values stored in local storage, push it to the nominated array */
    useEffect(() => {
        let arrayOfValues = Object.values(localStorage);
        if (arrayOfValues.length > 0) {
            arrayOfValues.forEach((movie) => {
                let storedMovies = JSON.parse(movie);
                nominated.push(storedMovies);
                setNominated(nominated => nominated);
                setNominatedCount(nominatedCount => nominatedCount + nominated.length);
            });
        }
    // eslint-disable-next-line
    }, []);

    /* Add movies to local storage so that the user can start from there if tab is closed */
    useEffect(() => {
        nominated.forEach((movie) => {
            if (nominated.length > 5) {
                return;
            }
            localStorage.setItem(movie.imdbID, JSON.stringify(movie));
        });
    }, [nominated]);

    const removeNomination = (movie) => {
        localStorage.removeItem(movie.imdbID);
        setNominatedCount(nominatedCount => nominatedCount - 1);
        //removes from nominated array
        let updatedArray = [...nominated];
        updatedArray.splice(
            updatedArray.findIndex((m) => m.imdbID === movie.imdbID),
            1
        );
        setNominated(updatedArray);
    };

    return (
        <div data-testid="home" className="home">
            <Header />
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="row">
                <div className="left-col">
                    <SearchResults
                        movies={movies}
                        searchValue={searchValue}
                        nominateMovie={nominateMovie}
                        nominated={nominated}
                    />
                </div>
                <div className="right-col">
                    <Nominations
                        nominated={nominated}
                        removeNomination={removeNomination}
                        nominatedCount={nominatedCount}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;