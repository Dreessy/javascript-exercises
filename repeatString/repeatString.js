const repeatString = function (parola,volte) {
    let stringa = "";
    if(volte < 0)
    {
    return "ERROR";
}
        for(let i = 0; i < volte; i++)
        {
            stringa += parola;
            console.log(stringa);
        }
        return stringa;
    }
module.exports = repeatString
