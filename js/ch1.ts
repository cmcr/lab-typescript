//Chapter 1. Introducing TypeScript
console.log("Chapter 1. Introducing TypeScript");
//Type aliases
console.log("Type aliases");
var x: number = 1;
type PrimitiveArray = Array<string|number|boolean>;
type MyNumber = number;
//type NgScope = ng.IScope;
type Callback = () => void;

function test(): number {
    return 648800;
}
console.log(test());

//Functions
console.log("Functions")

function greet_uno(name?: string): string {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
}
console.log(greet_uno("Pepe uno"));

// anonymous function
var greet_dos = function(name?: string): string {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
}
console.log(greet_dos("Pepe dos"));

var greet_tres = (name: string): string => {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi! my name is " + this.fullname;
    }
};
this.fullname = "Pepe fullname";
console.log(greet_tres(undefined));

var greet_cuatro: (name: string) => string = function(name: string): string {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
};

function sume(a: number, b: number, callback: (result: number) => void) {
    callback(a + b);
}
//console.log(sume(2, 2, callback(result)));

//Classes
console.log("Classes");
class Character {
    fullname: string;
    constructor(firstname: string, lastname: string) {
        this.fullname = firstname + " " + lastname;
    }
    greet(name?: string) {
        if (name) {
            return "Hi! " + name + "! my name is " + this.fullname;
        }
        else {
            return "Hi! my name is " + this.fullname;
        }
    }
}

var rol = new Character("Pepe", "Sandia");
var msg = rol.greet();
console.log(msg);

var msg1 = rol.greet("Dr. Pepe");
console.log(msg1); 

//Interfaces
console.log("Interfaces");
interface LoggerInterface {
    log(arg: any): void;
}

class Logger implements LoggerInterface {
    log(arg) {
        if (typeof console.log === "function") {
            console.log(arg);
        }
        else {
            alert(arg);
        }
    }
}
var l = new Logger();
l.log("Class Logger implement a interface");

interface UserInterface {
    name: string;
    password: string;
}

var user: UserInterface = {
    name: "",
    password: "" // error property password is missing
};
user.name = "Pedro";
user.password = "secreto";
l.log(user);

//Namespaces
console.log("Namespaces");

namespace Geometry {

    interface VectorInterface {
        /* ... */
    }
    export interface Vector2dInterface {
        /* ... */
    }
    export interface Vector3dInterface {
        /* ... */
    }
    export class Vector2d implements VectorInterface, Vector2dInterface {
        /* ... */
    }
    export class Vector3d implements VectorInterface, Vector3dInterface {
        /* ... */
    }
}

var vector2dInstance: Geometry.Vector2dInterface = new Geometry.Vector2d();
var vector3dInstance: Geometry.Vector3dInterface = new Geometry.Vector3d();

//Putting everything together
console.log("Putting everything together");

module Geometry {
    export interface Vector2DInterface {
        toArray(callback: (x: number[]) => void): void;
        length(): number;
        normalize();
    }
    export class Vector2D implements Vector2DInterface {
        private _x: number;
        private _y: number;
        constructor(x: number, y: number) {
            this._x = x;
            this._y = y;
        }
        toArray(callback: (x: number[]) => void): void {
            callback([this._x, this._y]);
        }
        length(): number {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        }
        normalize() {
            var len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        }
    }
}

var vector: Geometry.Vector2DInterface = new Geometry.Vector2D(2, 3);
vector.normalize();
vector.toArray(function(vectorAsArray: number[]) {
    console.log(' x :' + vectorAsArray[0] + ' y : ' + vectorAsArray[1]);
});


