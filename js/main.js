require(['Tiles', 'Drawer', 'gObjects/Cube'], function(Tiles, Drawer, Cube) {
    var game = new Tiles(),
        gameDrawer = new Drawer(game.ctx);
    game.toIsometric();
    game.drawBackground();
    gameDrawer.fillObject(Cube);
    game.to2D();
});



