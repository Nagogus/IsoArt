/**
 * Created with JetBrains WebStorm.
 * User: Ruben Nagoga
 * Date: 7/16/13
 * Time: 4:49 PM
 */
define('objects/Tile', [], function() {
    function Tile(canvas, options) {

        var _x = options.x === undefined ? 0 : options.x,

            _y = options.y === undefined ? 0 : options.y,

            _size;

        function init() {

            if(typeof options.size === 'undefined') {
                throw new Error('Tile size not defined');
            }

            _size = options.size;

        }

        this.__defineGetter__('canvas', function() {
            return canvas;
        });

        this.__defineGetter__('x', function() {
            return _x;
        });

        this.__defineGetter__('y', function() {
            return _y;
        });

        this.__defineGetter__('size', function() {
            return _size;
        });


        init();
    }

    Tile.prototype.stroke = function() {
        this.canvas.ctx.strokeRect(this.x, this.y, this.size, this.size);
    };

    Tile.prototype.fill = function() {
        this.canvas.ctx.fillRect(this.x, this.y, this.size, this.size);
    };

    return Tile;
});
