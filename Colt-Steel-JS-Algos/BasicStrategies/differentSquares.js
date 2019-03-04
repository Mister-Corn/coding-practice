function differentSquares(matrix) {
    /* number[][] -> number */
    // If matrix is not big enough to hold a 2x2 square,
    // return 0
    if (matrix.length < 2) {
        return 0;
    } else if (matrix[0] && (matrix[0].length < 2)) {
        return 0;
    }
    // Helper function to generate string key for memory object
    const generateKey = (x, y) => {
        return `${matrix[y][x]}${matrix[y+1][x]}${matrix[y][x+1]}${matrix[y+1][x+1]}`;
    }
    
    let uniques = 0; // Variable to keep track of unique squares
    const memory = {}; // Object to store existing squares
    
    // Iterate over each possible 2x2 square in the matrix
    // Check to see if 2x2 square already exists in memory
    // If so, do nothing. If not, increment uniques and add
    // that square to memory
    for (let y = 0; y <= matrix.length - 2; y++) {
        let row = matrix[y];
        for (let x = 0; x <= row.length - 2; x++) {
            let square = generateKey(x, y);
            if (!memory[square]) {
                memory[square] = true;
                uniques++;
            }
        }
    }
    return uniques;
}



const matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]];

console.log(differentSquares(matrix));
    