module.exports = function reverse (n) {
    return Number([...n.toString()].filter(val => !isNaN(val)).reverse().join(''))
}