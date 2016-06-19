Ethereum Ionic (v2)
===================

An example project which demonstrates the use Ionic v2 (javascript) with Web3 as service.
Most important part: [app/providers/web-3-service/web-3-service.js](app/providers/web-3-service/web-3-service.js)

- ionic: http://ionicframework.com/docs/v2/
- Web3: https://github.com/ethereum/wiki/wiki/JavaScript-API
- lodash: https://lodash.com/

## How to run?

Make sure you have ionic@beta installed. It also assumes you have a geth-compatible RPC server running at `http://localhost:8545`

0. clone this repository
0. `npm install`
0. `ionic platform add ios`
0. `ionic serve` (to run in browser) or `ionic emulate ios` (to run in iOS simulator)
