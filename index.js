
function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = {x: 0, y: 0 };

    this.computeOptimumLocation = function(factor) {
        // ...
    }
    
    this.draw = function() {
        this.computeOptimumLocation();

        console.log('draw');
    };
}

const another = new Circle(10);
Circle.draw();
