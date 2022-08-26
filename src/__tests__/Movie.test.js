import ReactDOM from 'react-dom/client';
import { screen } from "@testing-library/dom";
import { act } from 'react-dom/test-utils';
import Movie from '../components/Movie';
import userEvent from '@testing-library/user-event';

describe('Movie', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    })

    it('should render the movie component and nominate button should be called on click', () => {
        const nominateMovieMock = jest.fn();
        const movieMock= {
            Poster: "https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg",
            Title: "Dog",
            Type: "movie",
            Year: "2022",
            imdbID: "tt11252248"
        };
        const searchValueMock = "Dog";
        const nominatedMock = [];
        act(() => {
            ReactDOM.createRoot(container).render(
                <Movie 
                    movie={movieMock} 
                    searchValue={searchValueMock} 
                    key={movieMock.imdbID} 
                    nominateMovie={nominateMovieMock} 
                    nominated={nominatedMock}/>);
        })
        const nominateButton = screen.getByTestId('nominate-button');
        userEvent.click(nominateButton);
        expect(nominateMovieMock).toHaveBeenCalled();
    })
})