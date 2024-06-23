# Trending Movies

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

Trending Movies is a web application built with React that displays trending movies, TV shows, and trending persons. The application uses the Context API for state management and an external API to fetch the trending data.

## Features

- Display trending movies
- Display trending TV shows
- Display trending persons
- Responsive design for mobile and desktop

## Technologies Used

- **Frontend:**
  - React
  - JavaScript (ES6+)
  - HTML5
  - CSS3
- **State Management:**
  - React Context API
- **HTTP Client:**
  - Axios (or fetch API)
- **Other Libraries:**
  - React Router (for navigation)

## API

This project uses the [TMDb (The Movie Database) API](https://www.themoviedb.org/documentation/api). You need to sign up and get an API key to use their services.

## Setup and Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/youssefkhaled23/Trending-Movies.git
   ```
2. Navigate to the project directory:
   ```bash
   cd trending-movies
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or if you're using Yarn:
   ```bash
   yarn install
   ```

### Setting Up the API Key

1. Create a `.env` file in the root directory of the project.
2. Add your TMDb API key to the `.env` file:
   ```
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
   or with Yarn:
   ```bash
   yarn start
   ```
2. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Navigating Between Sections:**
   - Use the navigation bar to switch between trending movies, TV shows, and persons.

2. **Viewing Details:**
   - Click on a movie, TV show, or person to view more details.

## Project Structure

```
trending-movies/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── TVShowCard.js
│   │   ├── PersonCard.js
│   │   └── ...
│   ├── context/
│   │   ├── AppContext.js
│   │   └── AppReducer.js
│   ├── pages/
│   │   ├── Movies.js
│   │   ├── TVShows.js
│   │   ├── Persons.js
│   │   └── ...
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
├── README.md
└── ...
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Author:** YoussefKhaled
- **Email:** khaledalsbaa2@gmail.com
- **GitHub:** [youssefkhaled23](https://github.com/youssefkhaled23)

---

Feel free to customize this template according to your specific project details, such as adding any additional features, dependencies, or instructions relevant to your Trending Movies application.
