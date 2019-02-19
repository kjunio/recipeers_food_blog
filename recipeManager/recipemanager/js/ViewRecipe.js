"use strict";
var testRecipe = {
		recipeID : "test",
		name : "Steamed Rice",
		creator : "Lorenzo",
		ingredients : ["2 cups white rice","3 cups water"],
		utensils : ["Measuring cup with a volume of at least 3 cups","Small/Medium Rice Cooker"],
		directions : ["Measure 2 cups of dry rice in measuring cup","Add rice to rice cooker","Measure 3 cups of water in measuring cup","Pour into rice cooker","Close rice cooker lid and turn on","Wait for rice cooker to finish and then sereve"]
};

$(document).ready(recipeUnpacker(testRecipe));

function recipeUnpacker(packedRecipe){
	var recipe = packedRecipe;
	$("#recipeName").text(recipe.name);//set recipe name
	$("#creatorID").text("Created by:"+" "+recipe.creator);//set creator name
	//.forEach() loops through each element in the provided array and will be used to populate lists on the page with data from object arrays
	recipe.ingredients.forEach(function(ingredient){$("#ingredientList").append($('<li/>',{'class':'ingredientListItem', 'text': ingredient}))});
	recipe.utensils.forEach(function(utensil){$("#utensilList").append($('<li/>',{'class':'utensilListItem', 'text': utensil}))});
	recipe.directions.forEach(function(step){$("#stepList").append($('<li/>',{'class':'stepListItem', 'text': step}))});
};

$("#rateButton").on("click",function(event)
{
	var recipeID = testRecipe.recipeID;
	var raterID = "userID";//need to pull id from active login
	var rating = $("#ratingSelector").val();
	var newRating = {
		recipeID: recipeID,
		raterID: raterID,
		rating: rating
	}
});