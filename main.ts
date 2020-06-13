function createBeaconNumber (num: number) {
    basic.showIcon(IconNames.Chessboard)
    basic.showNumber(num)
    currentBeaconNumber = num
    bluetooth.activateSwgeLocationBeacon(
    num
    )
    basic.showIcon(IconNames.Yes)
    display()
}
function countdown (num: number) {
    basic.showLeds(`
        # # # # #
        # . # . #
        . # . # .
        # . . . #
        # # # # #
        `)
    basic.pause(pauseValueShort)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showString("" + (num))
    beautifyNum(num)
    basic.pause(pauseValueShort)
    countdownTemp = num
    for (let index = 0; index < num; index++) {
        beautifyNum(countdownTemp)
        basic.pause(pauseValue)
        countdownTemp += -1
    }
    basic.showLeds(`
        # # # # #
        # . . . #
        . # . # .
        # . # . #
        # # # # #
        `)
    basic.pause(pauseValueShort)
    display()
}
input.onButtonPressed(Button.A, function () {
    do_random = 0
    shakeNum = 0
    currentBeaconNumber += 1
    if (currentBeaconNumber > 7) {
        currentBeaconNumber = 1
    }
    createBeaconNumber(currentBeaconNumber)
})
function randomWithInput (maxOutput: number) {
    varRandom = 1
    varRandom = randint(maxOutput, varRandom * (varRandom + maxOutput))
    for (let index = 0; index < randint(1, maxOutput); index++) {
        varRandom = varRandom * (Math.abs(input.temperature()) + randint(1, 33))
        varRandom = varRandom * (Math.abs(input.compassHeading()) + randint(1, 33))
        varRandom = varRandom * (Math.abs(input.lightLevel()) + randint(1, 33))
        varRandom = varRandom * (Math.abs(input.acceleration(Dimension.X)) + randint(1, 33))
        varRandom = varRandom * (Math.abs(input.acceleration(Dimension.Y)) + randint(1, 33))
        varRandom = varRandom * (Math.abs(input.acceleration(Dimension.Z)) + randint(1, 33))
        varRandom = varRandom * (Math.abs(input.acceleration(Dimension.Strength)) + randint(1, 33))
    }
    if (varRandom * 0 != 0 || String.fromCharCode(varRandom).length > 3) {
        basic.showIcon(IconNames.Ghost)
        basic.showString("" + (varRandom))
        basic.showIcon(IconNames.Skull)
        basic.showString(String.fromCharCode(varRandom))
        randomWithInput(maxOutput)
    } else {
        varRandom = varRandom * 1e+99 % 10
        varRandom = varRandom % maxOutput + 1
        basic.showIcon(IconNames.EigthNote)
        basic.showString("" + (varRandom))
    }
}
function beautifyNum (num: number) {
    if (num < 0) {
        basic.showIcon(IconNames.Skull)
        basic.pause(pauseValueShort)
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `)
        basic.pause(pauseValueShort)
        basic.showIcon(IconNames.Skull)
    }
    if (num == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (num == 1) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (num == 2) {
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (num == 3) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    }
    if (num == 4) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
    }
    if (num == 5) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (num == 6) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            `)
    }
    if (num == 7) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            `)
    }
    if (num == 8) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (num == 9) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (num == 10) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (num == 11) {
        basic.showLeds(`
            # # # . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (num == 12) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (num == 13) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            `)
    }
    if (num == 14) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            `)
    }
    if (num == 15) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (num == 16) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            `)
    }
    if (num == 17) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            `)
    }
    if (num == 18) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (num == 19) {
        basic.showLeds(`
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (num == 20) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (num == 21) {
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (num == 22) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (num == 23) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # # .
            `)
    }
    if (num == 24) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
    }
    if (num >= 25) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    shakeNum = 0
    if (do_random == 0) {
        do_random = 1
        basic.showIcon(IconNames.EigthNote)
        basic.pause(pauseValueShort)
        basic.showIcon(IconNames.Yes)
        basic.pause(pauseValueShort)
    } else {
        do_random = 0
        basic.showIcon(IconNames.EigthNote)
        basic.pause(pauseValueShort)
        basic.showIcon(IconNames.No)
        basic.pause(pauseValueShort)
    }
})
function createBeacon () {
    basic.showIcon(IconNames.Chessboard)
    basic.showNumber(currentBeaconNumber)
    bluetooth.activateSwgeLocationBeacon(
    currentBeaconNumber
    )
    basic.showIcon(IconNames.Yes)
    display()
}
function display () {
    // let displayTemp = ` ${(currentBeaconNumber >= 1 ? '#' | '.')} ${(currentBeaconNumber >= 6 ? '#' | '.')} . ${(currentPersonalityNumber >= 5 ? '#' | '.')} ${(currentBeaconNumber >= 2 ? '#' | '.')} ${(currentBeaconNumber >= 7 ? '#' | '.')} . ${(currentPersonalityNumber >= 4 ? '#' | '.')} ${(currentBeaconNumber >= 3 ? '#' | '.')} . . ${(currentPersonalityNumber >= 8 ? '#' | '.')} ${(currentPersonalityNumber >= 3 ? '#' | '.')} ${(currentBeaconNumber >= 4 ? '#' | '.')} . . ${(currentPersonalityNumber >= 7 ? '#' | '.')} ${(currentPersonalityNumber >= 2 ? '#' | '.')} ${(currentBeaconNumber >= 5 ? '#' | '.')} . . ${(currentPersonalityNumber >= 6 ? '#' | '.')} ${(currentPersonalityNumber >= 1 ? '#' | '.')} `; basic.showLeds(displayTemp)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    if (currentBeaconNumber == 0) {
        basic.showIcon(IconNames.No)
    } else {
        // let displayTemp = ` ${(currentBeaconNumber >= 1 ? '#' | '.')} ${(currentBeaconNumber >= 6 ? '#' | '.')} . ${(currentPersonalityNumber >= 5 ? '#' | '.')} ${(currentBeaconNumber >= 2 ? '#' | '.')} ${(currentBeaconNumber >= 7 ? '#' | '.')} . ${(currentPersonalityNumber >= 4 ? '#' | '.')} ${(currentBeaconNumber >= 3 ? '#' | '.')} . . ${(currentPersonalityNumber >= 8 ? '#' | '.')} ${(currentPersonalityNumber >= 3 ? '#' | '.')} ${(currentBeaconNumber >= 4 ? '#' | '.')} . . ${(currentPersonalityNumber >= 7 ? '#' | '.')} ${(currentPersonalityNumber >= 2 ? '#' | '.')} ${(currentBeaconNumber >= 5 ? '#' | '.')} . . ${(currentPersonalityNumber >= 6 ? '#' | '.')} ${(currentPersonalityNumber >= 1 ? '#' | '.')} `; basic.showLeds(displayTemp)
        basic.showLeds(`
            # # # . .
            # . # . #
            # # . . .
            # . # . #
            # # # . .
            `)
        basic.showString("" + (currentBeaconNumber))
        // let displayTemp = ` ${(currentBeaconNumber >= 1 ? '#' | '.')} ${(currentBeaconNumber >= 6 ? '#' | '.')} . ${(currentPersonalityNumber >= 5 ? '#' | '.')} ${(currentBeaconNumber >= 2 ? '#' | '.')} ${(currentBeaconNumber >= 7 ? '#' | '.')} . ${(currentPersonalityNumber >= 4 ? '#' | '.')} ${(currentBeaconNumber >= 3 ? '#' | '.')} . . ${(currentPersonalityNumber >= 8 ? '#' | '.')} ${(currentPersonalityNumber >= 3 ? '#' | '.')} ${(currentBeaconNumber >= 4 ? '#' | '.')} . . ${(currentPersonalityNumber >= 7 ? '#' | '.')} ${(currentPersonalityNumber >= 2 ? '#' | '.')} ${(currentBeaconNumber >= 5 ? '#' | '.')} . . ${(currentPersonalityNumber >= 6 ? '#' | '.')} ${(currentPersonalityNumber >= 1 ? '#' | '.')} `; basic.showLeds(displayTemp)
        basic.showLeds(`
            # # # . .
            # . # . #
            # # # . .
            # . . . #
            # . . . .
            `)
        basic.showString("" + (currentPersonalityNumber))
        // let displayTemp = ` ${(currentBeaconNumber >= 1 ? '#' | '.')} ${(currentBeaconNumber >= 6 ? '#' | '.')} . ${(currentPersonalityNumber >= 5 ? '#' | '.')} ${(currentBeaconNumber >= 2 ? '#' | '.')} ${(currentBeaconNumber >= 7 ? '#' | '.')} . ${(currentPersonalityNumber >= 4 ? '#' | '.')} ${(currentBeaconNumber >= 3 ? '#' | '.')} . . ${(currentPersonalityNumber >= 8 ? '#' | '.')} ${(currentPersonalityNumber >= 3 ? '#' | '.')} ${(currentBeaconNumber >= 4 ? '#' | '.')} . . ${(currentPersonalityNumber >= 7 ? '#' | '.')} ${(currentPersonalityNumber >= 2 ? '#' | '.')} ${(currentBeaconNumber >= 5 ? '#' | '.')} . . ${(currentPersonalityNumber >= 6 ? '#' | '.')} ${(currentPersonalityNumber >= 1 ? '#' | '.')} `; basic.showLeds(displayTemp)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        if (do_random == 1) {
            basic.showIcon(IconNames.SmallDiamond)
        } else {
            basic.showIcon(IconNames.Diamond)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    do_random = 0
    shakeNum = 0
    currentPersonalityNumber += 1
    if (currentPersonalityNumber > 8) {
        currentPersonalityNumber = 1
    }
    createPersonalityNumber(currentPersonalityNumber)
})
input.onGesture(Gesture.Shake, function () {
    do_random = 0
    shakeNum = shakeNum % 5
    basic.showLeds(`
        . . # # .
        . # . . #
        . . # . .
        # . . # .
        . # # . .
        `)
    for (let index = 0; index < 1; index++) {
        basic.pause(pauseValueShort)
    }
    basic.showNumber(shakeNum)
    if (shakeNum == 0) {
        display()
    }
    if (shakeNum == 1) {
        basic.showIcon(IconNames.Asleep)
        beautifyNum(0)
        basic.showString("The Force")
        createBeacon()
        countdown(23)
    }
    if (shakeNum == 2) {
        basic.showIcon(IconNames.Surprised)
        beautifyNum(0)
        basic.showString("With You")
        randomPersonality(currentPersonalityNumber)
        countdown(23)
    }
    if (shakeNum == 3) {
        basic.showIcon(IconNames.Happy)
        beautifyNum(0)
        basic.showString("Always")
        randomPersonality(currentPersonalityNumber)
        countdown(23)
    }
    if (shakeNum == 4) {
        basic.showIcon(IconNames.Heart)
        beautifyNum(0)
        basic.showString("Will be")
        randomPersonality(currentPersonalityNumber)
    }
    shakeNum += 1
})
function createPersonalityNumber (num: number) {
    basic.showIcon(IconNames.House)
    basic.showNumber(num)
    currentPersonalityNumber = num
    bluetooth.activateSwgeDroidBeaconDropDown(
        num
    )
basic.showIcon(IconNames.Yes)
    display()
}
function randomBeacon (currentBeaconNumber: number) {
    randomWithInput(maxNumBeacons)
    currentBeaconTemp = varRandom
    if (currentBeaconTemp == currentBeaconNumber) {
        randomBeacon(currentBeaconNumber)
    } else {
        currentBeaconNumber = currentBeaconTemp
        createBeaconNumber(currentBeaconNumber)
    }
}
function createPersonality () {
    basic.showIcon(IconNames.House)
    basic.showNumber(currentPersonalityNumber)
    bluetooth.activateSwgeDroidBeaconDropDown(
        currentPersonalityNumber
    )
basic.showIcon(IconNames.Yes)
    display()
}
function randomWithInputSimple (num: number) {
    varRandom = 1
    for (let index = 0; index < 4; index++) {
        varRandom = randint(varRandom, varRandom * 3339333)
    }
    varRandom = varRandom * 1e+99 % 10
    varRandom = varRandom % num + 1
    basic.showIcon(IconNames.EigthNote)
    basic.showString("" + (varRandom))
}
function randomPersonality (currentPersonalityNumber: number) {
    randomWithInput(maxNumPersonalities)
    currentPersonalityTemp = varRandom
    if (currentPersonalityTemp == currentPersonalityNumber) {
        randomPersonality(currentPersonalityNumber)
    } else {
        currentPersonalityNumber = currentPersonalityTemp
        createPersonalityNumber(currentPersonalityNumber)
    }
}
function displayInputs () {
    basic.showIcon(IconNames.Butterfly)
    basic.showString("Compas :")
    basic.showString("" + (input.compassHeading()))
    basic.showString("Light lvl :")
    basic.showString("" + (input.lightLevel()))
    basic.showString("Acc X")
    basic.showString("" + (input.acceleration(Dimension.X)))
    basic.showString("Acc Y")
    basic.showString("" + (input.acceleration(Dimension.Y)))
    basic.showString("Acc Z")
    basic.showString("" + (input.acceleration(Dimension.Z)))
    basic.showString("Acc Frc")
    basic.showString("" + (input.acceleration(Dimension.Strength)))
    basic.showString("rdm:")
    basic.showString("" + (varRandom))
    basic.showIcon(IconNames.Sword)
}
let countdownTemp = 0
let pauseValueShort = 0
let pauseValue = 0
let maxNumPersonalities = 0
let maxNumBeacons = 0
let varRandom = 0
let currentPersonalityTemp = 0
let currentBeaconNumber = 0
let currentBeaconTemp = 0
let shakeNum = 0
let do_random = 0
let currentPersonalityNumber = 0
basic.showIcon(IconNames.Butterfly)
let beaconDelaySeconds = 33
let personalityDelaySeconds = 23
do_random = 0
shakeNum = 0
currentPersonalityNumber = 1
currentBeaconTemp = 1
currentBeaconNumber = 1
currentPersonalityTemp = 1
let currentRandom = 1
varRandom = 1
maxNumBeacons = 7
maxNumPersonalities = 8
pauseValue = 1000
pauseValueShort = 333
display()
basic.forever(function () {
    if (do_random == 1) {
        randomBeacon(currentBeaconNumber)
        basic.showIcon(IconNames.SmallSquare)
        countdown(beaconDelaySeconds)
        if (do_random == 1) {
            randomPersonality(currentPersonalityNumber)
            countdown(personalityDelaySeconds)
            basic.showIcon(IconNames.SmallSquare)
        }
        if (do_random == 1) {
            randomPersonality(currentPersonalityNumber)
            countdown(personalityDelaySeconds)
            basic.showIcon(IconNames.SmallSquare)
        }
        if (do_random == 1) {
            randomPersonality(currentPersonalityNumber)
            countdown(personalityDelaySeconds)
            basic.showIcon(IconNames.SmallSquare)
            randomPersonality(currentPersonalityNumber)
            countdown(personalityDelaySeconds)
        }
        basic.showIcon(IconNames.Square)
        display()
    }
})
