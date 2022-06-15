import * as React from "react"
import Chip from "../Chip/Chip"

export function CategoriesColumn({categorie=[], selectedCategor="", selectCategor= () => {}, deselectCategor = () => {}}){
    return(
        <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {
            categorie.map((category, idx) => {return(
              <Chip label={category} isActive = {selectedCategor === category} key={idx} onclick={() => selectCategor(category)} onclose={ () => deselectCategor()}/>
              )})
          }
        </div>
      </div>
    )
}



export default CategoriesColumn