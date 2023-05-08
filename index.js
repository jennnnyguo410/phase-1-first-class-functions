function receivesAFunction(cb) {
    console.log("Hello World")
    cb()
}

function returnsANamedFunction() {
    return print = print => console.log(print)
}

function returnsAnAnonymousFunction() {
    return function () {
        return 2 + 2
    }
}