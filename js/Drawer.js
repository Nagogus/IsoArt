/**
 * Created with JetBrains WebStorm.
 * User: Ruben Nagoga
 * Date: 6/25/13
 * Time: 6:40 PM
 */
define(function() {

    function Drawer(ctx) {

        var drawingList = [];

        function init() {

        }

        function fillObject(gObject) {
            drawingList.length = 0;
            drawingList.push(ctx.fill);
            drawingList.push(ctx.stroke);
            gObject.draw.call(this);
        }

        function draw() {
            if(drawingList.length > 0) {
                drawingList.forEach(function(func, index) {
                    func.call(ctx);
                });
            }
        }

        init();

        this.fillObject = fillObject;

        this.draw = draw;

        this.ctx = ctx;
    }

    return Drawer;

});
