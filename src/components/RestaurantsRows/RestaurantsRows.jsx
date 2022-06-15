import * as React from "react"
import Chip from "../Chip/Chip"

export function RestaurantsRows({restauran=[], selectedRestauran="", selectRestauran=() => {}, deselectRestauran= () => {} }){
    return(
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{/* YOUR CODE HERE */} {
            restauran.map((restaurant, idx) => {
            return(<Chip label={restaurant} isActive={restaurant === selectedRestauran} key={idx} onclick={() => selectRestauran(restaurant)} onclose={ () => deselectRestauran()}/>
            )})}</div>
        </div>
    )
}

export default RestaurantsRows