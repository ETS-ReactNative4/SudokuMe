var Constants = require('./constants');

export function MatrixToArray(matrix){
    var array = [];

    for(var row = 0; row < matrix.length; row++){
        for(var col = 0; col < matrix[row].length; col++){
            array.push(matrix[row][col]);
        }
    }

    return array;
}

export function ArrayToMatrix(array){

    var matrix = [];
    var subArray = [];

    for(var i = 0; i < array.length; i++){
        subArray.push(array[i]);
        if(subArray.length == 9){
            matrix.push(subArray);
            subArray = [];
        }
    }
    return matrix;
}

export function SudokuToArray(sudoku){
    var printArray = [];
    for(var row = 0; row < sudoku.length; row++){
        for(var col = 0; col < sudoku[row].length; col++){
            printArray.push(sudoku[row][col]);
        }
    }
    return printArray
}

export function PrepareSudoku(sudoku){

    var solution = [];

    // Add keys value and isFix
    for(var row = 0; row < sudoku.length; row++){
        var subArray = [];
        for(var col = 0; col < sudoku[row].length; col++){
            subArray.push({
                value: sudoku[row][col],
                isFix: sudoku[row][col] != ""
            });
        }

        solution.push(subArray);
    }

    return solution
}

export function SolveSudoku(sudoku){
    var solution = PrepareSudoku(sudoku);
    
    var loopCounter = 0;
    var isForward = true;

    for(var row = 0; row < solution.length; row++){
        for(var col = 0; col < solution[row].length; col++){

            if(loopCounter < Constants.LOOP_LIMIT) loopCounter++; 
            else return false;

            if(solution[row][col].isFix == true){
                // Go to the next cell
                if(isForward == false){
                    if(col > 0){
                        col = col-2;
                    }
                    else if(row > 0){
                        col = 7;
                        row--;
                    }
                }
            }
            else{
                if(solution[row][col].value == ""){
                    solution[row][col].value = 1;
                    isForward = true;
                }
                else if(solution[row][col].value < 9){
                    solution[row][col].value++;
                    isForward = true;
                }
                else{
                    solution[row][col].value = "";
                        if(col > 0){
                            col = col-2;
                        }
                        else if(row > 0){
                            col = 7;
                            row--;
                        }
                        isForward = false;
                }

                //validation here
                if(isForward == true){
                    if(ValidationCheck(solution, row, col) == false){
                        col--;
                    }
                }

            }
        }
    }
    
    return SudokuToArray(solution); 

}

export function ValidationCheck(solution, celRow, celCol){
    var valueHolder = solution[celRow][celCol].value;

    for(var row = 0; row < solution.length; row++){
        if(row != celRow && solution[row][celCol].value == valueHolder){
            return false;
        }
    }

    for(var col = 0; col < solution[celRow].length; col++){
        if(col != celCol && solution[celRow][col].value == valueHolder){
            return false;
        }
    }

    var cornerRow;
    var cornerCol;

    // Get corner row for the group
    if(celRow >= 0 && celRow < 3) cornerRow = 0;
    else if(celRow >= 3 && celRow < 6) cornerRow = 3;
    else if(celRow >= 6 && celRow < 9) cornerRow = 6;

    // Get corner column for the group
    if(celCol >= 0 && celCol < 3) cornerCol = 0;
    else if(celCol >= 3 && celCol < 6) cornerCol = 3;
    else if(celCol >= 6 && celCol < 9) cornerCol = 6;
    
    for(var row = cornerRow; row < cornerRow+3; row++){
        for(var col = cornerCol; col < cornerCol+3; col++){
            if((row != celRow && col != celCol) && solution[row][col].value == valueHolder){
                return false;
            }
        }
    }

    return true;
}


