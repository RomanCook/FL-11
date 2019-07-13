function reverseNumber (a) {
    let reverseNum = '';
    let a_string = a + '';
    for (let i = a_string.length - 1; i >= 0; i--){
        reverseNum += a_string[i];
    }
    reverseNum = parseInt(reverseNum)
    if (a < 0) {
        reverseNum = 0 - reverseNum;
    }
    return reverseNum;
}
reverseNumber(-1000);