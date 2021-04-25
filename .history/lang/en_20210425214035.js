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
    home_text:
      'Stake your Pandaswap LP tokens to start growing your very own $BAMBOO !',
    powered_by: 'POWERED BY',
    pools_txt:
      'Select your favorite pair. Stake Liquidity Pool (LP) Tokens to earn.',
    infos_txt:
      'Select your favorite pair. Stake Liquidity Pool (LP) Tokens to earn.',
    trade_txt:
      'Select your favorite pair. Stake Liquidity Pool (LP) Tokens to earn.',
    farm_txt:
      'Select your favorite pair. Stake Liquidity Pool (LP) Tokens to earn.',
    search: 'Search',
    view_contract: 'View contract',
    pair_info: 'See pair info',
    get: 'Get',
    stake: 'Stake',
  })
}
