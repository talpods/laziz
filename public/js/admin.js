/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/recipes.json":
/*!*****************************!*\
  !*** ./src/js/recipes.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"url":"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80","title":"Rib-eye Steak","duration":"15 mins","isPublished":true,"steps":[{"title":"Heat the plate over 500f","duration":"5 mins"},{"title":"Cook the first side of the steak with no oil and butter","duration":"5 mins"},{"title":"Flip the steak, cook the second side of the steak until it\'s ready","duration":"5 mins"},{"title":"Enjoy 😆"}]},{"url":"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsbW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","title":"Salmon","duration":"1 h","isPublished":false},{"url":"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","title":"Mandi","duration":"1:30 h","isPublished":false}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/admin.js ***!
  \*************************/
var recipes = __webpack_require__(/*! ./recipes.json */ "./src/js/recipes.json");

var renderRecipe = function renderRecipe(_ref, sampleRow) {
  var title = _ref.title,
      duration = _ref.duration,
      url = _ref.url,
      isPublished = _ref.isPublished;
  var row = sampleRow.cloneNode(true);
  row.id = Math.random();
  row.querySelector('.recipe-image').src = url;
  row.querySelector('.recipe-title').innerText = title;
  row.querySelector('.recipe-duration').innerText = duration;

  if (isPublished) {
    row.querySelector('.recipe-status').innerText = "Published";
  } else {
    row.querySelector('.recipe-status').innerText = "Draft";
    row.querySelector('.recipe-status').classList.remove('bg-green-100');
    row.querySelector('.recipe-status').classList.remove('text-green-800');
    row.querySelector('.recipe-status').classList.add('bg-gray-100');
    row.querySelector('.recipe-status').classList.add('text-gray-800');
  }

  row.querySelector('.recipe-delete').addEventListener('click', function () {
    row.remove();
  });
  document.getElementById('recipes-box').append(row);
};

var renderRecipesToTable = function renderRecipesToTable(recipes) {
  var sampleRow = document.getElementById('sample-row').cloneNode(true);
  document.getElementById('sample-row').remove();
  recipes.forEach(function (recipeData) {
    return renderRecipe(recipeData, sampleRow);
  });
};

renderRecipesToTable(recipes);
})();

/******/ })()
;