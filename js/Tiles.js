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

            tiles = [],

            fieldSize = Tiles.TILES_AMOUNT * Tiles.TILE_SIZE,

            fieldDiagonal = fieldSize * Math.pow(2, 1/2);

        function fillTestTiles(tiles) {
            var i, j, tile;
            for (i = 0; i < Tiles.TILES_AMOUNT; ++i) {
                tiles.push([]);
                for (j = 0; j < Tiles.TILES_AMOUNT; ++j) {
                    tile = { x: j * Tiles.TILE_SIZE, y: i * Tiles.TILE_SIZE };
                    tiles[i].push(tile);
                }
            }
        }

        fillTestTiles(tiles);

        this.c = c;

        this.ctx = ctx;

        this.tiles = tiles;

        this.fieldDiagonal = fieldDiagonal;
    }

    Tiles.TILE_SIZE = 50;
    Tiles.TILES_AMOUNT = 10;
    Tiles.ISOMETRIC_X_SCALE_FACTOR = 1;
    Tiles.ISOMETRIC_Y_SCALE_FACTOR = 0.8;

    Tiles.prototype.showDebugGrid = function() {
        var ctx = this.ctx;
        ctx.strokeStyle = '#ccc';
        ctx.beginPath();
        ctx.moveTo(this.c.width/2, 0);
        ctx.lineTo(this.c.width/2, this.c.height);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,this.c.height/2);
        ctx.lineTo(this.c.width, this.c.height/2);
        ctx.closePath();
        ctx.stroke();
    };

    Tiles.prototype.toIsometric = function() {
        var ctx = this.ctx,
            //Translate values to position field in center
            translateX = this.c.width*Tiles.ISOMETRIC_X_SCALE_FACTOR / 2,
            translateY = (this.c.height - this.fieldDiagonal*Tiles.ISOMETRIC_Y_SCALE_FACTOR)/2;

        ctx.save();

        // change projection to isometric view
        ctx.translate(translateX, translateY);
        ctx.translate(0,0);
        ctx.scale(Tiles.ISOMETRIC_X_SCALE_FACTOR, Tiles.ISOMETRIC_Y_SCALE_FACTOR);
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
        ctx.strokeStyle = '#000000';

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