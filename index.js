const fs = require('fs');

const path = require('path');

const filePath = path.join(__dirname, 'email.txt');

const contents = fs.readFileSync(filePath)
                   .toString()
                   .toLowerCase()
                   .trim()
                   .split('\n');

const emailBlacklist = new Set(contents);

const isEmailBlocked = function (email) {

  const atoms = email.toString().split('@');

  const domain = atoms[1];

  if (!domain) {
    throw new Error('invalid email');
  }

  return emailBlacklist.has(domain.toLowerCase())
};

module.exports = { emailBlacklist, isEmailBlocked };
