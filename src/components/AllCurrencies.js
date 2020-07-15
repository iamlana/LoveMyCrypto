import React from "react"
import { useCoinDetails } from "./useCoinDetails"


export function AllCurrencies() {
  const { coin, error, loading } = useCoinDetails()

  if (loading) {
    return <div className="currency_list">Loading...</div>
  }
  if (error) {
    return <>{JSON.stringify(error)}</>
  }

  const makerId = 'mkr-maker'
  const maker = coin.find(x => x.id === makerId)

  return (
    <div className="currency_list">
      <header>
        Press ♥ to add to Favorite List
        {/* <div>
          {coin.map(co => (
            <ul className="currency" key={co.id}>
              <li>{co.id}</li>
            </ul>
          ))}
        </div> */}
        <p>{maker.name}</p>
        <p>{maker.quotes.USD.price}</p>
      </header>
    </div>
  )
}
