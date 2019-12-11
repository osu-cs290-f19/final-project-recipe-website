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


/***************************************************************************
 **
 ** You should not modify any of the functions below.
 **
 ***************************************************************************/

/*
 * These arrays hold the collection of all post objects and the list of all
 * cities that have been used in posts.
 */
var allRecipes = [];
//var allCities = [];

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

    //addCityToAllCities(city);

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
 * This function checks to see if a city is included in the collection of all
 * cities for which we have a post.  If it's not, the new city is added to the
 * collection.
 */
function addCityToAllCities(city) {

  /*
   * If city doesn't already exist in the list of cities by which we can
   * filter, add it.
   */
  if (allCities.indexOf(city.toLowerCase()) === -1) {
    allCities.push(city.toLowerCase());
    var newCityOption = createCityOption(city);
    var filterCitySelect = document.getElementById('filter-city');
    filterCitySelect.appendChild(newCityOption);
  }

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
/*
  var postTextInputElements = [
    document.getElementById('post-text-input'),
    document.getElementById('post-photo-input'),
    document.getElementById('post-price-input'),
    document.getElementById('post-city-input')
  ];
*/
  /*
   * Clear any text entered in the text inputs.
   */

/*
  postTextInputElements.forEach(function (inputElem) {
    inputElem.value = '';
  });
*/
  /*
   * Grab the originally checked radio button and make sure it's checked.
   */
   /*
  var checkedPostConditionButton = document.querySelector('#post-condition-fieldset input[checked]');
  checkedPostConditionButton.checked = true;
*/
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
 * This function creates a new <option> element containing a given city name.
 */
function createCityOption(city) {
  var newCityOption = document.createElement('option');
  newCityOption.textContent = city;
  return newCityOption;
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

  if (filters.minPrice) {
    var filterMinPrice = Number(filters.minPrice);
    if (Number(post.price) < filterMinPrice) {
      return false;
    }
  }

  if (filters.maxPrice) {
    var filterMaxPrice = Number(filters.maxPrice);
    if (Number(post.price) > filterMaxPrice) {
      return false;
    }
  }

  if (filters.city) {
    if (post.city.toLowerCase() !== filters.city.toLowerCase()) {
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

  /*
   * Grab values of filters from user inputs.
   */
  var filters = {
    text: document.getElementById('filter-text').value.trim(),
    minPrice: document.getElementById('filter-min-price').value,
    maxPrice: document.getElementById('filter-max-price').value,
    city: document.getElementById('filter-city').value.trim(),
    conditions: []
  }

  var filterConditionCheckedInputs = document.querySelectorAll("#filter-condition input:checked");
  for (var i = 0; i < filterConditionCheckedInputs.length; i++) {
    filters.conditions.push(filterConditionCheckedInputs[i].value);
  }

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

  var recipe = {
    price: postElem.getAttribute('data-price'),
    city: postElem.getAttribute('data-city'),
    condition: postElem.getAttribute('data-condition')
  };

  var postImageElem = postElem.querySelector('.post-image-container img');
  post.photoURL = postImageElem.src;
  post.description = postImageElem.alt;

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

  /*
   * Grab all of the city names already in the filter dropdown.
   */
  var filterCitySelect = document.getElementById('filter-city');
  if (filterCitySelect) {
    var filterCityOptions = filterCitySelect.querySelectorAll('option:not([selected])');
    for (var i = 0; i < filterCityOptions.length; i++) {
      allCities.push(filterCityOptions[i].value.trim().toLowerCase());
    }
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
