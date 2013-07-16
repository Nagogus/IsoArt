/**
 * Created with JetBrains WebStorm.
 * User: Ruben Nagoga
 * Date: 6/25/13
 * Time: 6:40 PM
 */
define(function() {

    function Drawer(ctx) {

        var _drawingList = [],
            _currentObject;

        function init() {

        }

        function drawObject(gObject) {
            _currentObject = gObject;
            _currentObject.draw.call(this);
        }

        function fillObject() {
            _drawingList.push(ctx.fill);
        }

        function strokeObject() {
            _drawingList.push(ctx.stroke);
        }

        function render() {
            if(_drawingList.length > 0) {
                _drawingList.forEach(function(func) {
                    func.call(ctx);
                });
            }
        }

        init();

        this.drawObject = drawObject;

        this.fillObject = fillObject;

        this.strokeObject = strokeObject;

        this.render = render;

        this.ctx = ctx;
    }

    return Drawer;

});
