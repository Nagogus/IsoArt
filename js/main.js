/*require(["Tiles"], function(Tiles) {

});*/

/**
 * Created with JetBrains WebStorm.
 * User: Ruben Nagoga
 * Date: 6/10/13
 * Time: 5:20 PM
 */

var Tiles = function () {
    var mainCanvasId = 'main-canvas',
        c = document.getElementById(mainCanvasId),
        ctx = c.getContext("2d"),
        tiles = [];

    function fillTestTiles(tiles) {
        var i, j, tile;
        for (i = 0; i < 10; ++i) {
            tiles.push([]);
            for (j = 0; j < 10; ++j) {
                tile = { x: j * 50, y: i * 50 };
                tiles[i].push(tile);
            }
        }
    }

    fillTestTiles(tiles);

    this.ctx = ctx;

    this.tiles = tiles;
};

Tiles.TILE_SIZE = 50;

Tiles.prototype.toIsometric = function() {
    var ctx = this.ctx;
    ctx.save();

    // change projection to isometric view
    ctx.translate(400, 200);
    ctx.scale(1, 0.5);
    ctx.rotate(45 * Math.PI / 180);
};

Tiles.prototype.to2D = function() {
    this.ctx.restore();
};

Tiles.prototype.drawBackground = function () {
    var ctx = this.ctx,
        tiles = this.tiles,
        line,
        tile,
        x, y;

    ctx.fillStyle = '#007B0C';

    for (y = 0; y < tiles.length; ++y) {
        line = tiles[y];
        for (x = 0; x < line.length; ++x) {
            tile = line[x];
            ctx.strokeRect(tile.x, tile.y, Tiles.TILE_SIZE, Tiles.TILE_SIZE);
            ctx.fillRect(tile.x, tile.y, Tiles.TILE_SIZE, Tiles.TILE_SIZE);
        }
    }


};

Tiles.prototype.drawObject = function(gObject) {
    gObject.call(this);
};

Tiles.gObjects = {};

Tiles.gObjects.cube = function () {
    var ctx = this.ctx;
    ctx.fillStyle = '#f00';
    ctx.strokeStyle = '#f00';
    ctx.strokeRect(100, 100, 50, 50);

    ctx.beginPath();
    ctx.lineTo(100, 100);
    ctx.lineTo(150, 100);
    ctx.lineTo(150, 150);
    ctx.lineTo(100, 150);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(75, 75);
    ctx.lineTo(75, 125);
    ctx.lineTo(100, 150);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.lineTo(75, 125);
    ctx.lineTo(125, 125);
    ctx.lineTo(150, 150);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(125, 125);
    ctx.lineTo(125, 75);
    ctx.lineTo(150, 100);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(150, 100);
    ctx.lineTo(125, 75);
    ctx.lineTo(75, 75);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(75, 75);
    ctx.lineTo(125, 75);
    ctx.lineTo(125, 125);
    ctx.lineTo(75, 125);
    ctx.lineTo(75, 75);
    ctx.closePath();
    ctx.stroke();
};

(function () {
    var game = new Tiles();
    //game.toIsometric();
    game.drawBackground();
    game.drawObject(Tiles.gObjects.cube);
    game.to2D();
})();



