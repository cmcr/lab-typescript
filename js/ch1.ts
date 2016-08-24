//Chapter 1. Introducing TypeScript
console.log("Chapter 1. Introducing TypeScript");
//1.1 The TypeScript architecture
//1.2 TypeScript language features
//1.3 Types
//1.4 Variables, basic types, and operators
console.log("1.4 Variables, basic types, and operators")
//Boolean
var isDone: boolean = false;
//Number
var height: number = 8;
//String
var name: string = "bob";
name = 'smith';
//Array
var list: number[] = [1, 2, 3];
var list: Array<number> = [1, 2, 3];
//Enum
enum Color { Red, Green, Blue };
var c: Color = Color.Green;
//Any
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var listAny: any[] = [1, true, "free"];
listAny[1] = 100;
//void
function warnUser(): void {
    alert("This is my warning message");
}

//1.5 Var, let, and const
console.log("1.5 Var, let, and const")

function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

function constTest() {
    let x = "CONSTANTE";
    if (true) {
        const x = "CONSTANTE 2";  // different variable
        console.log(x);  // CONSTANTE 2
    }
    console.log(x);  // CONSTANTE
}
varTest(); letTest(); constTest();
//1.6 Union types
console.log("1.6 Union types")
var path: string[]|string;
path = '/temp/log.xml';
path = ['/temp/log.xml', '/temp/errors.xml'];
//path = 1; // Error

//1.7 Type guards
console.log("1.7 Type guards")
var x: any = { /* ... */ };
if (typeof x === 'string') {
    //console.log(x.splice(3, 1)); // Error, 'splice' does not exist on 'string'
}
// x is still any
//x.foo(); // OK

//1.8 Type aliases
console.log("1.8 Type aliases");

type PrimitiveArray = Array<string|number|boolean>;
type MyNumber = number;
//type NgScope = ng.IScope;
type Callback = () => void;
type signo = number;
var sq = 15;
console.log(sq + " typeof signo");

//1.9 Ambient declarations
console.log("1.9 Ambient declarations")

interface ICustomConsole {
    log(arg: string): void;
}
declare var customConsole: ICustomConsole;
//customConsole.log("A log entry!"); // ok but not

//1.10 Arithmetic operators
//1.11 Comparison operators
//1.12 Logical operators
//1.13 Bitwise operators
//1.14 Assignment operators
//1.15 Flow control statements
//1.16 Functions
console.log("1.16 Functions")

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


