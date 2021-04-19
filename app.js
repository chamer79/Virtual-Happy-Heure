    // -- Create Dynamic Dropdown Menu --
function menuOptions() {
  const selectTag = document.querySelector("#select-spirit")
  const spirit = ["Bourbon", "Gin", "Tequila", "Vodka", "Rum"]
  
  for (let i = 0; i < spirit.length; i++) {
    // console.log(spirit[i])   // <-- sanity check
    let spiritList = spirit[i]
    let optionTag = document.createElement("option")  // <-- Create For Option Tags

    optionTag.textContent = spirit[i]   
    optionTag.value = spirit
    selectTag.appendChild(optionTag)
  }
}
menuOptions()
    
    
    // -- Create For Option Tags --
  // * Refer to lines 9-13

    
    
    // -- Get Option Value Tag --
function getValue(e) {
  e.preventDefault()
  const optionValue = document.querySelector("#select-spirits")
  console.log(optionValue)  // <--sanity check  coming up as null at line 44
  
  return optionValue
}
    
    
    
    // -- Event Handler for Form --
const form = document.querySelector("form")
form.addEventListener("submit", getValue)
    
    
    
    // -- API Request for Ingredients Data --
async function baseSpirit(spirit) {
  menuOptions = spirit
  const url = (`www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin`)

  try {
    const response = await axios.get(url)
    console.log(response) //<--sanity check
  }
  catch (error) {
    console.error (error)
  }
}
baseSpirit()

    
    // -- API Request for Random Coctail Recipe Data --



    
    // --Connecting both APIs together --



    
    // --Create Dynamic Tags & Append to the DOM: Image & Article




    // -- Remove Previous Results



    