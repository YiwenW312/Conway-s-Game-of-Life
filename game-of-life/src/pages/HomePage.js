import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to Conway’s Game of Life!</h1>
      <div className="home-content">
        <p>
          This game is a cellular automaton devised by the British mathematician
          John Horton Conway in 1970. It is a zero-player game, meaning that
          its evolution is determined by its initial state, requiring no further
          input. One interacts with the Game of Life by creating an initial
          configuration and observing how it evolves. You can learn more about
          the game <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer" className="home-link">here</a>.
        </p>
        <p className="home-feature-description">
          The <strong>Heatmap</strong> feature visualizes the life cycle of cells in the grid,
          with active cells in dark olive green and inactive ones fading to white
          over time. Toggle the heatmap to track this activity or use <strong>Autoplay</strong> for an animated evolution every 100 milliseconds. Add or remove cells
          by clicking on the grid. Enjoy exploring the complexities of this simulation!
        </p>
      </div>
      <div className="home-rules">
        <h2>Rules:</h2>
        <ul>
          <li>A living cell with fewer than two living neighbours dies.</li>
          <li>A living cell with two or three live neighbours lives.</li>
          <li>A living cell with more than three live neighbours dies.</li>
          <li>A dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
        </ul>
      </div>
    </div>
  );
}


export default HomePage;

