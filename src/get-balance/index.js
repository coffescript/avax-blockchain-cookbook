'use strict';

const AvaxWallets = require('@avalabs/avalanche-wallet-sdk');
const Web3 = require('web3');

async function main() {

    const { MnemonicWallet } = AvaxWallets;

    // create a wallet instance
    const wallet = await MnemonicWallet.create();
    // console.log('Wallet created', wallet);

    // Big Number
    const BN = web3.utils.BN;

    console.log('Wallet EVM Machine', wallet.getBaseAddress());
    console.log('Wallet C Chain', wallet.getAddressC());
    console.log('Wallet P Chain', wallet.getAddressX());
    console.log('Wallet X Chain', wallet.getAddressP());

    // get balance | convert balance to string because sdk returns as BN
    console.log('Balance Wallet C Chain', wallet.getAvaxBalanceC().toString());
}

main();