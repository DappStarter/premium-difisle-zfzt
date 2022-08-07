require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note museum coast harvest opinion bone gather'; 
let testAccounts = [
"0xa31a0da19f77b0526cedb605d72b957c3fce8e8dc892f6d7e56c1b7c772b80fc",
"0x57f672d6e38af18ebcdfea9c84ecb9c8c3c3b590df1b6ab78b6edbf232767cb8",
"0xccd74db99244aa466400d136ca33cda2bf6f47b26120de813677baa3424b0765",
"0x5a302c848ce493859317bad6d28949c2cfea29f205f72fd3a28cc54b53994d2a",
"0xdd6c8dad44aa05469f99fbc94663431c833fd16073aaed56d80ff56868268c69",
"0x10c101ea9c7738278aa5b6c0742e66f678aa23be476acc5942a8fb912d519444",
"0x87565c0cc9d1a4ea05ecc47a2e87e975369e0fc702a32bccee298cd219e44b6a",
"0x23221c36bb08751787bce57d53ececd62ef87b049a15831cd6eba4b751623376",
"0x31f03ca514ee69d73f5c4746acfa67ad7739084702dcb0ef123c8b4d126f48b0",
"0x08cacb5bf1d98c731124783a2c7c35953b225557b26c9e2d436576836ae4fd54"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

