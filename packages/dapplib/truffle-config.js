require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn property install option forget sentence'; 
let testAccounts = [
"0xa669c1e10ab67ef1d51bccbbd78e8daccbed59f59dfd57a5f3700f496a497db1",
"0x6340c0476c2946b5b745272974e6855550be30f58a70bfa351d591fb57106531",
"0x49c5254d26f9c4e80b26c0374cb6d6bd446eb9dda7c5e45d7b340559e98c7983",
"0x38a080114f41a96d5781686d81348c3e904dd97edcb464c4d2694e915540ada0",
"0xae240b3fd30ba7be2bcd5e298510e2456023670e03c25d3326d4081b7605353e",
"0x02166c13f650b8326f3f600264500115d73ace65463d9ab556c66dc33191c570",
"0x76038a09255cbe17395e200482b3626facd4556db3c22811f1e3aea2f45fb1e4",
"0x8fac509ffdbcb38539923ac09ffd31324a03a1570d2703af83965c881c984035",
"0x0fd779d0ea2fb7239b46a9bc8941f44495cade6241b15fa1ccafe211de73f02a",
"0xaa3caf7f3ad219323ab704990101685154830f9e70f38b6c189e67a0e7cc612c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


