const removeFromArray = function(arr, ...choices) {

    const newArr = [];

    arr.forEach((item) => {
        if (!choices.includes(item)){
            newArr.push(item);
        }
    })

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
