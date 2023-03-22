let level1 = [
	[1,0,1,0],
	[1,1,1,1],
	[1,0,1,0],
	[1,0,1,1]
]

let mazearray = level1;
let maze = document.getElementById("maze-container");
let rat = document.getElementById("rat");
let food = document.getElementById("food");

function createMaze() {
	for (let i = 0; i < mazearray.length; i++) {
		let row = document.createElement("div");
		row.classList.add("row");

		for (let j = 0; j < mazearray[i],length; j++) {
			let cell = document.createElement("div");
			cell.classList.add("cell");
			

			if (mazearray[i][j] == 0) {
				cell.classList.add("wall");
			}
			row.appendChild(cell);
		}
		maze.appendChild(row);
	}
}
