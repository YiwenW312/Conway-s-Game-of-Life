import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function HomePage() {
  return (
    <div>
      <h1>Hi, welcome to Conway’s Game of Life!</h1>
      <p>This game is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.</p>
      <p>You can learn more <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <h2>Rules:</h2>
      <ul>
        <li>A living cell with less than two living neighbours dies.</li>
        <li>A living cell with two or three live neighbours lives.</li>
        <li>A living cell with more than three live neighbours dies.</li>
        <li>A dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
      </ul>
    </div>
  );
}

export default HomePage;

