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
    console.log(optionValue)  // <--sanity check  
    getDrinkId(optionValue)

 
  // ***CALL RX VALUE HERE
}
    
    
    
    // -- Event Handler for Form --
const form = document.querySelector("form")
form.addEventListener("submit", getValue)

    
    // -- API Request for Ingredients Data --
async function getDrinkId(spiritValue) {
  // console.log("HERE HERE:", spiritValue)    // <-sanity check *shows up as 'undefined' until base spirit is selected
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spiritValue}`  // <-- NEEDED to input 'https://' in order to request the API

  try {
    if (spiritValue === undefined) {    // <--URL ENDED w/ undefined. 
      return null
    } else {
      const spiritResponse = await axios.get(url)
      // console.log(spiritResponse.data.drinks[0].idDrink) //<--sanity check  logging idDrink
      const spiritDrinkId = spiritResponse.data.drinks[0].idDrink
    }
  }
  catch (error) {
    console.error (error)
  }
  return spiritValue
}
getDrinkId()

    
    // -- API Request for Random Coctail Recipe Data --  **RANDOM NUMBER GENRATOR NEEDED....Would need to go to getDrinkId??? :/
async function getCocktail(cocktailValue) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  try {
      const cocktailResponse = await axios.get(url)
      console.log(cocktailResponse.data.drinks[0])    // <-- sanity check logging all info
      const cocktailData = cocktailResponse.data.drinks[0]
      // showCocktailData(cocktailResponse.data.drinks[0])    // <--TYPEERROR: CAN'T READ PROPERTY '0' OF UNDEFINED @ showCocktailData #87 & getCocktail #71
        // Image
    let cocktailImage = document.querySelector("#cocktail-image")
    
    let image = document.createElement("img")
    image.src = cocktailResponse.data.drinks[0].strDrinkThumb 
    cocktailImage.append(image)
    
    let cocktailRecipe = document.querySelector("#cocktail-recipe")    

    let drinkName = document.createElement("h2")    // <--Pulling Recipe data
    drinkName.textContent = cocktailResponse.data.drinks[0].strDrink
    cocktailRecipe.append(drinkName)
    
    let drinkGlass = document.createElement("h3")   // <--Pulling Glass data
    drinkGlass.textContent = cocktailResponse.data.drinks[0].strGlass
    cocktailRecipe.append(drinkGlass)

    let listDiv = document.createElement("div")
    listDiv.className = "cocktail-ingredients"
    // console.log("Ingredient div here:", listDiv)    // <-- sanity check
    cocktailRecipe.append(listDiv)
    
    let drinkMeasure = cocktailResponse.data.drinks[0].strMeasure1    // <-- '1' is for sanity check
        
    
    
    
    
    //Attempt to pull ALL measure stings
    // for (let i = 1; i < 15; i++) {
    //   if (drinkMeasure === null) {
    //     return null 
    //   } else {
    //    drinkMeasure ++
    //   }
    //   return drinkMeasure
    // }
    
    
    
    
    let drinkIngredient = cocktailResponse.data.drinks[0].strIngredient1
    
    
    
    
    
    
    let myDrinkSpecs = document.createElement("li")
    myDrinkSpecs.textContent = `${drinkMeasure} ${drinkIngredient}`
    listDiv.append(myDrinkSpecs)


  
    
    let drinkInstructions = document.createElement("p")   // <--Pulling Instructions data
    drinkInstructions.textContent = cocktailResponse.data.drinks[0].strInstructions
    cocktailRecipe.append(drinkInstructions)

  }
  catch (error) {
    console.error(error)
  }
  return cocktailValue
}
getCocktail()

    
  //  --Create Dynamic HTML & Append to the DOM: 
  //    ->image, h2, h3, ul / li, & p

              // ***FIRST ATTEMPT****   <---nothing popped up....realized forgot .textContent.  doah!
  // function showCocktailData(data) {
//   console.log("Inside showCocktailData:", data)   // <--sanity check *Coming up as undefinded. WHY?? :/
    
  //  let cocktailData = `
  // <img id="cocktail-image"  src="${data.drinks[0].strDrinkThumb}" alt="cocktail image" style="width: 250px; height: auto;">
  // <h2>Cocktail: ${data.drinks[0].strDrink}</h2>
  // <h3>Glass: ${data.drinks[0].strGlass}</h3>
  // <p>Instrictions:  ${data.drinks[0].strIntructions}</p>
  // `
  // console.log("Data Requesting Here:", cocktailData)    // <-- sanity check *Doesn't appear to be logging in console.  WHY??  :/

  // document.querySelector("#cocktail-image").insertAdjacentHTML("beforeend", cocktailData) 
      //^^Above goes w/ code on lines 86-91
  // return cocktailData   
// }
// showCocktailData()






    // --Connecting both APIs together --



    
 
    // -- Remove Previous Results



