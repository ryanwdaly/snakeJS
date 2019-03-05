const NORTH = { x:0, y:-1 }
const SOUTH = { x: 0, y: 1 }
const EAST = { x: 1, y: 0 }
const WEST = { x: -1, y: 0 }

const randomPosition = table => ({
    x: random(0)(table.cols - 1),
    y: random(0)(table.rows - 1)
})