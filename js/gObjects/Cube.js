/**
 * Created with JetBrains WebStorm.
 * User: Ruben Nagoga
 * Date: 6/25/13
 * Time: 6:44 PM
 */
define(function() {
    function draw() {
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
    }
    return {
        draw: draw
    }
});
