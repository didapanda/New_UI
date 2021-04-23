export default async (context, locale) => {
  return await Promise.resolve({
    trade: 'Trade',
    pools: 'Pools',
    farm: 'Farm',
    home: 'Home',
    infos: 'Infos',
    bamboo_price: '$BAMBOO PRICE'
  })
}
