import ReactDOM from 'react-dom/client';
import { screen } from "@testing-library/dom";
import { act } from 'react-dom/test-utils';
import SearchResults from '../components/SearchResults';

describe('SearchResults', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    })

    it('should render the search results component', () => {
        const searchValueMock = 'Dog';
        const moviesMock = [{
            Poster: "https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg",
            Title: "Dog",
            Type: "movie",
            Year: "2022",
            imdbID: "tt11252248"
        }];
        const nominatedMock = [
            ...moviesMock,
            {
            Poster: "https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
            Title: "The Power of the Dog",
            Type: "movie",
            Year: "2021",
            imdbID: "tt10293406"          
        }]
        act(() => {
            ReactDOM.createRoot(container).render(<SearchResults nominated={nominatedMock} movies={moviesMock} searchValue={searchValueMock}/>);
        })
        const searchResultsContainer = container.querySelectorAll('.search-results-wrapper');
        const searchResultsDiv = screen.getByTestId('search-results-div');
        expect(searchResultsContainer.length).toBe(1);
        expect(searchResultsDiv).toHaveTextContent('Results for "Dog"');
    })
})