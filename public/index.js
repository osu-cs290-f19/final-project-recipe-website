/*
 * Authors: Heather DiRuscio and Ryan Persson
 * Email: diruscih@oregonstate.edu,  perssonr@oregonstate.edu
 * GitHub: @heatherdiruscio, @RyanPersson
 * Description: JavaScript for snacc.io
 */

  // a string containing the HTML
  var recipeHTML = Handlebars.templates.recipe(recipeContent);
  submitRecipe(recipeContent);

  // insert into DOM
  var recipeContainer = document.getElementById('recipes');
  recipeContainer.insertAdjacentHTML('beforeend', recipeHTML);

  console.log("== New recipe added with addRecipe().");

}

function submitRecipe(newRecipe) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/recipes");
  xhr.setRequestHeader("Content-Type", "application/json");
  console.log(JSON.stringify(newRecipe));
  xhr.send(JSON.stringify(newRecipe));
  console.log("recipe submmited");

}


var allRecipes = [];


function handleModalAcceptClick() {
  console.log('in handleModalAcceptClick');
  var recipeName = document.getElementById('recipe-name-input').value.trim();
  var time = document.getElementById('recipe-time-input').value.trim();
  var complexity = "_";
  var servings = document.getElementById('recipe-servings-input').value.trim();
  var originalImageURL = document.getElementById('recipe-photo-input').value.trim();
  var creditName = document.getElementById('recipe-credit-name-input').value.trim();
  var creditURL = document.getElementById('recipe-credit-URL-input').value.trim();

  var recipeContent = {
      recipeName: recipeName,
      time: time,
      complexity: complexity,
      servings: servings,
      originalImageURL: originalImageURL,
      creditName: creditName,
      creditURL: creditURL
  };
  console.log('Captured a new recipe from user:' + recipeContent);

  allRecipes.push(recipeContent);
  submitRecipe(recipeContent);

  hideAddRecipeModal();
  clearAddRecipeModalInputs();

}


/*
 * This function clears all filter values, causing all posts to be re-inserted
 * into the DOM.
 */
function clearFiltersAndReinsertRecipes() {

  document.getElementById('filter-text').value = "";
  document.getElementById('filter-time').value = "";
  document.getElementById('filter-complexity').value = "";

  var filterApplianceCheckedInputs = document.querySelectorAll("#filter-appliance input");
  for (var i = 0; i < filterApplianceCheckedInputs.length; i++) {
    filterApplianceCheckedInputs[i].checked = false;
  }

  doFilterUpdate();

}

function clearAddRecipeModalInputs() {
  document.getElementById('recipe-name-input').value = "";
  document.getElementById('recipe-time-input').value = "";
  document.getElementById('recipe-servings-input').value = "";
  document.getElementById('recipe-photo-input').value = "";
  document.getElementById('recipe-credit-name-input').value = "";
  document.getElementById('recipe-credit-URL-input').value = "";
}

function hideAddRecipeModal() {

 $('#addRecipeModal').hide();
 $('.modal-backdrop').hide();

}


function recipePassesFilters(recipe, filters) {

  if (filters.text) {
    var postDescription = post.description.toLowerCase();
    var filterText = filters.text.toLowerCase();
    if (postDescription.indexOf(filterText) === -1) {
      return false;
    }
  }

  if (filters.conditions && filters.conditions.length > 0) {
    if (filters.conditions.indexOf(post.condition) === -1) {
      return false;
    }
  }

  return true;

}



function doFilterUpdate() {

  console.log('in doFilterUpdate()');
  //TODO

  /*
   * Remove all "post" elements from the DOM.
   */
  var recipeContainer = document.getElementById('recipes');
  while(recipeContainer.lastChild) {
    recipeContainer.removeChild(recipeContainer.lastChild);
  }

 
  allRecipes.forEach(function (recipe) {
    if (recipePassesFilters(recipe, filters)) {
      /* TODO: insertNewRecipe is not a real function? */
      insertNewRecipe(recipe.recipeName, recipe.time, recipe.originalImageURL, recipe.creditName, recipe.creditURL, recipe.servings, recipe.complexity);
    }
  });

}



function parseRecipeElem(recipeElem) {


  // return recipe;

}



function getRecipeText(recipeElem) {

}

/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
document.addEventListener('DOMContentLoaded', function () {

  console.log("DOM content loaded");

  var recipeElems = document.getElementsByClassName('recipe');
  for (var i = 0; i < recipeElems.length; i++) {
    allRecipes.push(parseRecipeElem(recipeElems[i]));
  }

  var filterUpdateButton = document.getElementById('filter-update-button');
  if (filterUpdateButton) {
    filterUpdateButton.addEventListener('click', doFilterUpdate)
  }

});
