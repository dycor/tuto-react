const jwt = require('jsonwebtoken');

const createToken = function (user={}) {
  return jwt.sign({
    firstName: user.firstName
    },
    process.env.JWT_SECRET,
    {
      expiresIn: 3600,
      algorithm:"HS256"
    }
  );
};

const verifyToken  = function (token) {
  return new Promise((resolve,reject) => {
    jwt.verify(token,process.env.JWT_SECRET,(err, decodedToken) => {
      if(err || !decodedToken){
        reject(err);
      }
      resolve(decodedToken);
    });
  });
};

module.exports = {
  createToken,
  verifyToken
};