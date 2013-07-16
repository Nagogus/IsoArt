/**
 * Created with JetBrains WebStorm.
 * User: Ruben Nagoga
 * Date: 7/16/13
 * Time: 4:29 PM
 */
define('Field', ['Config', 'objects/Tile'], function(Config, Tile) {

    function Field(canvas, options) {

        var _tilesX = options.tilesX === undefined ? 10 : options.tilesX,

            _tilesY = options.tilesY === undefined ? 10 : options.tilesY,

            _tileSize = options.tileSize === undefined ? 50 : options.tileSize,

            _tiles = [];

        function init() {

        }

        this.__defineGetter__('canvas', function() {
            return canvas;
        });

        this.__defineGetter__('tilesX', function() {
            return _tilesX;
        });

        this.__defineGetter__('tilesY', function() {
            return _tilesY;
        });

        this.__defineGetter__('tileSize', function() {
            return _tileSize;
        });

        this.__defineGetter__('tiles', function() {
            return _tiles;
        });

        this.__defineGetter__('fieldDiagonal', function() {
            //return Math.pow((Math.pow(_tileSize * _tilesX, 2), Math.pow(_tileSize * _tilesY, 2)), 1/2);
            return Math.pow((_tileSize * _tilesX), 1/2);
        });

        init();
    }

    Field.prototype.draw = function() {
        var ctx = this.canvas.ctx,
            tileSize = this.tileSize,
            tile,
            x, y;

        ctx.fillStyle = '#007B0C';
        ctx.strokeStyle = '#000000';

        for (y = 0; y < this.tilesY; ++y) {
            for (x = 0; x < this.tilesX; ++x) {

                tile = new Tile(this.canvas, {x: (x * tileSize) + (this.canvas.c.width - (this.tileSize * this.tilesX)*Config.ISOMETRIC_X_SCALE_FACTOR)/2,
                    y: (y * tileSize) + (this.canvas.c.height - this.tileSize * this.tilesY)/2,
                    size: tileSize});

                tile.stroke();
                tile.fill();
                this.tiles.push(tile);
            }
        }
    };

    return Field;
});
