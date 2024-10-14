# javascriptcountdown

# Countdown Timer with Sound

This is a simple countdown timer web app that starts a countdown from 60 seconds when a button is clicked. Once the timer reaches zero, a bell sound plays. The project is built using HTML, CSS, and JavaScript, and it uses an external sound file (`bell.wav`) for the countdown completion alert.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Project Structure](#project-structure)
5. [Customization](#customization)
6. [Technologies Used](#technologies-used)
7. [Future Enhancements](#future-enhancements)

## Features
- Starts a countdown from 60 seconds when the button is clicked.
- Plays a bell sound when the countdown reaches zero.
- The countdown only triggers once when the button is clicked (to prevent multiple triggers).
- Responsive design to center the content on the screen.

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/countdown-timer.git

2. **Navigate to the project folder:**
cd countdown-timer

3. **Run the project**
Open the index.html file in a web browser to view the countdown timer

## Usage
1. Click the **"60 seconds"** button to start the countdown.
2. Watch the countdown decrease by one second at a time.
3. When the timer reaches zero, a bell sound will play.

**Note**: Ensure that your browser is not blocking autoplay sound. Some browsers may require user interaction (such as clicking a button) before allowing audio to play.

## Project Structure
The project consists of three main files:

- **index.html**: Contains the structure of the webpage, including the countdown display and the button to start the timer.
- **index.js**: Implements the logic for the countdown functionality and plays the bell sound when the timer reaches zero.
- **styles.css**: Manages the styling for the countdown box, button, and overall layout of the page.

## Customization
- **Change the countdown start time**: Modify the initial countdown duration by adjusting the value in the JavaScript code (currently set to 60 seconds).
- **Change the sound**: Replace the `bell.wav` file with any sound file of your choice (preferably in .wav or .mp3 format) and update the file path in `index.js` accordingly.
- **Styling**: Customize the appearance of the timer by editing `styles.css`. You can change the font, colors, button styles, and more to match your desired design.

## Technologies Used
- **HTML5**: Used for the structure and markup of the webpage.
- **CSS3**: Provides the styling for the layout, countdown box, and button design.
- **JavaScript (ES6)**: Handles the countdown functionality and the playing of the bell sound when the timer reaches zero.
- **Google Fonts**: The 'Special Elite' font from Google Fonts is used for a distinctive and unique typography style.

## Future Enhancements
- Add a reset option to restart the timer once it finishes.
- Allow users to set a custom countdown duration before starting the timer.
- Incorporate additional sound effects or visual alerts (e.g., flashing colors or animations) when the countdown completes.
- Enhance mobile responsiveness to better support a wider range of screen sizes and devices.
