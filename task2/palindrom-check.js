function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello")); 