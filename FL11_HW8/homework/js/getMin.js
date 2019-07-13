function getMin (...rest) {
    let minArgument = arguments[0];
    for (let i = 1; i < rest.length; i++) {
        if (arguments[i] < minArgument) {
            minArgument = arguments[i];
        }
    }
    return minArgument;
}
getMin (3, 0, -3);