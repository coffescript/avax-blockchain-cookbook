'use strict';

const AvaxWallets = require('@avalabs/avalanche-wallet-sdk');

async function main() {

    const { MnemonicWallet } = AvaxWallets;

    // create a wallet instance
    const wallet = await MnemonicWallet.create();
    // console.log('Wallet created', wallet);

    console.log('Wallet EVM Machine', wallet.getMnemonic());
    console.log('Wallet EVM Machine', wallet.getBaseAddress());
    console.log('Wallet C Chain', wallet.getAddressC());
    console.log('Wallet P Chain', wallet.getAddressX());
    console.log('Wallet X Chain', wallet.getAddressP());

    // Fired when the wallet starts using a new address
    // Used only with HD Wallets (Mnemonic, Ledger, and XPUB)
    wallet.on('addressChanged', (addresses) => {
        // Use the most recent addresses from the wallet
        console.log('Wallet address changed', addresses);
    });

    // Fired when X Chain balance is updated
    wallet.on('balanceChangedX', (balance) => {
        // Recent X Chain balance
        console.log('Wallet balance on Chain X changed', balance);
    });

    // Fired when P Chain balance is updated
    wallet.on('balanceChangedP', (balance) => {
        // Recent P Chain balance
        console.log('Wallet balance on Chain P changed', balance);
    });

    // Fired when C Chain balance is updated
    wallet.on('balanceChangedC', (balance) => {
        // Recent C Chain balance
        console.log('Wallet balance on Chain C changed', balance);
    });

}

main();