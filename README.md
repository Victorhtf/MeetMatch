# MeetMatch - Couple Restaurant Decision Web App

MeetMatch is a web application designed to simplify the process of choosing a restaurant for couples. The app is inspired by the famous movie matching app, where couples synchronize their accounts and get restaurant recommendations based on mutual preferences. Built with React, Sass, SQL, JSON, and external APIs for restaurants, reviews, and location data, CoupleEats aims to make dining decisions easy and enjoyable for couples.

## Features

- **Restaurant Recommendations**: Couples receive personalized restaurant suggestions based on their combined preferences and mutual interests.

- **Matching System**: Restaurants that both partners have shown interest in will be matched, making it easier for the couple to decide where to eat.

- **External Reviews and Ratings**: The app integrates external review and rating APIs to provide comprehensive insights into restaurants.

- **Location-Based Search**: Couples can explore nearby restaurants based on their current location or a specified area.

- **WebSocket Pairing**: WebSocket is used for real-time pairing between couples, ensuring seamless synchronization.

## Technologies Used

- React
- Sass
- SQL
- JSON
- External APIs (restaurants, reviews, location)
- WebSocket (for pairing)

## Getting Started

To run this project locally, follow these steps:

  1. Clone the repository: `git clone https://github.com/your-username/MeetMatch.git`
2. Navigate to the project directory: `cd CoupleEats`
3. Install dependencies: `npm install`
4. Set up the database (SQL) and update the connection settings in the app.
5. Run the server: `node server.js`
6. Run the development build: `npm start`
7. Open your browser and visit: `http://localhost:3000`

## Account Synchronization

To utilize the restaurant matching features, couples need to synchronize their accounts:

1. Both partners create individual accounts on CoupleEats.
2. Implement a pairing system with WebSocket to allow couples to connect and synchronize their accounts.

## Contributing

We welcome contributions from the community to enhance the CoupleEats app. If you wish to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Create a Pull Request, and we'll review it together.

## Feedback and Support

We value your feedback and are here to assist you. If you encounter any issues, have suggestions, or need support, please raise an issue on the GitHub repository.


Thank you for choosing MeetMatch! We hope our web app will make restaurant decisions fun and delightful for you and your partner. If you have any questions or need further information, feel free to reach out. Bon appétit! 🍽️🥂
