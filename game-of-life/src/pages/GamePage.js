import React, { useContext } from 'react';
import { GameProvider } from '../context/GameContext';
import GameContext from '../context/GameContext';
import Grid from '../components/Grid';
import Controls from '../components/Controls';
import '../App.css';
import './GamePage.css';

const GamePage = () => {
    return (
        <GameProvider>
            <div className="App">
                <LivingCellsCount />
                <Grid />
                <br />
                <Controls />
            </div>
        </GameProvider>
    );
};

const LivingCellsCount = () => {
    const { grid } = useContext(GameContext);
    const livingCells = grid.flat().filter(cell => cell === 1).length;

    return (
        <div>
            <p>Living Cells: {livingCells}</p>
            <br />
        </div>
    );
};


export default GamePage;
