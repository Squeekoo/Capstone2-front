# Table of Contents
- [Table of Contents](#table-of-contents)
- [LocInfo](#locinfo)
  - [Features](#features)
  - [Standard Flow](#standard-flow)
  - [API Integration](#api-integration)
  - [Technology Stack](#technology-stack)


# LocInfo
LocInfo is a Travel Information app that uses the [RoadGoatAPI](https://www.roadgoat.com/business/cities-api) to provide you with accurate information on over 4.3 million destinations. Important location information includes overall safety levels, COVID levels, budget levels, and more.

This repository contains all front-end code. To view the back-end code, visit [Capstone2-back](https://github.com/Squeekoo/Capstone2-back).


## Features
- User may use search bar to find their desired location.
- For now, the User will find their location information to include an image, the population, COVID level, safety level, budget level, and links that redirect them to Lodging (via Airbnb) or Car Rentals/Hotels (via Kayak).
- Stretch-goal features include:
  - Allowing the User to send their desired location information to themselves through email or text.
  - Users may take Notes (i.e. packing list, to-do list, etc.) on the side of the location information page.
  - Users may signup/login to save Notes or save location information to their "Favorites".
    

## Standard Flow
- User arrives at Homepage and may navigate to the "Search Locations" page (via Navbar) or scroll down and see the Footer:
  - The Footer includes a brief description of LocInfo, a GitHub link to this respository, and a link to the [RoadGoatAPI](https://www.roadgoat.com/business/cities-api).
- On the "Search Locations" page, the User may use the search bar to search for any city or country.
- Hitting "Let's Go!" will list all cities/countries that match their query.
  - If their query does not match with anything in the API, an error message will pop up and they will have to search a different name.
- Once cities/countries are listed, the User must choose one.
- After choosing, the User will find all of the locations' information in the next page. 
  - This page includes links to Airbnb's Lodging and Kayak's Car Rental and Hotels.


## API Integration

[RoadGoatAPI](https://www.roadgoat.com/business/cities-api)


## Technology Stack

- PostgreSQL
- Express
- React
- Node.js
- CSS
  - Bootstrap
  - React-Bootstrap
  - FontAwesome


