import ReactDOM from 'react-dom/client';
import { screen } from "@testing-library/dom";
import { act } from 'react-dom/test-utils';
import Search from '../components/Search';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    })

    it('should render the search component', () => {
        act(() => {
            ReactDOM.createRoot(container).render(<Search />);
        })
        const searchContainer = container.querySelectorAll('.search-container');
        const searchTitle = screen.getByTestId('search-title');
        const searchInput = container.querySelectorAll('input');
        expect(searchContainer.length).toBe(1);
        expect(searchTitle).toHaveTextContent('Search a Movie Title');
        expect(searchInput.length).toBe(1);
    })

    it('should call setSearchValue prop', () => {
        const setSearchValueMock = jest.fn();
        act(() => {
            ReactDOM.createRoot(container).render(<Search setSearchValue={setSearchValueMock}/>);

        })
        const input = screen.getByTestId('search-input');
        userEvent.type(input, 'Dog');
        // Since Dog has three letters
        expect(setSearchValueMock).toHaveBeenCalledTimes(3);
    })
})