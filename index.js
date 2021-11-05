module.exports = rawRequest => {
    const arrayOfLines = rawRequest.split('\r');
    const [method, ,] = arrayOfLines[0].split(' ');
    return method;
}