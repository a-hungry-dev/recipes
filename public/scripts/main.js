document.addEventListener("DOMContentLoaded", function () {

    getRecipes()

});

const getRecipes = async () => {
    const recipesDiv = document.getElementById('recipes')

    const response = await fetch('/api/recipes');
    const { recipes } = await response.json()

    if (recipes.length < 1) {
        let noResultsMessage = document.createElement('div')
        noResultsMessage.innerHTML = 'No recipes found'
        recipesDiv.appendChild(noResultsMessage)
    }

    for (let recipe in recipes) {
        recipe = recipes[recipe];
        let recipeDiv = document.createElement('div')
        recipeDiv.innerHTML = `
            <div class="recipe-name">${recipe.name}</div>
            <div class="recipe-rating">${recipe.rating}</div>
        `
        recipesDiv.appendChild(recipeDiv)
    }
}