import React from "react"
import { useCoinDetails } from "./useCoinDetails"
import { useFavorites } from "./useFavorites"

export function AllCoins() {
    const { coin, error, loading } = useCoinDetails()
    const { favorites, toggleFavorite } = useFavorites()

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <>{JSON.stringify(error)}</>
    }
    const bitcoinId = 'btc-bitcoin'
    const bitcoin = coin.find(x => x.id === bitcoinId)
    const makerId = 'mkr-maker'
    const maker = coin.find(x => x.id === makerId)
    const iconId = 'icx-icon'
    const icon = coin.find(x => x.id === iconId)
    const wavesId = 'wct-waves-community-token'
    const waves = coin.find(x => x.id === wavesId)
    const tetherId = 'usdt-tether'
    const tether = coin.find(x => x.id === tetherId)
    const daiId = 'dai-dai'
    const dai = coin.find(x => x.id === daiId)
    const spectrecoinId = 'xspec-spectrecoin'
    const spectrecoin = coin.find(x => x.id === spectrecoinId)
    const komodoId = 'kmd-komodo'
    const komodo = coin.find(x => x.id === komodoId)
    const cosmosId = 'atom-cosmos'
    const cosmos = coin.find(x => x.id === cosmosId)
    const lunaId = 'luna-terra'
    const luna = coin.find(x => x.id === lunaId)
    const allCoins = [bitcoin, maker, icon, waves, tether, dai, spectrecoin, komodo, cosmos, luna]

    return (
        <>
            {allCoins.map(coin =>
                <li>{coin.name}
                    <span> &#36;{coin.quotes.USD.price.toFixed(4)}</span>
                    <button className="favorite" title="Add to favorite" onClick={() => toggleFavorite(coin.name)}>
                        {favorites.includes(coin.name) ? <span>&#9733;</span> : <span>&#9734;</span>}
                    </button>
                </li>)}
        </>
    )
}
