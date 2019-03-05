function minesweeper(matrix) {
  // Create copy of matrix, but have each position be a '0'.
  // Iterate over original matrix. If there's a mine, add 1
  // to all adjacent positions in the copy. Return the copy.
  // Helper function
  const incrementAdjacentsInGrid = (x, y) => {
    /*
     * [x - 1, y - 1], [x, y - 1], [x + 1, y - 1]
     * [x - 1, y],     [x, y],     [x + 1, y]
     * [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
     */
    for (let cross = -1; cross < 2; cross++) {
      for (let main = -1; main < 2; main++) {
        if (cross === 0 && main === 0) {
          // The center cell will not be incremented
          continue;
        }
        if (
          grid[y + cross] !== undefined &&
          grid[y + cross][x + main] !== undefined
        ) {
          // Only valid cells will be incremented
          // e.g. no incrementing negative indices
          grid[y + cross][x + main] += 1;
        }
      }
    }
    // return void;
  };

  // Main program
  let grid = matrix.map(row => row.map(() => 0));

  for (const [y, row] of matrix.entries()) {
    for (const [x, cell] of row.entries()) {
      if (cell /*has a bomb */) {
        incrementAdjacentsInGrid(x, y);
      }
    }
  }
  return grid;
}

matrix = [[true, false, false], [false, true, false], [false, false, false]];

console.log(minesweeper(matrix));
