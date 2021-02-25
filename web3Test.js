const Web3 = require('web3');

//var url = "https://mainnet.infura.io/v3/60fee7fc581c494ea8091adb64f35173"
var url = "https://http-mainnet.hecochain.com"
var web3 = new Web3(url)
// var address = "0xDc76CD25977E0a5Ae17155770273aD58648900D3"
var address = "0xc189c6c138e78e8a4c1f1633e4c402e0c49a6049"
var balance = 0;

console.log(web3.eth.Contract);

// var myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
//     from: '0x1234567890123456789012345678901234567891', // default from address
//     gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
// });

//console.log(web3.eth)
//web3.eth.getPastLogs(address).then(console.log);
//console.log(web3.eth.getTransactionCount())
// while(true){
//     web3.eth.
// }

//web3.eth.getBalance(address,(err,bal) => { bal = balance }).then(console.log)





//web3.utils.fromWei(balance, 'ether')

// async function getAccounts() {
//     try{

//     // let accounts = await web3.eth.getAccounts();
//     // console.log(accounts[0]);
//     }catch(e){
//         console.log("error:", e)
//     }
// }

// getAccounts();