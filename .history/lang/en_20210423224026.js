export default async (context, locale) => {
  return await Promise.resolve({
    trade: 'Trade',
    pools: 'Pools',
    farm: 'Farm',
    home: 'Home',
    infos: 'Infos',
    bamboo_price: '$BAMBOO PRICE',
    connect_wallet: 'Connect wallet',
    panda_swap: 'PANDA SWAP',
    home_text: 'Stake your Pandaswap LP tokens to start growing your very own $BAMBOO !'
  })
}
