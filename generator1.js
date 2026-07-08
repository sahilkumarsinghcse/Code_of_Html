function* greet() {
    console.log("Hello");
    yield;

    console.log("sahil");
    yield;

    console.log("Welcome");
    yield;

    console.log("Bye");
}

let g = greet();

g.next();
g.next();
g.next();
g.next();