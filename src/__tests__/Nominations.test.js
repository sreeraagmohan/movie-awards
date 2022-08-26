import ReactDOM from 'react-dom/client';
import { within, screen } from "@testing-library/dom";
import { act } from 'react-dom/test-utils';
import Nominations from '../components/Nominations';
import userEvent from '@testing-library/user-event';

describe('Nominations', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    })

    it('should render the nominations component and call remove nominee on click', () => {
        const nominatedMock = [{
            Poster: "https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg",
            Title: "Dog",
            Type: "movie",
            Year: "2022",
            imdbID: "tt11252248"
        }];
        const removeNominationMock = jest.fn();
        const nominatedCountMock = nominatedMock.length;
        act(() => {
            ReactDOM.createRoot(container).render(
                <Nominations
                    nominated={nominatedMock}
                    removeNomination={removeNominationMock}
                    nominatedCount={nominatedCountMock}
                />
            );
        })
        const selectionSpan = screen.getByTestId('selection-span');
        const removeNomineeBtn = screen.getByTestId('remove-nominee');
        const nomineeList = screen.getByTestId('nominees-list');
        expect(selectionSpan).toHaveTextContent(`${nominatedCountMock}/5`);
        // Since we only have one nominated movie in nominatedMock
        expect(within(nomineeList).getAllByRole('listitem').length).toBe(1);
        userEvent.click(removeNomineeBtn);
        expect(removeNominationMock).toHaveBeenCalled();
    })

    it('should render the done span if nominee count is 5', () => {
        const nominatedMock = [{
            Poster: "https://m.media-amazon.com/images/M/MV5BODExZmE2ZWItYTIzOC00MzI1LTgyNTktMDBhNmFhY2Y4OTQ3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            Title: "Dog Day Afternoon",
            Type: "movie",
            Year: "1975",
            imdbID: "tt0072890"
        }, {
            Poster: "https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
            Title: "The Power of the Dog",
            Type: "movie",
            Year: "2021",
            imdbID: "tt10293406"
        }, {
            Poster: "https://m.media-amazon.com/images/M/MV5BMjExODMyNzQzMl5BMl5BanBnXkFtZTYwNzMwNTg3._V1_SX300.jpg",
            Title: "Alpha Dog",
            Type: "movie",
            Year: "2006",
            imdbID: "tt0426883"
        }, {
            Poster: "https://m.media-amazon.com/images/M/MV5BMTQ5ZTc1NjAtMGNjNi00ZDY1LWIyM2EtZmM1NTcwMjkzNmMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
            Title: "Ghost Dog: The Way of the Samurai",
            Type: "movie",
            Year: "1999",
            imdbID: "tt0165798"
        }, {
            Poster: "https://m.media-amazon.com/images/M/MV5BMzRkZDVkMDItYjk3Mi00NDkyLThmODUtYzhkN2EwZmE2ZTljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            Title: "Wag the Dog",
            Type: "movie",
            Year: "1997",
            imdbID: "tt0120885"
        }];
        const nominatedCountMock = nominatedMock.length;
        act(() => {
            ReactDOM.createRoot(container).render(
                <Nominations
                    nominated={nominatedMock}
                    nominatedCount={nominatedCountMock}
                />
            );
        })
        const doneSpan = screen.getByTestId('done-span');
        expect(doneSpan).toHaveTextContent('5/5 nominated!');
    })
})