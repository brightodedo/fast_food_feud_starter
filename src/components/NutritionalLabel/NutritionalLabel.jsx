import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel({details={}}) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>
      <h4 className="item-name">{details.item_name}</h4>
      <ul className="fact-list">{/* WRITE CODE HERE */}
      {nutritionFacts.map( (nutrient) => {
        return (<NutritionalLabelFact label={nutrient.label} attribute={nutrient.attribute} item={details} key={nutrient.id} />)
      })}
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}
      </span>{" "}
      <span className="fact-value"> {props.item[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
