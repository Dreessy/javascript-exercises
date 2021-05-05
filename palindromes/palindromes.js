const palindromes = function(word) {
let reversedword = "";
 
for(let i = 1; i <= word.length; i++)
{
    reversedword += word.charAt(word.length - i);

}
if(word.toLowerCase().replace(/[!-,-.-\s]/g, "") === reversedword.toLowerCase().replace(/[!-,-.-\s]/g, ""))
{
    return true;
}
else
{
    return false;
}
}

module.exports = palindromes
