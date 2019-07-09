let check = Boolean;
let max = 8, max2 = 12, min = 0, prize = 100, doubleprize = 200, TotalPrize = 0, maxAttempts = 3,
half = 2, userAttempts = 0, three = 3, zero = 0;
let random, userRandom;
check = confirm('Do you want to play a game?');
if (check) {
    random = Math.floor(Math.random() * (max - min) + min);
    console.log(random);
    for (let i = 0; i < maxAttempts; i++) {
        userRandom = parseFloat(prompt(`Enter a number from ${min} to ${max}\nAttempts left:${maxAttempts-userAttempts}
        Total prize: ${TotalPrize}$\nPossible prize on current attempt: ${prize}$`));
        if (random === userRandom) {
            TotalPrize += prize;
            alert(`Thank you for your participation. Your prize is: ${TotalPrize} $`);
            break;
        } else {
            prize = prize/half;
            userAttempts++;
        }
    }
    if (userAttempts === maxAttempts && random !== userRandom) {
        TotalPrize = 0;
        alert(`Thank you for your participation. Your prize is: ${TotalPrize} $`);
    } else{
        check = true;
        while (check) {
            check = confirm('Do you want to play again?');
            if (check) {
                maxAttempts = three;
                prize = doubleprize;
                userAttempts = zero;
                random = Math.floor(Math.random() * (max2 - min) + min);
                for (let i = 0; i < maxAttempts; i++) {
                    userRandom = parseFloat(prompt(`Enter a number from ${min} to ${max2}\nAttempts left:
                    ${maxAttempts-userAttempts}
                    Total prize: ${TotalPrize}$\nPossible prize on current attempt: ${prize}$`));
                    if (random === userRandom) {
                        TotalPrize += prize;
                        alert(`Thank you for your participation. Your prize is: ${TotalPrize} $`);
                        break;
                    } else {
                        prize = prize/half;
                        userAttempts++;
                    }
                }
            } else {
                alert('You did not became a millionaire, but can.');
            }
        }    
    }
} else {
    alert('You did not became a millionaire, but can.');
}
