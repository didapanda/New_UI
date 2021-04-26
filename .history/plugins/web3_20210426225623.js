import Web3 from "web3"
import WalletConnectProvider from "@walletconnect/web3-provider";


export default async function(context, inject) {

    //  Create WalletConnect Provider
    // const provider = new WalletConnectProvider({
    //     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
    // });
    const provider = new WalletConnectProvider({
        rpc: {
          1: "https://api.avax.network/ext/bc/C/rpc",
        },
      });
    
    //  Enable session (triggers QR Code modal)
    await provider.enable();
    // const httpEndpoint = "http://127.0.0.1:8545"
    const web3 = new Web3(provider)

// rpcUrl: 'https://api.avax.network/ext/bc/C/rpc'

    inject('web3',web3)
}
