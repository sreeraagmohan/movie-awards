# Movie Awards

A simple app made with React & Jest that queries the OMDB API and allows the user to nominate five of their favourite movies for awards.

## How to Install The Project
1. Clone the repository 
2. On terminal, run `npm install` 
3. Head over to http://www.omdbapi.com/apikey.aspx to get an API key. 
4. Replace the API key that you've received from OMDB in `constants.js`
5. On terminal, run `npm run start`

## How to Use
1. Search for your favourite movie in the searchbar. The results will appear below the search bar on the left.
2. Each movie card will have the movie name, the year of release, and a nominate button. 
3. Click on the nominate button to add your favourite movie to the list of nominees. The user can nominate upto five movies of their choice. 
4. The nominated movies will appear below the search bar on the right side. 
5. Click on the remove button to remove a nomination from the nominee list. 
6. The list of nominees are also stored in your local storage, so that the history is maintained for the next time you use the app. 

## Running Tests
1. Run `npm run test` to run all the tests in the `__tests__` folder.
2. To view a coverage report, run `npm run test -- --coverage` to get a coverage report on the terminal. 

Questions/Comments? Drop me an [e-mail](mailto:sreeraagmohan@gmail.com)