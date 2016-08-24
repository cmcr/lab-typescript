var _this = this;
//Chapter 1. Introducing TypeScript
console.log("Chapter 1. Introducing TypeScript");
//1.1 The TypeScript architecture
//1.2 TypeScript language features
//1.3 Types
//1.4 Variables, basic types, and operators
console.log("1.4 Variables, basic types, and operators");
//Boolean
var isDone = false;
//Number
var height = 8;
//String
var name = "bob";
name = 'smith';
//Array
var list = [1, 2, 3];
var list = [1, 2, 3];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var listAny = [1, true, "free"];
listAny[1] = 100;
//void
function warnUser() {
    alert("This is my warning message");
}
//1.5 Var, let, and const
console.log("1.5 Var, let, and const");
function varTest() {
    var x = 1;
    if (true) {
        var x = 2; // same variable!
        console.log(x); // 2
    }
    console.log(x); // 2
}
function letTest() {
    var x = 1;
    if (true) {
        var x_1 = 2; // different variable
        console.log(x_1); // 2
    }
    console.log(x); // 1
}
function constTest() {
    var x = "CONSTANTE";
    if (true) {
        var x_2 = "CONSTANTE 2"; // different variable
        console.log(x_2); // CONSTANTE 2
    }
    console.log(x); // CONSTANTE
}
varTest();
letTest();
constTest();
//1.6 Union types
console.log("1.6 Union types");
var path;
path = '/temp/log.xml';
path = ['/temp/log.xml', '/temp/errors.xml'];
//path = 1; // Error
//1.7 Type guards
console.log("1.7 Type guards");
var x = {};
if (typeof x === 'string') {
}
// x is still any
//x.foo(); // OK
//1.8 Type aliases
console.log("1.8 Type aliases");
var sq = 15;
console.log(sq + " typeof signo");
//1.9 Ambient declarations
console.log("1.9 Ambient declarations");
//customConsole.log("A log entry!"); // ok but not
//1.10 Arithmetic operators
//1.11 Comparison operators
//1.12 Logical operators
//1.13 Bitwise operators
//1.14 Assignment operators
//1.15 Flow control statements
//1.16 Functions
console.log("1.16 Functions");
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