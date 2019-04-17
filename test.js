const { isEmailBlocked } = require('.');
const assert = require('assert');

assert(isEmailBlocked('test@gmail.com') === false, 'test@gmail.com should be valid');
assert(isEmailBlocked('test@10minutemail.com') === true, 'test@10minutemail.com should be invalid');

console.log('all good');
