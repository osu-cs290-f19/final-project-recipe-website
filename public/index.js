/*
 * Authors: Heather DiRuscio and Ryan Persson
 * Email: diruscih@oregonstate.edu,  perssonr@oregonstate.edu
 * GitHub: @heatherdiruscio, @RyanPersson
 * Description: JavaScript for snacc.io
 */

function addRecipe(recipeName, time, complexity, servings, originalImageURL, creditName, creditURL) {

  // the content to be placed via handlebars
  var recipeContent = {
      description: description,
      photoURL: photoURL,
      price: price,
      city: city,
      recipeName: recipeName,
      time: time,
      complexity: complexity,
      servings: servings,
      originalImageURL: originalImageURL,
      creditName: creditName,
      creditURL: creditURL
  };

  // a string containing the HTML
  var recipeHTML = Handlebars.templates.post(recipeContent);

  // insert into DOM
  var recipeContainer = document.getElementById('recipes');
  recipeContainer.insertAdjacentHTML('beforeend', recipeHTML);

  console.log("== New recipe added with addRecipe().");

}


/*
 * These arrays hold the collection of all post objects and the list of all
 * cities that have been used in posts.
 */
var allRecipes = [];
/*
 * This function checks whether all of the required inputs were supplied by
 * the user and, if so,i nserting a new post into the page constructed using
 * these inputs.  If the user did not supply a required input, they instead
 * recieve an alert, and no new post is inserted.
 */
function handleModalAcceptClick() {
  var recipeName = document.getElementById('recipe-name-input').value.trim();
  var time = document.getElementById('recipe-time-input').value.trim();
  var complexity = document.querySelector('#recipe-complexity-fieldset input:checked').value;
  var servings = document.getElementById('recipe-servings-input').value.trim();
  var originalImageURL = document.getElementById('recipe-photo-input').value.trim();
  var creditName = document.getElementById('recipe-credit-name-input').value.trim();
  var creditURL = document.getElementById('recipe-credit-URL-input').value.trim();

  if (!recipeName || !time || !complexity || !servings || !originalImageURL || !creditName) {
    alert("You must fill in all of the fields!");
  } else {

    allRecipes.push({
      description: description,
      photoURL: photoURL,
      price: price,
      city: city,
      recipeName: recipeName,
      time: time,
      complexity: complexity,
      servings: servings,
      originalImageURL: originalImageURL,
      creditName: creditName,
      creditURL: creditURL
    });

    clearFiltersAndReinsertRecipes();

    hideAddRecipeModal();

  }

}


/*
 * This function clears all filter values, causing all posts to be re-inserted
 * into the DOM.
 */
function clearFiltersAndReinsertRecipes() {
/*
  document.getElementById('filter-text').value = "";
  document.getElementById('filter-min-price').value = "";
  document.getElementById('filter-max-price').value = "";
  document.getElementById('filter-city').value = "";

  var filterConditionCheckedInputs = document.querySelectorAll("#filter-condition input");
  for (var i = 0; i < filterConditionCheckedInputs.length; i++) {
    filterConditionCheckedInputs[i].checked = false;
  }
*/
  doFilterUpdate();

}

/*
 * This function shows the "add recipe" modal by removing the "hidden"
 * class from the modal and backdrop.
 */
function showAddRecipeModal() {
  console.log('in showAddRecipeModal');
  
  var showAddRecipeModal = document.getElementById('add-recipe-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  showAddRecipeModal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');

}


/*
 * This function clears any user-entered inputs in the "sell something" modal.
 */
function clearAddRecipeModalInputs() {
  /*TODO*/
}


/*
 * This function hides the "sell something" modal by adding the "hidden"
 * class from the modal and backdrop.  It also clears any existing inputs in
 * the modal's input fields when the modal is hidden.
 */
function hideaddRecipeModal() {

  var showAddRecipeModal = document.getElementById('add-recipe-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  showAddRecipeModal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');

  clearAddRecipeModalInputs();

}


/*
 * A function to apply the current filters to a specific post.  Returns true
 * if the post passes the filters and should be displayed and false otherwise.
 */
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


/*
 * Applies the filters currently entered by the user to the set of all posts.
 * Any post that satisfies the user's filter values will be displayed,
 * including posts that are not currently being displayed because they didn't
 * satisfy an old set of filters.  Posts that don't satisfy the filters are
 * removed from the DOM.
 */
function doFilterUpdate() {

  //TODO

  /*
   * Remove all "post" elements from the DOM.
   */
  var recipeContainer = document.getElementById('recipes');
  while(recipeContainer.lastChild) {
    recipeContainer.removeChild(recipeContainer.lastChild);
  }

  /*
   * Loop through the collection of all "post" elements and re-insert ones
   * that meet the current filtering criteria.
   */
  allRecipes.forEach(function (recipe) {
    if (recipePassesFilters(recipe, filters)) {
      insertNewRecipe(recipe.description, post.photoURL, post.price, post.city, post.condition);
    }
  });

}


/*
 * This function parses an existing DOM element representing a single post
 * into an object representing that post and returns that object.  The object
 * is structured like this:
 *
 * {
 *   description: "...",
 *   photoURL: "...",
 *   price: ...,
 *   city: "...",
 *   condition: "..."
 * }
 */
function parseRecipeElem(recipeElem) {


  return recipe;

}


/*
 * This function gets all of the data fields from a recipe as text in order to apply the search function.
 *
 *
 */

function getRecipeText(recpeElem) {
  
}

/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function () {

  /*
   * Remember all of the initial post elements initially displayed in the page.
   */
  var recipeElems = document.getElementsByClassName('recipe');
  for (var i = 0; i < recipeElems.length; i++) {
    allRecipes.push(parseRecipeElem(recipeElems[i]));
  }
  var addRecipeButton = document.getElementById('add-recipe-button');
  if (addRecipeButton) {
    addRecipeButton.addEventListener('click', showAddRecipeModal);
  }

  var modalAcceptButton = document.getElementById('modal-accept');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
  }

  var modalHideButtons = document.getElementsByClassName('modal-hide-button');
  for (var i = 0; i < modalHideButtons.length; i++) {
    modalHideButtons[i].addEventListener('click', hideAddRecipeModal);
  }

  var filterUpdateButton = document.getElementById('filter-update-button');
  if (filterUpdateButton) {
    filterUpdateButton.addEventListener('click', doFilterUpdate)
  }

});
