basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    # # # # #
    . # . # .
    `)
loops.everyInterval(200, function () {
    if (Math.abs(input.rotation(Rotation.Pitch)) >= 5) {
        radio.sendValue("forward", Math.map(input.rotation(Rotation.Pitch), -90, 90, -100, 100))
    }
    if (input.rotation(Rotation.Roll) >= 10) {
        radio.sendValue("forward", Math.map(input.rotation(Rotation.Roll), 10, 90, 0, 100))
    }
})
