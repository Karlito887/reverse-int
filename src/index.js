module.exports = function reverse(n) {
    let reverseString = n.toString()
        .split('-')
        .join('')
        .split('')
        .reverse()
        .join('')
    return + reverseString
}


// -192 ------------- 291    
