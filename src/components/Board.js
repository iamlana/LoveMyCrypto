import React from "react"
import { AllCoins } from './AllCoins'
import { FavoriteCoin } from "./FavoriteCoin"
import { CoinsLeft } from "./CoinsLeft"

export function Board() {

  return (

    <div className="coins_list">
      <p className="coins_list-title">Press ★ to add to Favorite List</p>
      <ul className="coins_list-all">
        <li>All Coins:</li>
        <AllCoins />
      </ul>
      <ul className="coins_list-favorite">
        <li>Favorite Coins</li>
        <FavoriteCoin />
      </ul>
      <ul>
        <li className="coins_list-left">Other Coins</li>
        <CoinsLeft />
      </ul>
    </div>
  )
}
