require(['Tiles', 'Drawer', 'gObjects/Cube'], function(Tiles, Drawer, Cube) {
    var game = new Tiles(),
        gameDrawer = new Drawer(game.ctx);

    game.showDebugGrid();
    game.toIsometric();
    game.drawBackground();

    gameDrawer.fillObject();
    gameDrawer.strokeObject();
    gameDrawer.drawObject(Cube);

    game.to2D();

    /*var canvas = new GameCanvas(),
        field = new Field(10, 10, 50),
        gameDrawer = new Drawer(canvas.ctx),
        testCube;

    canvas.showDebugGrid();
    canvas.toIsometric();

    field.drawField();

    testCube = field.addObject(new Cube(30));
    testCube.show();
     */
});



