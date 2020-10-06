//No changes needed.
class Recipe {
  constructor(name, catego, description){
    this.name = name;
    this.catego = catego;
    this.description = description;
  }
}

class UI {
  addRecipeToList(recipe) {
    const list = document.getElementById('category');
    const article = document.createElement('article');
    
    let htlm = '<p>'+
      '<h3 class="recipe-category">'+recipe.catego+'</h3></p>'
      +'<p><img src="images/steak.jpg" alt="Steak picture"></p>'
      +'<h4>'+recipe.name+'</h4>'
      +'<p>'+recipe.description+'</p>'
      +'<button id="delete">Delete</button>'
    
    article.innerHTML = htlm
    list.appendChild(article);
  }

  deleteRecipe(target) {
    // Delete recipe article
    if (target.className === 'delete') {
      target.parentElement.remove();
    }
  }
}

document.getElementById('recipe-form').addEventListener('submit',function(e){
  //Get form value
  e.preventDefault();

  const name = document.getElementById('name').value,
        catego = document.getElementById('catego').value,
        description = document.getElementById('description').value
  const recipe = new Recipe(name, catego, description);

  //instatiate ui
  const ui = new UI();

  //add recipe to
  ui.addRecipeToList(recipe);
});

//Event for delete
document.getElementById('category').addEventListener('click', function(e){
  const ui = new UI();
        ui.deleteRecipe(e.target);
        e.preventDefault();
})