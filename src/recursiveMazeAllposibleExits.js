// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];
//
// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
//
// The Maze is represented as a NM matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by ``. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.
//
// Use the above maze and modify your solution so it finds All the possible exits through the Maze. To find all possible exit through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?
//
//     Notice that this maze has 3 exits. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following: