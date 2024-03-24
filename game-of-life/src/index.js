import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { GameProvider } from './context/GameContext';

ReactDOM.render(
    <React.StrictMode>
        <GameProvider>
            <App />
        </GameProvider>
    </React.StrictMode>,
    document.getElementById('root')
);