import React, { useContext, useState } from 'react';
import GameContext from '../context/GameContext';
import './Controls.css';

const Controls = () => {
    const {
        updateGridSize,
        goToNextGeneration,
        resetGame,
        setIsPlaying,
        isPlaying,
        useHeatmap,
        setUseHeatmap,
    } = useContext(GameContext);
    const [rows, setRows] = useState(20);
    const [cols, setCols] = useState(20);
    const [error, setError] = useState('');

    const handleRowChange = (event) => {
        setRows(event.target.value);
    };

    const handleColChange = (event) => {
        setCols(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRows = parseInt(rows, 10);
        const newCols = parseInt(cols, 10);

        if (newRows >= 3 && newRows <= 40 && newCols >= 3 && newCols <= 40) {
            setError('');
            updateGridSize(newRows, newCols);
        } else {
            setError('Grid size must be between 3 and 40.');
        }
    };

    const handleNext = () => {
        setIsPlaying(false);
        goToNextGeneration();
    };

    const handleReset = () => {
        setIsPlaying(false);
        resetGame();
    };

    const handleAutoplayToggle = () => {
        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
        }
    };

    const handleHeatmapToggle = () => {
        setUseHeatmap(!useHeatmap);
    };

    return (
        <div className='container'>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div className="input-group">
                <form onSubmit={handleSubmit}>
                    <label>
                        Rows:
                        <input type="number" value={rows} min="3" max="40" onChange={handleRowChange} />
                    </label>
                    <label>
                        Columns:
                        <input type="number" value={cols} min="3" max="40" onChange={handleColChange} />
                    </label>
                    <button type="submit">Update Size</button>
                </form>
            </div>
            <div className="button-group">
                <button onClick={handleNext}>Next Frame</button>
                <button onClick={handleAutoplayToggle}>
                    {isPlaying ? 'Stop' : 'Start'} Autoplay
                </button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleHeatmapToggle}>
                    {useHeatmap ? 'Hide Heatmap' : 'Show Heatmap'}
                </button>
            </div>
        </div>
    );
}

export default Controls;