function add (n1,n2) {
	return n1 + n2;
	
}

function subtract (n1,n2) {
return n1 - n2;	
}

function sum (numbers) {
	let sum = 0;
	numbers.forEach(result => {
		sum += result;
	});
	return sum;
}

function multiply (numbers) {
	let mult = 1;
	numbers.forEach(result => {
		mult *= result;
	})
	return mult;
}

function power(number,pow) {
	let result = 1;
	for(let i = 0; i < pow; i++)
	{
		result *= number;
	}
	return result;
}

function factorial(num) {
	let result = 1;
	if(num === 0)
	{
		return result;
	}
	for(let i = 0; i < num; i++)
	{
		result *= num - i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}