const data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ]

function getNumbers(a) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        if (!isNaN(a[i])) {
            arr.push(a[i]);
        }
    }
    return arr;
}

function findTypes(){
    let countObject = 0,
        countString = 0,
        countNumber = 0,
        arr = {};
    for (let i = 0; i < arguments.length; i++){
        if (typeof arguments[i] === 'object'){
            countObject ++;
            arr.object = countObject;
        } else if (typeof arguments[i] === 'number') {
            countNumber ++;
            arr.number = countNumber;
        } else if (typeof arguments[i] === 'string') {
            countString ++;
            arr.string = countString;
        }
    }
    return arr;
}

function executeforEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}

function mapArray(array, callback){
    let newArray = [];
    executeforEach(array, function(el){
        newArray.push(callback(el));
    });
}

function filterArray(array, callback){
    let newArray = [];
    executeforEach(array, function(el){
        if (callback(el)){
            newArray.push(el);
        }
    });
}

function showFormattedDate(time){
    let day = time.getDate();
    let month = time.toLocaleString('en-us', { month: 'short' });
    let year = time.getFullYear();
    return `Date: ${month} ${day} ${year}`;
}

function canConvertToDate(time){
    return new Date(time) > 0;
}

function daysBetween(date1, date2){
    let hour = 24, min = 3600, sec = 1000;
    return Math.round((date2.getTime() - date1.getTime()) / (sec * min * hour));
}

function getAmountOfAdultPeople(data){
    let countPeople = 0; let ageControl = 18;
    filterArray(data, function(el){

        if(el.birthday > ageControl){
            countPeople++;
        }
    });
    return countPeople;
}
console.log(getAmountOfAdultPeople(data));

function keys(keys){
    let arrKeys = [];
    for (let key in keys){
        if (keys.hasOwnProperty(key)){
            arrKeys.push(key);
        }
    }
    return arrKeys;
}

function values(values){
    let arrValues = [];
    for (let key in values){
        if (values.hasOwnProperty(key)){
            arrValues.push(values[key]);
        }
    }
    return arrValues;
}