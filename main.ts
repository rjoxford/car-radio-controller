let turn = 0
let forward = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    # # # # #
    . # . # .
    `)
loops.everyInterval(10, function () {
    forward = input.rotation(Rotation.Pitch)
    turn = input.rotation(Rotation.Roll)
    radio.sendValue("forward", Math.map(forward, -90, 90, -100, 100))
    radio.sendValue("turn", Math.map(turn, -90, 90, -100, 100))
})
