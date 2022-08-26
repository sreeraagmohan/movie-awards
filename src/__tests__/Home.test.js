import ReactDOM from 'react-dom/client';
import { screen } from "@testing-library/dom";
import { renderHook, act } from '@testing-library/react'
import Home from '../components/Home';

describe('Home', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    })

    it('should render the home component', () => {
        act(() => {
            ReactDOM.createRoot(container).render(
                <Home />);
        });
        const home = screen.getByTestId('home');
        expect(home).toBeTruthy();
    });
})
