function transform_pitch (pitch: number) {
    if (Math.abs(pitch) < 5) {
        forward = 0
    } else if (Math.abs(pitch) > 30) {
        forward = 100
    } else {
        forward = Math.map(Math.abs(pitch), 5, 30, 10, 100)
    }
    if (pitch < 0) {
        forward = forward * -1
    }
}
function transform_roll (roll: number) {
    if (Math.abs(roll) < 5) {
        turn = 0
    } else if (Math.abs(roll) > 30) {
        turn = 100
    } else {
        turn = Math.map(Math.abs(roll), 5, 30, 10, 100)
    }
    if (roll < 0) {
        turn = roll * -1
    }
}
let turn = 0
let forward = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    # # # # #
    . # . # .
    `)
loops.everyInterval(50, function () {
    transform_pitch(input.rotation(Rotation.Pitch))
    transform_roll(input.rotation(Rotation.Roll))
    radio.sendValue("forward", forward)
    radio.sendValue("turn", turn)
})
