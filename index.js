
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0 };

    this.getDefaultLocation = function() {
        return defaultLocation;
    };
    
    this.draw = function() {
      console.log('draw');
    };

    Object.defineProperty(this, 'defaulyLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
            throw new Error('Invalid Location.');

        defaultLocation = value;
      }
    });
}

const another = new Circle(10);
Circle.defaultLocation = 1;
Circle.draw();
