import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from  "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"
import CategoriesColumn from "./components/CategoriesColumn/CategoriesColumn"
import RestaurantsRows from "./components/RestaurantsRows/RestaurantsRows"
import MenuDisplay from "./components/MenuDisplay/MenuDisplay"
import DataSource from "./components/DataSource/DataSource"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()
let selectedACategory = false
let selectedARestaurant = false
let selectedAnItem = false
export function App() {

  const [selectedCategory, setSelectedCategory] = React.useState();
  const selectCategory = (e) => {
    setSelectedCategory(e)
    selectMenuItem(null)
    selectedACategory = e == null ? false : true
    controlInstructions()
  }
  const deselectCategory = () => {
    selectCategory(null)
  }
  const [selectedRestaurant, setSelectedRestaurant] = React.useState();
  const selectRestaurant = (e) => {
    setSelectedRestaurant(e)
    selectMenuItem(null)
    selectedARestaurant = e == null ? false : true
    controlInstructions()
  }
  const deselectRestaurant = () => {
    selectRestaurant(null)
  }
  const [selectedMenuItem, setSelectedMenuItem] = React.useState();
  const selectMenuItem = (e) => {
    setSelectedMenuItem(e)
    selectedAnItem = e == null ? false : true
    controlInstructions()
  }
  const deselectMenu = () => {
    selectMenuItem(null)
  }
  const [instruction, setInstruction] = React.useState("start");
  
  
   function controlInstructions(){
    if(!(selectedACategory || selectedARestaurant) && !selectedAnItem) setInstruction("start")
    else if(selectedACategory && !(selectedARestaurant || selectedAnItem)) setInstruction("onlyCategory")
    else if(selectedARestaurant && !(selectedACategory || selectedAnItem)) setInstruction("onlyRestaurant")
    else if(selectedACategory && selectedARestaurant && !selectedAnItem) setInstruction("noSelectedItem")
    else setInstruction("allSelected")
  }

  const currentMenuItems = data.filter((menuItem) => {return menuItem.food_category === selectedCategory && menuItem.restaurant === selectedRestaurant})
  return (
    <main className="App">
      <CategoriesColumn  categorie={categories} selectedCategor={selectedCategory} selectCategor={selectCategory} deselectCategor={deselectCategory}/>
      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        < Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>
        <RestaurantsRows restauran={restaurants} selectedRestauran={selectedRestaurant} selectRestauran={selectRestaurant} deselectRestauran={deselectRestaurant}/>
        {/* INSTRUCTIONS GO HERE */}
        <Instructions details={appInfo.instructions[instruction]}/>
        <MenuDisplay currentMenuItem={currentMenuItems} selectedMenuIte={selectedMenuItem} selectMenuIte={selectMenuItem} deselectMen={deselectMenu} />
        <DataSource dataSourc={appInfo.dataSource} />

      </div>
    </main>
  )
}

export default App
