function receivesAFunction (callbackFunc) {
    callbackFunc();
}

function returnsANamedFunction () {
    return function named() {};
}

function returnsAnAnonymousFunction () {
    return function() {};
}