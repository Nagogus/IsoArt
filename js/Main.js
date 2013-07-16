require(['Config', 'GameCanvas', 'Field', 'Drawer', 'objects/Cube'], function(Config, GameCanvas, Field, Drawer, Cube) {
    "use strict";

    var canvas = new GameCanvas('main-canvas'),
        field = new Field(canvas, 10, 10, 50),
        gameDrawer = new Drawer(canvas.ctx),
        testCube;

    canvas.showDebugGrid();
    canvas.toIsometric(Config.ISOMETRIC_X_SCALE_FACTOR, Config.ISOMETRIC_Y_SCALE_FACTOR);
    canvas.showDebugGrid();

    field.draw();

    canvas.to2d();

    var a = 0.5;
    document.body.onclick = function(event) {
        a = a + 0.1;
        canvas.ctx.clearRect (0,0,800,800);
        canvas.toIsometric(1, a);
        field.draw();
        canvas.to2d();
    };


    /*testCube = field.addObject(new Cube(30));
    testCube.show();*/
});



