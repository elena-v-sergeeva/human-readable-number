module.exports = function toReadable (number) {
  let result = 0;
    for(; n; n = Math.floor(n / 10)) {
        result *= 10;
        result += n % 10;
    }
  
    return result;
}
