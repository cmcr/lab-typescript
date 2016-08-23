var _this = this;
//Chapter 1. Introducing TypeScript
console.log("Chapter 1. Introducing TypeScript");
//Type aliases
console.log("Type aliases");
var x = 1;
function test() {
    return 648800;
}
console.log(test());
//Functions
console.log("Functions");
function greet_uno(name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
}
console.log(greet_uno("Pepe uno"));
// anonymous function
var greet_dos = function (name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
};
console.log(greet_dos("Pepe dos"));
var greet_tres = function (name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi! my name is " + _this.fullname;
    }
};
this.fullname = "Pepe fullname";
console.log(greet_tres(undefined));
var greet_cuatro = function (name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
};
function sume(a, b, callback) {
    callback(a + b);
}
//console.log(sume(2, 2, callback(result)));
//Classes
console.log("Classes");
var Character = (function () {
    function Character(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    Character.prototype.greet = function (name) {
        if (name) {
            return "Hi! " + name + "! my name is " + this.fullname;
        }
        else {
            return "Hi! my name is " + this.fullname;
        }
    };
    return Character;
})();
var rol = new Character("Pepe", "Sandia");
var msg = rol.greet();
console.log(msg);
var msg1 = rol.greet("Dr. Pepe");
console.log(msg1);
//Interfaces
console.log("Interfaces");
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.log = function (arg) {
        if (typeof console.log === "function") {
            console.log(arg);
        }
        else {
            alert(arg);
        }
    };
    return Logger;
})();
var l = new Logger();
l.log("Class Logger implement a interface");
var user = {
    name: "",
    password: "" // error property password is missing
};
user.name = "Pedro";
user.password = "secreto";
l.log(user);
//Namespaces
console.log("Namespaces");
var Geometry;
(function (Geometry) {
    var Vector2d = (function () {
        function Vector2d() {
        }
        return Vector2d;
    })();
    Geometry.Vector2d = Vector2d;
    var Vector3d = (function () {
        function Vector3d() {
        }
        return Vector3d;
    })();
    Geometry.Vector3d = Vector3d;
})(Geometry || (Geometry = {}));
var vector2dInstance = new Geometry.Vector2d();
var vector3dInstance = new Geometry.Vector3d();
//Putting everything together
console.log("Putting everything together");
var Geometry;
(function (Geometry) {
    var Vector2D = (function () {
        function Vector2D(x, y) {
            this._x = x;
            this._y = y;
        }
        Vector2D.prototype.toArray = function (callback) {
            callback([this._x, this._y]);
        };
        Vector2D.prototype.length = function () {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        };
        Vector2D.prototype.normalize = function () {
            var len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        };
        return Vector2D;
    })();
    Geometry.Vector2D = Vector2D;
})(Geometry || (Geometry = {}));
var vector = new Geometry.Vector2D(2, 3);
vector.normalize();
vector.toArray(function (vectorAsArray) {
    console.log(' x :' + vectorAsArray[0] + ' y : ' + vectorAsArray[1]);
});
//# sourceMappingURL=ch1.js.map