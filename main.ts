input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
    led.setDisplayMode(DisplayMode.BlackAndWhite)
})
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.InBackground)
basic.showLeds(`
    . . . . .
    . . # . .
    # # . # #
    . . . . .
    . . . . .
    `)
basic.pause(5)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . . . . .
    . . . . .
    `)
basic.pause(5)
basic.showLeds(`
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    `)
basic.showString("Hello!")
basic.showString("Aries")
basic.showLeds(`
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    `)
loops.everyInterval(10000, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        `)
})
basic.forever(function () {
	
})
