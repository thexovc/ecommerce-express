const {
  decreAccount,
  increAccount,
  getUser,
  getDashBoardData,
  updateProfile,
  changePassword,
  getHistory,
  getAllUser,
  changeBalance,
} = require('../Controllers/Admin/admin.controller');
const isAdmin = require('../Middlewares/isAdmin');

const adminRoute = require('express').Router();

adminRoute.post('/decrease', isAdmin, decreAccount);

adminRoute.post('/increase', isAdmin, increAccount);

adminRoute.post('/getUser', isAdmin, getUser);

adminRoute.get('/getDashBoardData', isAdmin, getDashBoardData);

adminRoute.post('/updateProfile', isAdmin, updateProfile);

adminRoute.post('/changePassword', isAdmin, changePassword);

adminRoute.post('/changeBalance', isAdmin, changeBalance);

adminRoute.post('/getHistory', isAdmin, getHistory);

adminRoute.get('/getAllUser', isAdmin, getAllUser);

module.exports = {
  adminRoute,
};
