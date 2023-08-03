var getNum = function (arr, count) {
    var rand = arr.slice().sort(function () { return 0.5 - Math.random(); });
    return rand.slice(0, count);
};
var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var shuffle = getNum(input, 5);
console.log(shuffle);
