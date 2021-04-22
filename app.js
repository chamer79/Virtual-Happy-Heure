    // -- Create Dynamic Dropdown Menu --  <-- VERY HAPPY Possible Code Snippet
function menuOptions() {
  const selectTag = document.querySelector("#select-spirit")
  const spirit = ["Bourbon", "Gin", "Tequila", "Vodka", "Rum"]
  
  for (let i = 0; i < spirit.length; i++) {
    // console.log(spirit[i])   // <-- sanity check WORKS
    let spiritList = spirit[i]
    let optionTag = document.createElement("option")  // <-- Create For Option Tags

    optionTag.textContent = spirit[i]   
    optionTag.value = spirit[i]
    selectTag.appendChild(optionTag)
    // console.log(optionTag.value)   // <--sanity check
  }
  
}
menuOptions()

    
    // -- Create For Option Tags --
  // * Refer to lines 9-13

    
    
    // -- Get Option Value Tag --  ****ADDD CONDITIONAL
function getValue(e) {
  e.preventDefault()
  const optionValue = document.querySelector("#select-spirit").value
    // console.log(optionValue)  // <--sanity check  
  getDrinkId(optionValue)
 }
    

                // ** Might forgo this code block - possible but turning more into a PMVP than a MVP???
// //     // -- API Request for Ingredients Data / Base Spirit --
async function getDrinkId(spiritValue) {
  // console.log("HERE HERE:", spiritValue)    // <-sanity check *shows up as 'undefined' until base spirit is selected
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spiritValue}`  // <-- NEEDED to input 'https://' in order to request the API

  removeCocktailRecipe()

  try {
    if (spiritValue === undefined) {    // <--URL ENDED w/ undefined. 
      return null
    } else {
      const spiritResponse = await axios.get(url)
      let drinkIds = []
      for (let i = 0; i < spiritResponse.data.drinks.length; i++) {
        // console.log(spiritResponse.data.drinks[i].idDrink) //<--sanity check  logs idDrink 
        drinkIds.push(spiritResponse.data.drinks[i].idDrink)    // <-- Calls 1st idDrink value
      }
      console.log(drinkIds)
      const randomCocktailId = Math.floor(Math.random() * drinkIds.length)
     
      // console.log(drinkIds[randomCocktailId])   // <--logs random number...but not id :/
      const cocktail = drinkIds[randomCocktailId]
      const idUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`

      const filterResponse = await axios.get(idUrl)
      // console.log(filterResponse.data.drinks[0])
      
      let responseDiv = document.querySelector("#cocktail-response")

      let imageDiv = document.createElement("div")
      imageDiv.classList.add = ("cocktail-image")
      responseDiv.append(imageDiv)

      let image = document.createElement("img")
      image.src = filterResponse.data.drinks[0].strDrinkThumb 
      imageDiv.append(image)
      
      let recipeDiv = document.createElement("div")
      recipeDiv.classList.add = ("cocktail-recipe")
      responseDiv.append(recipeDiv)
      
      let drinkName = document.createElement("h2")    // <--Pulling Recipe data
      drinkName.textContent = filterResponse.data.drinks[0].strDrink
      recipeDiv.append(drinkName)
      
      let listDiv = document.createElement("div")
      listDiv.className = "cocktail-ingredients"
      // console.log("Ingredient div here:", listDiv)    // <-- sanity check
      recipeDiv.append(listDiv)
     
      
      function myMeasure(drink) {
        Object.entries(drink).forEach(([key, value]) => {
          if (key.includes('strIngredient')) {
            if (value !== null) {
              let keyNum = key.split('strIngredient')
              // console.log(keyNum)
              // console.log(`${drink[`strMeasure${keyNum[1]}`]} ${value}`)
              let myDrinkSpecs = document.createElement("li")
              myDrinkSpecs.textContent = `${drink[`strMeasure${keyNum[1]}`]} ${value}`
              listDiv.append(myDrinkSpecs)
            }
          }
        })
      }
      myMeasure(filterResponse.data.drinks[0])   // <-- w/out coctailData = TypeError: Can't convert undefined or null to object...
      
      let drinkInstructions = document.createElement("p")   // <--Pulling Instructions data
      drinkInstructions.textContent = filterResponse.data.drinks[0].strInstructions
      recipeDiv.append(drinkInstructions)   
    }
  }
  catch (error) {
    console.error (error)
  }
  return spiritValue
}

getDrinkId()
    
      // -- Event Handler for Form --
const form = document.querySelector("form")
form.addEventListener("submit", getValue)

    // ** Removing Previous Responses
function removeCocktailRecipe() {
  const removeRecipeDiv = document.querySelector("#cocktail-response")
  if (removeRecipeDiv) {
    while (removeRecipeDiv.lastChild) {
      removeRecipeDiv.removeChild(removeRecipeDiv.lastChild)
    }
  }
}

