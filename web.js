
//Mutable state
let state = initialState()

const step = t1 => t2 => {
    if (t2 - t1 > 100) {
        state = next(state)
        draw()
        window.requestAnimationFrame(step(t2)) //t2 = next timestamp
    } else {
        window.requestAnimationFrame(step(t1)) //t1 = current timestamp
    }
}

// Key events
// Directions are constants of snake.js
window.addEventListener('keydown', event => {
    switch (event.keyCode) {
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