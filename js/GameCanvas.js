/**
 * Created with JetBrains WebStorm.
 * User: Ruben Nagoga
 * Date: 7/16/13
 * Time: 4:21 PM
 */
define('GameCanvas', ['Config'], function(Config) {

    function GameCanvas(id) {

        var _c = document.getElementById(id),

            _ctx = _c.getContext("2d");

        function init() {}

        this.__defineGetter__('c', function() {
            return _c;
        });

        this.__defineGetter__('ctx', function() {
            return _ctx;
        });

        this.__defineGetter__('diagonal', function() {
            return Math.pow(Math.pow(this.c.height, 2) + Math.pow(this.c.width, 2), 1/2);
        });

        init();
    }

    GameCanvas.prototype.showDebugGrid = function() {
        var ctx = this.ctx;
        ctx.strokeStyle = '#ccc';
        ctx.beginPath();
        ctx.moveTo(this.c.width/2, 0);
        ctx.lineTo(this.c.width/2, this.c.height);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, this.c.height/2);
        ctx.lineTo(this.c.width, this.c.height/2);
        ctx.closePath();
        ctx.stroke();
    };

    GameCanvas.prototype.toIsometric = function(xScale, yScale) {
        var ctx = this.ctx,
            x = (this.c.width * xScale) / 2,
            y = (this.c.height / 2) - (this.diagonal * yScale) / 2;
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(xScale, yScale);
        ctx.rotate(45 * Math.PI / 180);
    };

    GameCanvas.prototype.to2d = function() {
        this.ctx.restore();
    };

    return GameCanvas;
});
