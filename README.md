## R-Game Documentation

### Overview
R-Game is a web application designed for discovering new and exciting video games. With R-Game, users can search for games based on various criteria such as platform, genre, and more. The app utilizes the RAWG API to fetch game data and provide users with a seamless and enjoyable gaming experience.

### Getting Started
To use R-Game on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone <repository_url>
   ```

2. Install Dependencies:
   ```
   cd R-Game
   npm install
   ```

3. Get RAWG API Key:
   - Visit https://rawg.io/apidocs and create an account to obtain an API key.
   - Add the API key to `src/services/api-client.ts` by replacing `<YOUR_API_KEY>`.

4. Start the Web Server:
   ```
   npm run dev
   ```

5. Open the Web App:
   - Access R-Game in your web browser at the specified localhost address (e.g., http://localhost:3000).

### Features
R-Game offers the following features:

- Game Search: Users can search for games using various search criteria, including platform, genre, and title.

- Game Details: Clicking on a game thumbnail will display detailed information about the selected game, such as its release date, description, and platforms.

- Critics' Scores: R-Game displays the Metacritic score of each game to help users gauge its critical reception.

- Interactive Emojis: Users can interact with the game cards by liking or disliking them using emojis. The number of likes and dislikes is displayed next to each emoji.

### Folder Structure
The project's folder structure is as follows:

- `public`: Contains public assets, such as the website favicon and index.html.

- `src`: The main source folder containing the application code.

  - `assets`: Holds image assets used in the application.

  - `components`: Contains reusable React components used throughout the app.

  - `hooks`: Custom hooks used for fetching game data and handling states.

  - `services`: Holds API client configuration to interact with the RAWG API.

  - `styles`: Contains global styles and Chakra UI theme customization.

  - `pages`: Includes the main page components of the app.

  - `App.tsx`: The main entry point for the application.

  - `index.tsx`: Renders the root component into the DOM.

### Technologies Used
R-Game is built using the following technologies:

- React: A JavaScript library for building user interfaces.

- Chakra UI: A flexible and accessible UI component library for React applications.

- Axios: A popular HTTP client used for making API requests.

- Framer Motion: A library for creating smooth animations and interactive user interfaces.

- RAWG API: An API that provides video game data for R-Game's search and discovery features.

### Developer Information
R-Game was developed by M.J. as a personal project. The code is open-source and available on GitHub. If you encounter any issues or have suggestions for improvement, feel free to contribute or create an issue on the repository.

### License
R-Game is released under the MIT License. Please refer to the `LICENSE` file for more details.

### Acknowledgments
Special thanks to the creators of the RAWG API for providing the data used in this project.

Enjoy discovering new and exciting games with R-Game! Happy gaming! 🎮
