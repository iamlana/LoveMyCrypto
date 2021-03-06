import React from "react"
import { Coin } from './Coin'
import { useFavorites } from "./useFavorites"
import { useCoins } from "./useCoins"
import { supportedCoins } from "./constants"

export function Coins() {
  const { coins, error, loading } = useCoins()
  const { favorites } = useFavorites()
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <>{JSON.stringify(error)}</>
  }

  const allCoins = supportedCoins.map(id => coins.find(x => x.id === id))
  const favoriteCoins = allCoins.filter(coin => favorites.includes(coin.id))
  const leftCoins = allCoins.filter(coin => !favorites.includes(coin.id))

  return (
    <div className="coins_list">
      <p className="coins_list-title">Press ★ to add to the Favorite List</p>
      <div className="coins_list_left">
        <p>Coins:</p>
        <ul>{leftCoins.map(coin => <Coin key={coin.id} coin={coin} />)}</ul>
      </div>
      <div className="coins_list_favorite">
        <p className="title">Favorite Coins:</p>
        <ul>{favoriteCoins.map(coin => <Coin key={coin.id} coin={coin} />)}</ul>
      </div>

    </div>
  )
}
