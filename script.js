let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let userInput = document.getElementById("user-input").value;

fetch(url + "pizza")
    .then((response) => response.json())
    .then((data) => {
        let myMeal = data.meals[0]
        console.log(myMeal)
        console.log(myMeal.strMealThumb)
        console.log(myMeal.strMeal)
        console.log(myMeal.strArea)
        console.log(myMeal.strInstructions)
        let count = 1;
        let ingredients = [];
        for (let i in myMeal) {
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && myMeal
            [i]) {
                ingredient = myMeal[i];
                measure = myMeal[`strMeasure` + count];
                count += 1;
                ingredients.push(`${measure} ${ingredient}
                `)
            }
        }

        console.log(ingredients);

        /***Template Literal***/

        result.innerHTML = `
        <img src= ${myMeal.strMealThumb}>
        <div class="details">
           <h2>${myMeal.strMeal}</h2>
           <h4>${myMeal.strArea}</h4>
        </div>

        <div id="ingredient-con"></div>
        <div id="recipe">
            <button id="hide-recipe">X</button>
            <pre id="instructions">${myMeal.strInstructions}</pre>
        </div>
        
        <button id="show-recipe">View Recipe</button>
        `;

        let ingredientCon = document.getElementById("ingredient-con";)

    });