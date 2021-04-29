
const removeFromArray = function (array) {
    let returned = array;
    let indeces = [];
    for (let i = 0; i < array.length; i++) {
        for (let x = 1; x < arguments.length; x++) {
            if (returned[i] === arguments[x]) {
                indeces.push(i);
            }
        }
    }
    for (i = 0; i < indeces.length; i++) {
        returned.splice((indeces[i] - i), 1);
    }
    return returned;
}
module.exports = removeFromArray
