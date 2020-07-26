import React from "react"
import { useFavorites } from "./useFavorites"

export function Coin({ coin }) {
    const { favorites, toggleFavorite } = useFavorites()

    return (
        <li>
            <button className="favorite" title="Add to favorite" onClick={() => toggleFavorite(coin.id)}>
                {favorites.includes(coin.id) ? <span>&#9733;</span> : <span>&#9734;</span>}
            </button>
            {coin.name}
            <span> &#36;{coin.quotes.USD.price.toFixed(4)}</span>
        </li>
    )
}
