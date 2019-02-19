
"use strict";
$("#addIngredient").on("click", function(event)//adds new item to ingredient list
{
	var ingredientName = $("#ingredientNameInput").val()//grab ingredient name from input
	var amountUsed = $("#amountUsedInput").val()//grab amount used from input
});	$("#ingredientList").append($('<li/>',{'class':'ingredientListItem', 'text': amountUsed + " " + ingredientName}));//appends item to existing list


$("#addUtensil").on("click", function(event)//adds new item to utensil list
{
	var utensilDescription = $("#utensilDescriptionInput").val()//grab utensil description from input
	$("#untesilList").append($('<li/>',{'class':'utensilListItem', 'text': utensilDescription}));//appends item to existing list
});

$("#addStep").on("click", function(event)//adds new item to step list
{
	var stepDescription = $("#stepDescriptionInput").val()//grab step description from input
	$("#stepList").append($('<li/>',{'class':'stepListItem', 'text': stepDescription}));//appends item to existing list
});

$("#createButton").on("click", function(event)//creates object from form fields
{
	var recipeName = $("#recipeNameInput").val();//stores name
	var ingredientArray = [];//will be loaded with each ingredient
	var utensilArray = [];//will store utensil list
	var stepArray = [];//stores entered directions
	var userID = "test"; //will eventually hold user ID once server interaction added
	//the following .each functions will loop through each list in the form and add the elements to an array defined earlier
	$(".ingredientListItem").each(function(){ingredientArray.push($(this).text())});
	$(".utensilListItem").each(function(){utensilArray.push($(this).text())});
	$(".stepListItem").each(function(){stepArray.push($(this).text())});
	var recipe = {
		name : recipeName,
		creator : userID,
		ingredients : ingredientArray,
		utensils : utensilArray,
		directions : stepArray
	};
});