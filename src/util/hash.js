import bcrypt from "bcrypt";

const saltRounds = 10;

function hashing(plainText) {
  const salt = bcrypt.genSaltSync(saltRounds);
  console.log(plainText);

  return bcrypt.hash(plainText, salt);
}

function checkHash(plainText, hashText) {
  return bcrypt.compareSync(plainText, hashText);
}

export { hashing, checkHash };
