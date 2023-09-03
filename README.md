# test Readme

## Project Overview

This project is designed to create a mobile application with three main screens: `LoginScreen`, `ListScreen`, and `DetailScreen`. The application's primary purpose is to provide a user-friendly interface for accessing a list of items and viewing item details.

## Screens and Functionality

### LoginScreen

The `LoginScreen` serves as the entry point for the application. It requires users to enter specific credentials to access the app.

- **Credentials:**
  - Username: username
  - Password: password

### ListScreen

The `ListScreen` is the main screen of the application and is responsible for displaying a list of items. Here are its features:

- **Data Display:**
  - The screen displays a paginated list of items.
  - Initially, it loads 10 items at a time.
  - Users can scroll down to trigger a pagination call, which adds the next 10 items to the list.
  - Users can pull down to refresh the list.

- **Item Content:**
  - Each item in the list displays a title and body.

### DetailScreen

The `DetailScreen` allows users to view detailed information about a specific item.

- **Navigation:**
  - Users can navigate to the `DetailScreen` by selecting an item from the `ListScreen`.

- **Item Details:**
  - The `DetailScreen` displays detailed information about the selected item.

## API Integration

- The project uses Axios to make API calls to retrieve data for the `ListScreen`.
- Pagination is implemented to load items in chunks of 10 at a time.
- Pulling down the list refreshes the data, while scrolling down triggers pagination to add more items.

## Navigation

- React Navigation is used for handling navigation within the application, allowing users to move between screens seamlessly.

## Installation and Setup

To set up this project on your local environment, follow these steps:

1. Clone the repository from [GitHub Repo URL](https://github.com/Bhavik129/test).
2. Navigate to the project directory.
3. Install the required dependencies by running: `npm install` or `yarn install`.
4. Start the development server: `npm start` or `yarn start`.

## Dependencies

- React Native
- Axios
- React Navigation
- Other necessary dependencies as specified in the project's package.json file.
