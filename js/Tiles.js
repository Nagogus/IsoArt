/**
 * Created with JetBrains WebStorm.
 * User: Ruben Nagoga
 * Date: 6/25/13
 * Time: 5:55 PM
 */
define([], function () {
    function Tiles() {
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
    }

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

    return Tiles;
});