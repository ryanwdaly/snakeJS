const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Mutable state
let state = initialState()

// Position helpers
const x = c => Math.round(c * canvas.width / state.cols)
const y = r => Math.round(r * canvas.height / state.rows)

// Game loop draw
const draw = () => {
    // clear
    ctx.fillStyle = '#232323'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // draw snake
    ctx.fillStyle = 'rgb(0,200,50)'
    state.snake.map(p => ctx.fillRect(x(p.x), y(p.y), x(1), y(1)))

    // draw apples
    ctx.fillStyle = 'rgb(255,50,0)'
    ctx.fillRect(x(state.apple.x), y(state.apple.y), x(1), y(1))

    // add crash
    if (state.snake.length == 0) {
        ctx.fillStyle = 'rgb(255,0,0)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}

// Game loop update
const step = t1 => t2 => {
    if (t2 - t1 > 100) {
        state = next(state)
        draw()
        window.requestAnimationFrame(step(t2))
    } else {
        window.requestAnimationFrame(step(t1))
    }
}
// Key events
// Directions are constants of snake.js
window.addEventListener('keydown', event => {
    switch (event.key) {
        case 'a': //left
            state = enqueue(state, WEST); break
        case 'w': //up
            state = enqueue(state, NORTH); break
        case 'd': //right
            state = enqueue(state, EAST); break
        case 's': //down
            state = enqueue(state, SOUTH); break
    }

})

//main
draw();
window.requestAnimationFrame(step(0))