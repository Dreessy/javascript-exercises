const sumAll = function (num1, num2) {
    let totale = 0;
    if (typeof (num1) === "string" || typeof (num2) === "string") {
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if(Array.isArray(num1)|| Array.isArray(num2))
    {
        return "ERROR";
    }
    else if (num1 < num2) {
        for (num1; num1 <= num2; num1++) {
            totale += num1;
        }
    }
    else if (num1 > num2) {
        for (num2; num2 <= num1; num2++) {
            totale += num2;
        }
    }
    return totale;
}

module.exports = sumAll
