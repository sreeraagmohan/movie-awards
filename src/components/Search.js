import "./Search.scss";

const Search = (props) => {
    return (
        <div className="search-container">
            <form>
                <p data-testid="search-title">Search a Movie Title</p>
                <input
                    data-testid="search-input"
                    className="search-input"
                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    placeholder="example: Memento"
                />
            </form>
        </div>
    );
}

export default Search;