
function MenuItem(name, recipe, img, cals, gluten, lact) {
  this.name = name;
  this.calories = cals;
  this.gluten = gluten;
  this.lactose = lact;
  this.image = img;
  this.recipe = recipeGenerator(recipe);
}

function recipeGenerator(recipeList){
  return recipeList
}

function getImage(img){
  var image = document.createElement(img);
  image.src = img;
  return image;
}


/*function clicked(){
  console.log("button clicked!")
}

var orderButton = document.getElementById("orderButton");
orderButton.onclick = clicked;*/
