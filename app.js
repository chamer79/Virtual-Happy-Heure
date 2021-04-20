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
    console.log(optionValue)  // <--sanity check  **Logging Null HERE
    getDrinkId(optionValue)

 
  // ***CALL RX VALUE HERE
}
    
    
    
    // -- Event Handler for Form --
const form = document.querySelector("form")
form.addEventListener("submit", getValue)

    
    // -- API Request for Ingredients Data --
async function getDrinkId(spiritValue) {
  // console.log("HERE HERE:", spiritValue)
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spiritValue}`  // <-- NEEDED to input 'https://' in order to request the API

  try {
    if (spiritValue === undefined) {    // <--URL ENDED w/ undefined. 
      return null
    } else {
      const spiritResponse = await axios.get(url)
      console.log(spiritResponse.data.drinks[0].idDrink) //<--sanity check  logging 'undefinded'
      const spiritDrinkId = spiritResponse.data.drinks[0].idDrink
    }
  }
  catch (error) {
    console.error (error)
  }
  return spiritValue
}
getDrinkId()

    
    // -- API Request for Random Coctail Recipe Data --  **RANDOM NUMBER GENRATOR NEEDED
async function getCocktail(cocktailValue) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  try {
    const cocktailResponse = await axios.get(url)
    console.log(cocktailResponse.data.drinks)
  }
  catch (error) {
    console.error(error)
  }
  return cocktailValue
}
getCocktail()

    
    // --Connecting both APIs together --



    
    // --Create Dynamic Tags & Append to the DOM: Image & Article
          // *** REFER TO COUNTRY LAB LINES 47-65



    // -- Remove Previous Results



