namespace SpriteKind {
    export const Obstacle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Obstacle, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, duck)
    if (duck.ay == 0) {
        duck.setImage(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `)
        duck.vy = -160
        duck.ay = gravity
    }
})
sprites.onDestroyed(SpriteKind.Obstacle, function (sprite) {
    info.changeScoreBy(1)
})
function createCloud () {
    cloud = sprites.createProjectileFromSide(clouds[randint(0, clouds.length - 1)], -30, 0)
    cloud.bottom = randint(30, 55)
    cloud.z = -2
}
function setupFrames () {
    birdFrames = [
    img`
        . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `
    ]
    animation.runImageAnimation(
    bird,
    birdFrames,
    40,
    true
    )
    duckFrames = [
    img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,
    img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . b b d d d 5 5 5 5 5 5 5 b . . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        c b 5 5 b c d d 5 5 5 5 5 5 b . 
        b b c c c d d d 5 5 5 5 5 d b . 
        . . . . c c d d d 5 5 5 b b . . 
        . . . . . . c c c c c b b . . . 
        `,
    img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 b c 5 5 d 4 c . . 
        . b b b b 5 5 5 b f d d 4 4 4 b 
        . b d 5 b 5 5 b c b 4 4 4 4 b . 
        . . b 5 5 b 5 5 5 4 4 4 4 b . . 
        . . b d 5 5 b 5 5 5 5 5 5 b . . 
        . b d b 5 5 5 d 5 5 5 5 5 5 b . 
        b d d c d 5 5 b 5 5 5 5 5 5 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,
    img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,
    img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `
    ]
    obstacles = [
    img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `,
    img`
        ...fffffff.........ccc..
        ...ff22ccff.......cc4f..
        ....fffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `,
    img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `,
    img`
        ....ffffff..............
        ....ff2cccf.........cf..
        .....ff2cccfff.....c4f..
        ....cc22222222ccccc44f..
        ...c9b244422222ccc442f..
        ..c99944222222222242fc..
        .c2b9912222222222222fcc.
        c222b1111b22222222cc22cf
        f2222221992222ccccccc22f
        .f22222222222c222cffffff
        ..ff2222222c442222ff....
        ....fffffffff442222fc...
        .........f2cff442222c...
        .........fccfffc2222c...
        ..........fc2ffffffff...
        ...........c2fff........
        `,
    img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c9999b222222222222fc..
        .c2b991119222222222c22c.
        c2222b11992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222444222f.....
        ..ff2222222cf444222f....
        ....ffffffffff444222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `,
    img`
        ...fffffff.........ccc..
        ...ff22ccff.......cc4f..
        ....fffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `
    ]
    animation.runImageAnimation(
    duck,
    duckFrames,
    50,
    true
    )
    clouds = [img`
        .........bbbb...........
        .......bb1111bb.........
        ......bb111111bbbbb.....
        ......b1111111ddd11b....
        ......b11111111d1111b...
        ...bbbd11111111d1111b...
        ..b11111111111111111bb..
        .b11111111111111111d11b.
        .b111d11111111111111111b
        cdd1d111111111111111111c
        cdddd11111111111111111dc
        cddbd11111d11111dd111dc.
        .cbbdd111dddd11ddbdddcc.
        .ccbbdddddbdddddddbcc...
        ...cccdddbbbdddddcc.....
        ......ccccccccccc.......
        `, img`
        .........bbbb...........
        .......bb1111bb.........
        ......bb111111bbbbb.....
        ......b1111111ddd11b....
        ......b11111111d1111b...
        ...bbbd11111111d1111b...
        ..b11111111111111111bb..
        .b11111111111111111d11b.
        .b111d11111111111111111b
        cdd1d111111111111111111c
        cdddd11111111111111111dc
        cddbd11111d11111dd111dc.
        .cbbdd111dddd11ddbdddcc.
        .ccbbdddddbdddddddbcc...
        ...cccdddbbbdddddcc.....
        ......ccccccccccc.......
        `, img`
        .........bbbb...........
        .......bb1111bb.........
        ......bb111111bbbbb.....
        ......b1111111ddd11b....
        ......b11111111d1111b...
        ...bbbd11111111d1111b...
        ..b11111111111111111bb..
        .b11111111111111111d11b.
        .b111d11111111111111111b
        cdd1d111111111111111111c
        cdddd11111111111111111dc
        cddbd11111d11111dd111dc.
        .cbbdd111dddd11ddbdddcc.
        .ccbbdddddbdddddddbcc...
        ...cccdddbbbdddddcc.....
        ......ccccccccccc.......
        `]
    clouds = [
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 
        . . . . . . . . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 
        . . . . . . . . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 
        . . . . . . . . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 
        . . . . . . . . 
        `
    ]
}
function createPlane () {
    let Planes: Image[] = []
    Plane = sprites.createProjectileFromSide(Planes[randint(0, Planes.length - 1)], -50, 0)
    Plane.bottom = 100
    Plane.z = -1
}
let projectile: Sprite = null
let obstacleImage: Image = null
let Plane: Sprite = null
let obstacles: Image[] = []
let duckFrames: Image[] = []
let birdFrames: Image[] = []
let clouds: Image[] = []
let cloud: Sprite = null
let bird: Sprite = null
let gravity = 0
let duck: Sprite = null
scene.setBackgroundColor(9)
duck = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
gravity = 400
duck.ay = gravity
duck.x = 20
bird = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
bird.setPosition(160, 20)
bird.setVelocity(-120, 0)
setupFrames()
game.onUpdate(function () {
    if (bird.x < 0) {
        bird.setPosition(randint(160, 240), randint(20, 60))
    }
})
game.onUpdate(function () {
    if (duck.bottom > 105) {
        duck.bottom = 105
        duck.vy = 0
        duck.ay = 0
        animation.runImageAnimation(
        duck,
        duckFrames,
        50,
        true
        )
    }
})
game.onUpdateInterval(2000, function () {
    obstacleImage = obstacles[randint(0, obstacles.length - 1)]
    projectile = sprites.createProjectileFromSide(obstacleImage, -100, 0)
    projectile.bottom = 105
    projectile.setKind(SpriteKind.Obstacle)
})
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(40)) {
        createPlane()
    }
})
forever(function () {
    if (Math.percentChance(60)) {
        createPlane()
        if (Math.percentChance(50)) {
            pause(randint(150, 300))
            createPlane()
        }
    }
    pause(1500)
})
