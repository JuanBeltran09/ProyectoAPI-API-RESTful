const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) return res.status(401).json({ error: 'Acceso denegado. No hay token.' });

  try {
    const verificado = jwt.verify(token, process.env.JWT_SECRET);
    
    req.usuario = verificado;
    
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token no válido.' });
  }
};

module.exports = verificarToken;
