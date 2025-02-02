# Video file link
https://drive.google.com/drive/folders/1xTBw7k_dMs53O7Yj4j9admGO18XHn4My?usp=sharing

# Quiz Application

This project is a web-based quiz application designed to help students prepare for competitive exams like REET, NEET, and State PSCs. The application is built using modern web technologies, including React for the frontend, and it leverages various components to create an interactive and engaging user experience.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Installation](#installation)

## Features

- Interactive quiz functionality
- Responsive design
- Informative home page
- Showcase of learning apps
- Immediate feedback on quiz answers
- Scoreboard to display results

## Project Structure

The project is organized into several key components:

1. **Home Component**: The landing page of the application, which includes an introductory section and a showcase of learning apps.
2. **AppCard Component**: Represents individual learning apps with a title, description, and download button.
3. **Quiz Component**: The core component of the application where the quiz functionality is implemented.
4. **QuestionCard Component**: Displays individual quiz questions and their corresponding answer options.
5. **OptionButton Component**: Represents individual answer options and handles user interactions.

## How It Works

When a user visits the application in a browser, they are greeted with the home page, which includes information about the platform and a showcase of learning apps. The home page is designed to be visually appealing and informative, with a clean layout and responsive design.

### Home Page

The home page consists of two main sections:

1. **About Section**: Provides an introduction to the platform, explaining its purpose and benefits. It is styled with a white background, rounded corners, and a shadow effect to make it stand out.
2. **Our Apps Section**: Showcases the various learning apps available on the platform. Each app is displayed using the `AppCard` component, arranged in a responsive grid layout.

### Quiz Functionality

The core functionality of the application is the quiz component, which provides an interactive quiz experience for users. Here is a step-by-step explanation of how it works:

1. **Fetching Quiz Data**: When the quiz component is mounted, it fetches quiz data from an API.
2. **Displaying Questions**: The quiz component displays one question at a time using the `QuestionCard` component.
3. **Selecting an Answer**: Users can select an answer by clicking on one of the options. The `OptionButton` component handles the click event and changes the color of the selected option to indicate correctness.
4. **Proceeding to the Next Question**: Users can click the "Next" button to proceed to the next question.
5. **Displaying the Score**: Once all questions have been answered, the quiz component displays the user's score using a `Scoreboard` component.

### Responsive Design

The application is designed to be fully responsive, ensuring a seamless experience across different devices and screen sizes. The use of CSS Grid and Flexbox ensures that elements are properly aligned and spaced, providing a clean and organized layout.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/quiz-app.git

2. Navigate to the project directory:
    ```sh
    cd quiz-app

3. Install the dependencies:
    ```sh
    npm install

4. Start the development server:
    ```sh
    npm start
5. Open your browser and visit http://localhost:3000 to view the application.

6. To build the project for production, run:
    ```sh
    npm run build

7. The build files will be located in the `build` directory.
