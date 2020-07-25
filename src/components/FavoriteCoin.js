import React from "react"
import { useFavorites } from "./useFavorites"


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