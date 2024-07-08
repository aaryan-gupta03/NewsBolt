# News App

NewsBolt App is a React application that provides the latest news fetched from an external API. It features a user-friendly interface with categories like business, entertainment, general, health, science, sports, and technology. The app also includes a loading bar to indicate the progress of fetching news.

## Some Images:
<img width="450px;" src="https://raw.githubusercontent.com/aaryan-gupta03/NewsBolt/main/Demo.png"/>

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Components](#components)
- [Dependencies](#dependencies)

## Features

- Fetches latest news from a reliable news API
- Categories for different types of news: Business, Entertainment, General, Health, Science, Sports, and Technology
- Loading bar to show the progress of news fetching
- Responsive navigation bar

## Usage

To use the app, navigate to the appropriate route for the news category you are interested in:
- Home: `/`
- Business: `/business`
- Entertainment: `/entertainment`
- General: `/general`
- Health: `/health`
- Science: `/science`
- Sports: `/sports`
- Technology: `/technology`

## Components

- **App**: The main component that sets up the router and defines routes for different news categories.
- **NavBar**: The navigation bar component with links to different categories.
- **News**: The component that fetches and displays news articles based on the selected category.

## Dependencies

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [react-top-loading-bar](https://www.npmjs.com/package/react-top-loading-bar)
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)
