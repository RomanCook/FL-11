function formatTime(a) {
    let day, hour, min;
    day = Math.trunc(a / 1440);
    hour = Math.trunc((a - day * 1440) / 60);
    min = a - day * 1440 - hour * 60;
    return day + ' day(s) ' + hour + ' hour(s) ' + min + ' minute(s).';
}
formatTime(120);