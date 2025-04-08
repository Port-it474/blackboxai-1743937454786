const jwt = require('jsonwebtoken');
const { Customer, Vendor, DeliveryPartner } = require('../models');

const authenticate = (role) => {
  return async (req, res, next) => {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '');
      if (!token) throw new Error('Authentication required');

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      let user;
      switch(role) {
        case 'customer':
          user = await Customer.where({ id: decoded.id }).first();
          break;
        case 'vendor':
          user = await Vendor.where({ id: decoded.id }).first();
          break;
        case 'delivery':
          user = await DeliveryPartner.where({ id: decoded.id }).first();
          break;
        default:
          throw new Error('Invalid user role');
      }

      if (!user) throw new Error('User not found');
      
      req.user = user;
      req.token = token;
      next();
    } catch (error) {
      res.status(401).send({ error: error.message });
    }
  };
};

module.exports = { authenticate };