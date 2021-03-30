let recipes = require('./recipes.json');


const renderRecipe = ({ title, duration, url , isPublished }, sampleRow) => {
    let row = sampleRow.cloneNode(true);
    row.id = Math.random();

    row.querySelector('.recipe-image').src = url;
    row.querySelector('.recipe-title').innerText = title;
    row.querySelector('.recipe-duration').innerText = duration;
    
    if(isPublished) {
        row.querySelector('.recipe-status').innerText = "Published";
    }else {
        row.querySelector('.recipe-status').innerText = "Draft";
        row.querySelector('.recipe-status').classList.remove('bg-green-100')
        row.querySelector('.recipe-status').classList.remove('text-green-800')
        row.querySelector('.recipe-status').classList.add('bg-gray-100')
        row.querySelector('.recipe-status').classList.add('text-gray-800')
    }

    row.querySelector('.recipe-delete').addEventListener('click', () => {
        row.remove();
    })

    document.getElementById('recipes-box').append(row);
}

const renderRecipesToTable = (recipes) => {
    let sampleRow = document.getElementById('sample-row').cloneNode(true);
    
    document.getElementById('sample-row').remove();

    recipes.forEach(recipeData => renderRecipe(recipeData, sampleRow));
}

renderRecipesToTable(recipes);