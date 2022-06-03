'use strict';

const {
    MnemonicWallet,
    BN,
    TestnetConfig,
    setNetwork,
    setNetworkAsync,
    getActiveNetworkConfig,
    GasHelper
} = require('@avalabs/avalanche-wallet-sdk');
const { ethers } = require('ethers');

async function main() {

    // Set to Fuji Testnet
    setNetworkAsync(TestnetConfig);

    // ORIGIN WALLET DATA

    // Wallet Mnemonic guard alpha tiny want shallow method service frown treat brief gown camera dog trim apology fashion moral left sick erosion boy solid tired lobster

    // Wallet EVM Machine 0x1b29f78A9bf21766423bF9Ec72354f0D98F2677c
    // Wallet C Chain 0x1b29f78A9bf21766423bF9Ec72354f0D98F2677c
    // Wallet P Chain X-avax1tt8dwavchcyr0uqad5dm3fmt643ywkrn85zhe0
    // Wallet X Chain P-avax1tt8dwavchcyr0uqad5dm3fmt643ywkrn85zhe0

    // get the public key from the mnemonic data
    const mnemonic = 'guard alpha tiny want shallow method service frown treat brief gown camera dog trim apology fashion moral left sick erosion boy solid tired lobster';
    const wallet = await MnemonicWallet.fromMnemonic(mnemonic);

    console.log('', wallet.getEvmPrivateKeyHex());

    // Mnemonic wallets need to find their HD index on startup
    const reset = await wallet.resetHdIndices();
    console.log('Wallet reset', reset);

    // Update the UTXOs
    await wallet.updateAvaxBalanceC();

    // Send 1 nAVAX
    let address = wallet.getAddressC();
    let balance = wallet.getAvaxBalanceC();
    console.log('Sending 1 nAVAX to', balance.toString(), address);

    // const getActiveNetworkConfi = getActiveNetworkConfig();
    // console.log('getActiveNetworkConfig', getActiveNetworkConfi);

    // process.exit(0);

    let amount = new BN(1);
    let to = "0x7d9C57DcD34006daf57d4c951B2d13Ba1D42CE39";

    let fee = new BN(0);

    let gasPrice = await GasHelper.getGasPrice();
    console.log('Gas Price', ethers.utils.formatEther(gasPrice.toString()));

    let gasLimit = await wallet.estimateAvaxGasLimit();
    console.log('Gas Limit', gasLimit);

    // process.exit(0);

    let txID = await wallet.sendAvaxC(to, amount, gasPrice, 50000);

    console.log('Transaction ID', txID);


}

main();


/**
 * Wallet created. vanish harbor adapt evil item mom hamster trim happy theory team oven story crash property upgrade runway car march lesson august blame mass bus
Wallet EVM Machine 0x7d9C57DcD34006daf57d4c951B2d13Ba1D42CE39
Wallet C Chain 0x7d9C57DcD34006daf57d4c951B2d13Ba1D42CE39
Wallet P Chain X-avax19f03uq09wcv042dykavs23y4ljv8sdpcchcvaw
Wallet X Chain P-avax19f03uq09wcv042dykavs23y4ljv8sdpcchcvaw
 */