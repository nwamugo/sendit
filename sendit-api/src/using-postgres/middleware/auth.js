import jwt from 'jsonwebtoken';

const Auth = {
  async verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(400).send({ message: 'Token is not provided' });
    }
    try {
      const decoded = await jwt.verify(token, process.env.SECRET);
      req.user = { id: decoded.userId };
      next();
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default Auth;
