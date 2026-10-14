const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    }

    let myArray = [];

    for (let i = 0; i < num; i++){
        myArray.push(string);
    }

    return myArray.join('');
};

// Do not edit below this line
module.exports = repeatString;
