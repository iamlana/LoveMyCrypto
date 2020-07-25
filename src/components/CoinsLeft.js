import React from "react"
import { useFavorites } from "./useFavorites"

export function CoinsLeft() {
    const  {favorites}  = useFavorites()
    const allCoins = ["Bitcoin", "Maker", "ICON", "Waves Community Token", "Tether", "Dai", "Spectrecoin", "Komodo", "Cosmos", "LUNA"]
    
    const newList = allCoins.filter((coin)=> !favorites.includes(coin))

    return (
        <ul className="coins_list-left">
           {newList.map(coin=><li>{coin}</li>)}
        </ul>
    )
}

