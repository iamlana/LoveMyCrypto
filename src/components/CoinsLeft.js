import React from "react"
import { useFavorites } from "./useFavorites"
import { supportedCoins } from './constants'

export function CoinsLeft() {
    const  {favorites}  = useFavorites()
    const newList = supportedCoins.filter((id)=> !favorites.includes(id))

    return (
        <ul className="coins_list-left">
           {newList.map(coin=><li>{coin}</li>)}
        </ul>
    )
}

