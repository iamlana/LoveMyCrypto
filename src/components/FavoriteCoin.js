import React from "react"
import { useFavorites } from "./useFavorites"
import { AllCoins } from './AllCoins'

export function FavoriteCoin() {

    const { favorites } = useFavorites()

    return (
            <ul className="coins_list-favorite">
                {favorites.map(coin =>
                  <li>{coin}</li>
                )}
            </ul>
    )
}