const {
  addWatchList,
  fundAccount,
  removeWatchListItem,
  addWalletAddress,
  updateBank,
  getDashBoardData,
  updateProfile,
  getUser,
  coinInitRoute,
} = require('../Controllers/UserController/user.controller');
const Authenticate = require('../Middlewares/Authentication');

const userRoute = require('express').Router();

userRoute.get('/getData', Authenticate, getDashBoardData);
userRoute.get('/getUser', Authenticate, getUser);
userRoute.put('/fundAccount', Authenticate, fundAccount);
userRoute.post('/coinbase', Authenticate, coinInitRoute);
userRoute.put('/addWatchList', Authenticate, addWatchList);
userRoute.put('/updateBank', Authenticate, updateBank);
userRoute.put('/addWalletAddress', Authenticate, addWalletAddress);
userRoute.put('/updateProfile', Authenticate, updateProfile);
userRoute.delete('/removeWatchListItem', Authenticate, removeWatchListItem);

module.exports = {
  userRoute,
};
