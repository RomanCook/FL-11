function addOne(a) {
    return a + 1;
}
function pipe(a) {
    let sum = a;
    for (let i = 1; i < arguments.length; i++) {
    sum = arguments[i](sum);    
    }
    return sum;
}
pipe(1, addOne, addOne);