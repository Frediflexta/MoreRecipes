function getallrecipes() {
  fetch('https://more-recipes-25.herokuapp.com/api/v1/recipes')
  .then((res) => res.json())
  .then(getallrecipes)
  .catch((err) => errorHandler(err, 'Recipes'))
}
function getrecipes(data) {
   let htmlContent = ''

  htmlContent += `<figure>
  <img src="${data.recipes.recipeImage}", alt="${data.recipes.title}">
  <figcaption>${data.recipes.title}, You'll need ${data.recipes.ingredients}</figcaption>
  </figure>
  <h4>${data.recipes.category}</h4>
  <p>This takes ${data.recipes.preparationTime}</p>
  <p>${data.recipes.description}</p>
  `
}
