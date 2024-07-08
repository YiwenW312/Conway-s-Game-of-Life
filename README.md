# Conway's Game of Life

## Overview

For this project, you will create a simulation known as Conway's Game of Life using JavaScript and React. Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. You will create a grid-based game where cells live or die based on the rules provided.

- Demo URL: https://yiwen-wang-project2.onrender.com/

## Project Overview
- Developed an interactive Game of Life using JavaScript and React: Implemented dynamic grid customization, real-time cell toggling, and state management with React Context API.

- Role: Developer

- Technologies Used: JavaScript, React, CSS, HTML, Git

## Key Contributions and Achievements
- Created functions for computing cell generations, neighbor counting, and cell state transitions.
- Enhancing user experience with intuitive UI and heatmap visualization.
- Successfully developed an engaging and interactive web-based Game of Life.

## Rubric

- **Core Functionality (30%)**: Implement the basic functionality of the Game of Life.
- **Working Github and Heroku Link (5%)**: Your code must be accessible and functional.
- **Correct Views and Good Styling (15%)**: The application should be visually appealing and user-friendly.
- **Well Written Code (10%)**: Your code should be clean, well-commented, and easy to understand.
- **Stores Actions and Reducers (15%)**: Implement proper state management.
- **Demonstrating Proper React Principles (15%)**: Your project should correctly use React principles and patterns.
- **Writeup (10%)**: Include a thorough writeup of your project, challenges, and learnings.

## Core Functionality

The Game of Life is played on a grid of square cells. Each cell is in one of two possible states, alive or dead. Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## Implementation Details

- Users should see a 20x20 grid upon loading the game.
- Include input fields for grid height and width, with a button to apply changes.
- Implement error handling for out-of-range input values.
- Allow users to toggle cells between alive and dead by clicking them.
- Include an option to display a heatmap indicating how recently a cell was alive.
- Provide buttons to reset the grid and to advance the simulation by one generation.
- Display the current number of living cells.

## Coding Advice

For representing a grid in JavaScript, consider using a 2-dimensional array. Example and further details on handling cell neighbors are provided in the document.

## Deliverables

- GitHub repository link.
- Live application link (Heroku, Render, etc.).
- Project writeup discussing challenges, additional features, and assumptions.

## Academic Integrity

This project must adhere to NEU's academic integrity policies. Violations will be addressed accordingly.

