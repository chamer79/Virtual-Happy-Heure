    // -- Create Dynamic Dropdown Menu --  <-- VERY HAPPY Possible Code Snippet
function menuOptions(list) {
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
  return list
}
menuOptions()
    
    
    // -- Create For Option Tags --
  // * Refer to lines 9-13

    
    
    // -- Get Option Value Tag --
function getValue(e) {
  e.preventDefault()
  const optionValue = document.querySelector("#select-spirits")
  console.log(optionValue)  // <--sanity check  
  // getDrinkId(optionValue)
  return optionValue
}
    
    
    
    // -- Event Handler for Form --
const form = document.querySelector("form")
form.addEventListener("submit", getValue)
    
    
    
    // -- API Request for Ingredients Data --
async function getDrinkId(spiritValue) {
  // menuOptions = spiritValue
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spiritValue}`  // <-- NEEDED to input 'https://' in order to request the API

  try {
    const spiritResponse = await axios.get(url)
    console.log(spiritResponse.data.idDrink) //<--sanity check  logging 'undefinded'
    const spiritDrinkId = spiritResponse.data.idDrink
 
    // menuOptions(spiritList)  // <--RefenceError: spiritList is not defined @ getDrinkId
  }
  catch (error) {
    console.error (error)
  }
  return spiritValue
}
getDrinkId()

    
    // -- API Request for Random Coctail Recipe Data --
// async function 


    
    // --Connecting both APIs together --



    
    // --Create Dynamic Tags & Append to the DOM: Image & Article




    // -- Remove Previous Results



