let turn = 0
let forward = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    # # # # #
    . # . # .
    `)
loops.everyInterval(100, function () {
    forward = input.rotation(Rotation.Pitch)
    turn = input.rotation(Rotation.Roll)
    if (Math.abs(forward) >= 10) {
        radio.sendValue("forward", Math.map(forward, -90, 90, -100, 100))
    } else {
        radio.sendValue("turn", Math.map(turn, -90, 90, -100, 100))
    }
})
