function minesweeper(matrix) {
  // Create copy of matrix, but have each position be a '0'.
  // Iterate over original matrix. If there's a mine, add 1
  // to all adjacent positions in the copy. Return the copy.
  // Helper function
  const incrementAdjacentsInGrid = (x, y) => {
    // Mutates "grid" by incrementing all valid adjacent
    // positions around x,y in "grid"
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

/* In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]

the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.array.boolean matrix

    A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

    Guaranteed constraints:
    2 ≤ matrix.length ≤ 100,
    2 ≤ matrix[0].length ≤ 100.

    [output] array.array.integer
        Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.
*/
