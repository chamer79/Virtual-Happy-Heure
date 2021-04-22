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
  // getCocktail(optionValue)
 }
        

                // ** Might forgo this code block - possible but turning more into a PMVP than a MVP???
// //     // -- API Request for Ingredients Data / Base Spirit --
async function getDrinkId(spiritValue) {
  // console.log("HERE HERE:", spiritValue)    // <-sanity check *shows up as 'undefined' until base spirit is selected
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spiritValue}`  // <-- NEEDED to input 'https://' in order to request the API

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
      console.log(filterResponse.data.drinks[0])

      let cocktailImage = document.querySelector("#cocktail-image")
    
    let image = document.createElement("img")
    image.src = filterResponse.data.drinks[0].strDrinkThumb 
    cocktailImage.append(image)
    
    let cocktailRecipe = document.querySelector("#cocktail-recipe")    

    let drinkName = document.createElement("h2")    // <--Pulling Recipe data
    drinkName.textContent = filterResponse.data.drinks[0].strDrink
    cocktailRecipe.append(drinkName)
    


    let listDiv = document.createElement("div")
    listDiv.className = "cocktail-ingredients"
    // console.log("Ingredient div here:", listDiv)    // <-- sanity check
    cocktailRecipe.append(listDiv)
    
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
    myMeasure(filterResponse.data.drinks[0].strInstructions)   // <-- w/out coctailData = TypeError: Can't convert undefined or null to object...
         
    let drinkInstructions = document.createElement("p")   // <--Pulling Instructions data
    drinkInstructions.textContent = filterResponse.data.drinks[0].strInstructions
    cocktailRecipe.append(drinkInstructions)
    
    
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
    

// //     // -- API Request for Random Coctail Recipe Data --  **RANDOM NUMBER GENRATOR NEEDED....Would need to go to getDrinkId??? :/
// async function getCocktail(cocktailValue) {
//   const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  
//   try {
    
//     const cocktailResponse = await axios.get(url)
//     console.log(cocktailResponse.data.drinks[0])    // <-- sanity check logging all info
//     const cocktailData = cocktailResponse.data.drinks[0]
//     const drinkID = cocktailResponse.data.drinks[0].idDrink
//     console.log("TEST:", drinkID)
//     const idUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`
    
    
    
//         // Image
//     let cocktailImage = document.querySelector("#cocktail-image")
    
//     let image = document.createElement("img")
//     image.src = cocktailResponse.data.drinks[0].strDrinkThumb 
//     cocktailImage.append(image)
    
//     let cocktailRecipe = document.querySelector("#cocktail-recipe")    

//     let drinkName = document.createElement("h2")    // <--Pulling Recipe data
//     drinkName.textContent = cocktailResponse.data.drinks[0].strDrink
//     cocktailRecipe.append(drinkName)
    
// //         // ****  Debating to include 'glass' ...incorrect glass names don't match up to image.  
// //     // let drinkGlass = document.createElement("h3")   // <--Pulling Glass data
// //     // drinkGlass.textContent = cocktailResponse.data.drinks[0].strGlass
// //     // cocktailRecipe.append(drinkGlass)

//     let listDiv = document.createElement("div")
//     listDiv.className = "cocktail-ingredients"
//     // console.log("Ingredient div here:", listDiv)    // <-- sanity check
//     cocktailRecipe.append(listDiv)
    
//     function myMeasure(drink) {
//       Object.entries(drink).forEach(([key, value]) => {
//         if (key.includes('strIngredient')) {
//           if (value !== null) {
//             let keyNum = key.split('strIngredient')
//             // console.log(keyNum)
//             // console.log(`${drink[`strMeasure${keyNum[1]}`]} ${value}`)
//             let myDrinkSpecs = document.createElement("li")
//             myDrinkSpecs.textContent = `${drink[`strMeasure${keyNum[1]}`]} ${value}`
//             listDiv.append(myDrinkSpecs)
//           }
//         }
//       })
     
//     }
//     myMeasure(cocktailData)   // <-- w/out coctailData = TypeError: Can't convert undefined or null to object...
         
//     let drinkInstructions = document.createElement("p")   // <--Pulling Instructions data
//     drinkInstructions.textContent = cocktailResponse.data.drinks[0].strInstructions
//     cocktailRecipe.append(drinkInstructions)
    
    // removeCocktailImage()
    // removeCocktailRecipe()
  // }
//   catch (error) {
//     console.error(error)
//   }
//   return cocktailValue
// }

// const cocktailResult = (drink, baseSpirit) => {
//   if (drink.includes(baseSpirit) === true) {
//     return ture
//   } else {
//     return false
//   }
// } 
// console.log ("TEST TEST:", cocktailResult)

    
  //  --Create Dynamic HTML & Append to the DOM: 
  //    ->image, h2, h3, ul / li, & p
        // *** Please refer to lines 66-126.
  
  
    // --Connecting both APIs together --
    // ** Second Attempt
  


          // ** First Attempt
  // const cocktailResult = (drink, spiritValue) => {
  //let matchingSpirit = []
  // let compare = (ingredient1, ingredient2) => {
  //     if (ingredient2.includes(ingredient1[i]) !== false) {
  //         matchingSpirit.push(ingredient1[i])
  //     }
  //   }
  //   compare(drink, spiritValue)
  //   compare(spiritValue, drink)
  // }
 





   
 
    // -- Remove Previous Results
// function removeCocktailImage() {
//   const removeImage = document.querySelector("cocktail-image")
//   while (removeImage.lastChild) {
//     removeImage.removeChild(removeImage.lastChild)
//   }
// }

// function removeCocktailRecipe() {
//   const removeRecipe = document.querySelector("cocktail-recipe")
//   while (removeRecipe.lastChild) {
//     removeRecipe.removeChild(removeRecipe.lastChild)
//   }
// }





        // --- BEGINNING OF DRY DANAMIC HTML & APPENDING
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


                // ** Might forgo this code block - possible but turning more into a PMVP than a MVP???
// //     // -- API Request for Ingredients Data / Base Spirit --
// async function getDrinkId(spiritValue) {
//   // console.log("HERE HERE:", spiritValue)    // <-sanity check *shows up as 'undefined' until base spirit is selected
//   const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spiritValue}`  // <-- NEEDED to input 'https://' in order to request the API

//   try {
//     if (spiritValue === undefined) {    // <--URL ENDED w/ undefined. 
//       return null
//     } else {
//       const spiritResponse = await axios.get(url)
//       console.log(spiritResponse.data.drinks[0].idDrink) //<--sanity check  logs idDrink 
//       const spiritDrinkId = spiritResponse.data.drinks[0].idDrink    // <-- Calls 1st idDrink value
      
      
//           // ** 3rd Attempt v1.0    
//       // const idValue = Object.values(spiritDrinkId)
//       // console.log("Test", idValue)    // <-- logging value array in single number / non id
  
//         // ** 3rd Attempt v2.0
//       // const idValue = Object.getValue(spiritDrinkId)
//       // console.log("TEST:", idValue)
      
       
//         // const randomCocktailId = [Math.floor(Math.random() * spiritDrinkId.length)]
//         // console.log(randomCocktailId)   // <--logs random number...but not id :/
     
      
//           // **First Attempt to create a random drink id from base spirit**
//       // const spiritDrinkId = Object.value(idDrink)
//       // const randomBaseIndex = Math.floor(Math.random() * spiritDrinkId.length)
//       // const randomBaseKey = spiritDrinkId[randomBaseIndex]
//       // const randomBaseId = idDrink[randomBaseKey]
//     }
//   }
//   catch (error) {
//     console.error (error)
//   }
//   return spiritValue
// }
// getDrinkId()