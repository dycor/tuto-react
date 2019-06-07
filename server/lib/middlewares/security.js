const verifyToken = require('../auth').verifyToken;

const verify = (req, res, next) => {
  if(req.path === '/login_check') return next();
  if(req.path === '/register') return next();

  const authHeader = req.get('Authorization');

  if(!authHeader || !authHeader.startsWith('Bearer')) res.sendStatus(401);

  const token = authHeader.replace('Bearer ','');
  verifyToken(token).then(decodedToken => {
    req.user = decodedToken;
    next();
  }).catch(error => res.status(401).send({
    error:"JWT TOKEN invalid"
  }));

};

module.exports = verify;