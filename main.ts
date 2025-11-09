basic.forever(function () {
    basic.pause(1000)
    if (input.temperature() == 25) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
