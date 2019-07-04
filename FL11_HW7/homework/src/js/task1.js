let userEmail = '', passwd = '', newPasswd = '', check, oldPasswd = '', newPasswd2 = '';
let minLengthPasswd = 6, minLengthNewPasswd = 5;
userEmail = prompt('Enter your Email');
if (userEmail === null || userEmail === '') {
    alert('Canceled');
} else if (userEmail.length < minLengthPasswd) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
    passwd = prompt('Enter your Pasword');
    if (passwd === null || passwd === '') {
        alert('Canceled');        
    } else if (passwd === 'UserPass' && userEmail === 'user@gmail.com' 
    || passwd === 'AdminPass' && userEmail === 'admin@gmail.com') {
        check = confirm('Do you want to change your password?');
        if (check) {
            oldPasswd = prompt('Write the old password');
            if(oldPasswd === passwd) {
                newPasswd = prompt('Enter new password');
                if(newPasswd.length < minLengthNewPasswd) {
                    alert('It’s too short password. Sorry.');
                } else {
                    newPasswd2 = prompt('Enter new password again');
                    if(newPasswd2 !== newPasswd) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}