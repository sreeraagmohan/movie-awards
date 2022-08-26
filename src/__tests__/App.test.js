import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('App', () => {
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
            ReactDOM.createRoot(container).render(<App />);
        })
        const home = container.querySelectorAll('.home');
        expect(home.length).toBe(1);
    })
})