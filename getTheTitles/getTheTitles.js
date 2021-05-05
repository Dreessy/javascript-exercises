const getTheTitles = function (books) {
    let array = [];
    books.forEach(book => {
        array.push(book["title"]);
    });
    return array;
}

module.exports = getTheTitles;
