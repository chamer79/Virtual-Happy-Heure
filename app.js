    // -- Create Dynamic Dropdown Menu --
function baseSpirit() {
  const selectTag = document.querySelector("#select-spirit")
  const spirit = ["Bourbon", "Gin", "Tequila", "Vodka", "Rum"]
  
  for (let i = 0; i < spirit.length; i++) {
    // console.log(spirit[i])   // <-- sanity check
    let spiritList = spirit[i]
    let optionTag = document.createElement("option")

    optionTag.textContent = spirit[i]
    optionTag.value = spirit
    selectTag.appendChild(optionTag)
  }
}
baseSpirit()
    
    
    // -- Create For Option Tags --


    
    
    // -- Get Option Value Tag --

    
    
    
    // -- Event Handler for Form --

    
    
    
    // -- API Request for Ingredients Data --



    
    // -- API Request for Random Coctail Recipe Data --



    
    // --Connecting both APIs together --



    
    // --Create Dynamic Tags & Append to the DOM: Image & Article




    // -- Remove Previous Results



    