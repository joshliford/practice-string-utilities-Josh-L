const stringUtils = require('./stringUtils');

console.log(stringUtils.capitalize("hello"));
console.log(stringUtils.capitalize(undefined));
console.log(stringUtils.reverse("world"));
console.log(stringUtils.contains("bootcamp", "camp")); // 'bootcamp' does contain 'camp' (true)
console.log(stringUtils.contains("bootcamp", "code")); // 'bootcamp' does contain 'code' (false)