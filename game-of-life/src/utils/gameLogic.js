export const computeNextGenerationWithAges = (grid, cellAges) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const nextGrid = grid.map(arr => [...arr]);
    const nextCellAges = cellAges.map(arr => [...arr]);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = grid[i][j];
            let liveNeighbors = 0;

            // Check all eight possible neighbors
            for (let I = -1; I <= 1; I++) {
                for (let J = -1; J <= 1; J++) {
                    if (I === 0 && J === 0) continue;
                    const newRow = i + I;
                    const newCol = j + J;
                    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                        liveNeighbors += grid[newRow][newCol];
                    }
                }
            }

            // Apply the Game of Life rules
            if (cell === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    nextGrid[i][j] = 0;
                    nextCellAges[i][j] = 0; // Reset age when cell dies
                } else {
                    nextCellAges[i][j]++; // Increment age when cell survives
                }
            } else {
                if (cell === 0 && liveNeighbors === 3) {
                    nextGrid[i][j] = 1;
                    nextCellAges[i][j] = 1; // Set age to 1 when cell becomes alive
                }
            }
        }
    }

    return { nextGrid, nextCellAges };
};


export const createClusteredGrid = (rows, cols, clusterCount = 5, clusterRadius = 3, chanceOfLife = 0.1) => {
    let grid = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
  
    // Helper function to get a random integer between min and max
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
    for (let i = 0; i < clusterCount; i++) {
      // Random center for the cluster
      const centerRow = randomInt(clusterRadius, rows - clusterRadius - 1);
      const centerCol = randomInt(clusterRadius, cols - clusterRadius - 1);
  
      // Activate cells in a radius around the center
      for (let row = centerRow - clusterRadius; row <= centerRow + clusterRadius; row++) {
        for (let col = centerCol - clusterRadius; col <= centerCol + clusterRadius; col++) {
          if (row >= 0 && row < rows && col >= 0 && col < cols) {
            const distance = Math.sqrt((row - centerRow) ** 2 + (col - centerCol) ** 2);
            if (distance <= clusterRadius) {
              grid[row][col] = Math.random() < chanceOfLife ? 1 : 0;
            }
          }
        }
      }
    }
  
    return grid;
  };
  



// //following is the code for not bonus part
// export const createInitialGrid = (rows, cols) => {
//     const grid = new Array(rows);

//     for (let i = 0; i < rows; i++) {
//         grid[i] = new Array(cols);
//         for (let j = 0; j < cols; j++) {
//             grid[i][j] = Math.random() < 0.05 ? 1 : 0; // 5% chance of being alive
//         }
//     }

//     return grid;
// };

// export const computeNextGeneration = (grid) => {
//     const rows = grid.length;
//     const cols = grid[0].length;
//     const nextGrid = grid.map(arr => [...arr]);

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             const cell = grid[i][j];
//             let liveNeighbors = 0;

//             // Check all eight possible neighbors
//             for (let I = -1; I <= 1; I++) {
//                 for (let J = -1; J <= 1; J++) {
//                     if (I === 0 && J === 0) continue;
//                     if (i + I >= 0 && i + I < rows && j + J >= 0 && j + J < cols) {
//                         liveNeighbors += grid[i + I][j + J];
//                     }
//                 }
//             }

//             // Apply the rules (rule 2 don't need to be checked as we are updating the grid in place)
//             if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
//                 nextGrid[i][j] = 0; // Rule 1 and 3
//             } else if (cell === 0 && liveNeighbors === 3) {
//                 nextGrid[i][j] = 1; // Rule 4
//             }
//         }
//     }

//     return nextGrid;
// };