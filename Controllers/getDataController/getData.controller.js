const { default: axios } = require('axios');
const path = require('path');

const { User } = require('../../Models/User.model');

const { tryCatch } = require(path.join(
  __dirname,
  '..',
  '..',
  'Utils',
  'try_catch'
));

const getCoinData = tryCatch(async (req, res) => {
  await axios
    .get(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=1e6ecccb-6c4d-464b-8cc3-fdb7822b7193'
    )
    .then((response) => {
      res.send(response.data);
      // console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
});

// const getPairData = tryCatch(async (req, res) => {
//   await axios
//     .get(
//       'https://pro-api.coinmarketcap.com/v1/exchange/market-pairs/latest?CMC_PRO_API_KEY=1e6ecccb-6c4d-464b-8cc3-fdb7822b7193'
//     )
//     .then((response) => {
//       res.send(response.data);
//       // console.log(response.data);
//     })
//     .catch((err) => {
//       res.send(err);
//       console.log(err);
//     });
// });

module.exports = {
  getCoinData,
  // getPairData,
};
