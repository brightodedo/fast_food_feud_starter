import * as React from "react"
import Chip from "../Chip/Chip"
import NutritionalLabel from "../NutritionalLabel/NutritionalLabel"


export function MenuDisplay({currentMenuItem=[], selectedMenuIte={}, selectMenuIte=()=>{}, deselectMen=()=>{}}){
    return(
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {
            currentMenuItem.map((menuItem, idx) => {
              return (<Chip label={menuItem.item_name} key={idx} isActive={selectedMenuIte === menuItem} onclick={() => selectMenuIte(menuItem)} onclose={ () => deselectMen()}/>
              )
            })}
          </div>
          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
          {selectedMenuIte ? <NutritionalLabel details={selectedMenuIte} /> : <></>}
          </div>
        </div>
    )
}

export default MenuDisplay