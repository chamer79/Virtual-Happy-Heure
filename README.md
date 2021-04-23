# Project Overview

## Project Name

Virtual Happy Heure  (Virtual Happy Hour)

## Project Description

A website that will randomly generate a cocktail recipe, with image, based on the based spirit chosen.

## API and Data Sample
APIs provided by The CocktailDb.com

API data sample for requesting ingredients. 
```json
{
    "drinks": [
        {
            "strDrink": "3-Mile Long Island Iced Tea",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
            "idDrink": "15300"
        },
        {
            "strDrink": "69 Special",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
            "idDrink": "13940"
        },
        {
            "strDrink": "A1",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
            "idDrink": "17222"
        },
        {
            "strDrink": "Abbey Cocktail",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg",
            "idDrink": "17834"
        }
   ]
}	
```

API data sample for requesting a cocktail details by id
```json
{
    "drinks": [
        {
            "idDrink": "11007",
            "strDrink": "Margarita",
            "strDrinkAlternate": null,
            "strTags": "IBA,ContemporaryClassic",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": "Contemporary Classics",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            "strInstructionsES": null,
            "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
            "strInstructionsFR": null,
            "strInstructionsIT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
            "strInstructionsZH-HANS": null,
            "strInstructionsZH-HANT": null,
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Triple sec",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": null,
            "strIngredient6": null,
            "strIngredient7": null,
            "strIngredient8": null,
            "strIngredient9": null,
            "strIngredient10": null,
            "strIngredient11": null,
            "strIngredient12": null,
            "strIngredient13": null,
            "strIngredient14": null,
            "strIngredient15": null,
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1/2 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": null,
            "strMeasure5": null,
            "strMeasure6": null,
            "strMeasure7": null,
            "strMeasure8": null,
            "strMeasure9": null,
            "strMeasure10": null,
            "strMeasure11": null,
            "strMeasure12": null,
            "strMeasure13": null,
            "strMeasure14": null,
            "strMeasure15": null,
            "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
            "strImageAttribution": "Cocktailmarler",
            "strCreativeCommonsConfirmed": "Yes",
            "dateModified": "2015-08-18 14:42:59"
        }
    ]
}
```

## Wireframes

[Wireframe]{https://www.figma.com/file/4t0l59CGg28AkRKUjPtDjV/Virtual-Happy-Heure-Desktop?node-id=3%3A2}

### MVP/PostMVP

#### MVP 
```
-Add HTML & connect all files.
-Create dynamic dropdown menu.
-Create form option tags.
-Get option value tag.
-Event handler for form. 
-API request for ingredients data.
-API request for cocktail details by id data.
-Connecting both APIs together.
-Create dynamic tags & append to the DOM.
-Remove previous results.
-Style with CSS.
-CSS responsive design.
-Ding! Done!!
```

#### PostMVP  

```
-Dry up hard code.
-Add a cocktail shaker animation.
-Add a " Feeling Lucky" button that produce a randomly generated cocktail option.
-Adding images to each option on the dropdown menu.
-Add a gradient effect to the header's background image.
-Add hover effect to dropdown menu.
-Fix responsive design to image & recipe. 
-Ask a UX student for input.
```

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|April 19| Project Approval | Complete
|April 20| Core application structure (HTML, CSS, etc.) | Complete
|April 20| Pseudocode | Complete
|April 20| Dropdown menu code | Complete
|April 20| Requesting APIs: ingredients | Complete
|April 20| Requesting APIs: cocktail details by id | Complete
|April 21| Dynamic tags & append to DOM  | Complete
|April 21| Connecting both APIs | Complete
|April 21| Remove previous results  | Complete
|April 22| CSS | Complete
|April 23| Presentations | Complete

## Priority Matrix

[Priorty Matrix] {https://www.figma.com/file/UzrCJwd54pW3og75mxgyht/Virtual-Happy-Heure-Priority-Matrix?node-id=0%3A1}

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | M | 3hrs| 1.15hrs | 1.15hrs |
| Dropdown Menu | H | 4hrs| 6hrs | 6hrs |
| Requesting Ingredient API | H | 5hrs| 4hrs | 4hrs |
| RequestRandom Cocktail API | H | 5hrs| 4.5hrs | 4.5hrs |
| Dynamic tags & append to DOM: image & article | M-H | 4hrs| 5.75hrs | 5.75hrs |
| Connecting both APIs together | H | 5hrs| 7.5hrs | 7.5hrs |
| Remove previous results | H | 4hrs| 1.5hrs | 1.5hrs |
| CSS | M | 8hrs| 7hrs | 7hrs |
| Total | H | 38hrs| 37.5hrs | 37.5hrs |

## Code Snippet

```
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
```

First time making a dropdown menu in JS. 

## Change Log
Decided to use the 'cocktail details by id' API url instead of the 'random cocktail' url. Using the 'cocktails by detail id' API was easier to link the two APIs together with the 'idDrink' key inorder to produce the desired result.
