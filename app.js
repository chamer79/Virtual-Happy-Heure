//==================================================
// Create Dynamic Dropdown Menu / Form Option Tags   <-- VERY HAPPY Possible Code Snippet
//==================================================
function menuOptions() {
  const selectTag = document.querySelector("#select-spirit")
  const spirit = ["Bourbon", "Gin", "Tequila", "Vodka", "Rum"]
  
  for (let i = 0; i < spirit.length; i++) {
    let spiritList = spirit[i]
    
    let optionTag = document.createElement("option")  // <-- Create Form Option Tags
    optionTag.textContent = spirit[i]   
    optionTag.value = spirit[i]
    selectTag.appendChild(optionTag)
  }
}
menuOptions()

//==============================
// Get Option Value Tag
//==============================
function getValue(e) {
  e.preventDefault()
  const optionValue = document.querySelector("#select-spirit").value
  getDrinkId(optionValue)
 }

//====================================================
// 2 API Requests: Ingredients Data & Cocktail Detail
//=====================================================
async function getDrinkId(spiritValue) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spiritValue}`   // <-- by ingredient API
                                                                                          // NEEDED to input 'https://' in order to request the API
  removeCocktailRecipe()

  try {
    if (spiritValue === undefined) {    // <-- 'null' didn't work due to URL ending w/ 'undefined'. 
      return null
    } else {
      const spiritResponse = await axios.get(url)
      let drinkIds = []
      for (let i = 0; i < spiritResponse.data.drinks.length; i++) {       
        drinkIds.push(spiritResponse.data.drinks[i].idDrink)    
      }
      const randomCocktailId = Math.floor(Math.random() * drinkIds.length)
      
      const cocktail = drinkIds[randomCocktailId]
      const idUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`    // <-- by cocktail details by id API

      const filterResponse = await axios.get(idUrl)
      
      //===========================
      // Appending to the DOM   <-- Work inside of try/catch
      //===========================

      let responseDiv = document.querySelector("#cocktail-response")
      responseDiv.style="margin: 30px 0; padding: 40px 0 30px;"

      let imageDiv = document.createElement("div")
      imageDiv.classList.add = ("cocktail-image")
      responseDiv.append(imageDiv)

      let image = document.createElement("img")
      image.src = filterResponse.data.drinks[0].strDrinkThumb 
      imageDiv.append(image)
      image.style="width: 400px; height: auto; border: 2px solid #000000; margin: 0 20px;"    
      
      let recipeDiv = document.createElement("div")
      recipeDiv.classList.add = ("cocktail-recipe")
      responseDiv.append(recipeDiv)
      recipeDiv.style="width: 475px; margin: 0 25px; padding: 0 auto; " // <-- Lines:60, 69, 74 - Couldn't alter in CSS
      
      let drinkName = document.createElement("h2")    
      drinkName.textContent = filterResponse.data.drinks[0].strDrink
      recipeDiv.append(drinkName)
      
      let listDiv = document.createElement("div")
      listDiv.className = "cocktail-ingredients"
      recipeDiv.append(listDiv)
     
      function myMeasure(drink) {         // <-- pulling both measure & ingredient data. Matching bot sets of data together & appending on sam <li> 
        Object.entries(drink).forEach(([key, value]) => {
          if (key.includes('strIngredient')) {
            if (value !== null) {
              let keyNum = key.split('strIngredient')
              let myDrinkSpecs = document.createElement("li")
              myDrinkSpecs.textContent = `${drink[`strMeasure${keyNum[1]}`]} ${value}`
              listDiv.append(myDrinkSpecs)
            }
          }
        })
      }
      myMeasure(filterResponse.data.drinks[0])   
      
      let drinkInstructions = document.createElement("p")  
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
  
//==============================
// Event Handler for Form
//==============================
const form = document.querySelector("form")
form.addEventListener("submit", getValue)

//==============================
// Removing Previous Responses
//==============================
function removeCocktailRecipe() {
  const removeRecipeDiv = document.querySelector("#cocktail-response")
  if (removeRecipeDiv) {
    while (removeRecipeDiv.lastChild) {
      removeRecipeDiv.removeChild(removeRecipeDiv.lastChild)
    }
  }
}