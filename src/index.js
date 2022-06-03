require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');
const { MnemonicWallet, setNetworkAsync, TestnetConfig } = require('@avalabs/avalanche-wallet-sdk');
const { ethers } = require('ethers');

const app = express();


// parse json request body
app.use(express.json());

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/getbalance', async (req, res) => {
    console.log('you calling me?');


    // Set to Fuji Testnet
    setNetworkAsync(TestnetConfig);

    // Wallet Mnemonic guard alpha tiny want shallow method service frown treat brief gown camera dog trim apology fashion moral left sick erosion boy solid tired lobster

    // get the public key from the mnemonic data
    const mnemonic = 'guard alpha tiny want shallow method service frown treat brief gown camera dog trim apology fashion moral left sick erosion boy solid tired lobster';
    const wallet = await MnemonicWallet.fromMnemonic(mnemonic);

    // Mnemonic wallets need to find their HD index on startup
    const reset = await wallet.resetHdIndices();
    console.log('Wallet reset', reset);

    // Update the UTXOs
    await wallet.updateAvaxBalanceC();

    const balance = wallet.getAvaxBalanceC();
    console.log('balance', ethers.utils.formatEther(balance.toString()));

    const parseBalance = ethers.utils.formatEther(balance.toString())

    res.json({
        balance: parseBalance
    })

});

app.listen(7500, () => {
    console.log(`Listening to port 7500`);
});
