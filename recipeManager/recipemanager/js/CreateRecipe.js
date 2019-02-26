
"use strict";
/*var intergredientButton = document.getElementById('addIngredient');
intergredientButton.onclick = addIntegredient;
var addUtensilbtn = document.getElementById('addUtensil');
addUtensilbtn.onclick = addUtensil;
var addDirectionbtn = document.getElementById('addStep');
addDirectionbtn.onclick = addDirection;



 function addIntegredient()//adds new item to ingredient list
{
     var ul = document.getElementById('ingredientList');
     var li = document.createElement('li');
    
    //grab ingredient name from input
    var amountUsed = document.getElementById('amountUsedInput'); //grab amount used from input
    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]";

    li.appendChild(checkbox);
    var ingredientName = document.getElementById('ingredientNameInput');
    li.appendChild(document.createTextNode(ingredientName.value +" "+ amountUsed.value));
    ul.appendChild(li); 
	//appends item to existing list
    
    
    document.getElementById('ingredientNameInput').value = "";
    document.getElementById('amountUsedInput').value = "";
}

            

function addUtensil()//adds new item to ingredient list
{
    var ul = document.getElementById('untesilList');
    var li = document.createElement('li');
    
    //grab ingredient name from input
    var utensilDesc = document.getElementById('utensilDescriptionInput'); //grab amount used from input
    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]";

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(utensilDesc.value));
    ul.appendChild(li); 
    //appends item to existing list
    document.getElementById('utensilDescriptionInput').value = "";
 
}

function addDirection()//adds new item to ingredient list
{
    var ol = document.getElementById('stepList');
    var li = document.createElement('li');
    
    //grab ingredient name from input
    var steps = document.getElementById('stepDescriptionInput'); //grab amount used from input
    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]";

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(steps.value));
    ol.appendChild(li); 
    //appends item to existing list
    document.getElementById('stepDescriptionInput').value = "";
 
};*/
var recipeName;
var ingredients;
var directions
var utensils;

$("#addIngredient").on("click", function (event)//adds new item to ingredient list
{
    var ingredientName = $("#ingredientNameInput").val();//grab ingredient name from input
    var amountUsed = $("#amountUsedInput").val();//grab amount used from input
    $("#ingredientList").append($('<li/>', { 'class': 'ingredientListItem', 'text': amountUsed + " " + ingredientName }));//appends item to existing list
});
$("#addUtensil").on("click", function (event)//adds new item to utensil list
{
    var utensilDescription = $("#utensilDescriptionInput").val();//grab utensil description from input
    $("#utensilList").append($('<li/>', { 'class': 'utensilListItem', 'text': utensilDescription }));//appends item to existing list
});
$("#addStep").on("click", function (event)//adds new item to step list
{
    var stepDescription = $("#stepDescriptionInput").val();//grab step description from input
    $("#stepList").append($('<li/>', { 'class': 'stepListItem', 'text': stepDescription }));//appends item to existing list
});




function PassCreateRecipeValues() {
    recipeName = document.getElementById('recipeNameInput').value;
    ingredients = document.getElementById('ingredientList').innerHTML;
    utensils = document.getElementById('utensilList').innerHTML;
    directions = document.getElementById('stepList').innerHTML;

    CreateRecipe(recipeName, ingredients, utensils, directions);


}
function CreateRecipe(recipeName, ingredients, utensils, directions) {
    var webMethod = "../RecipeServices.asmx/RequestRecipe";
    var parameters = "{\"recipeName\":\"" + encodeURI(recipeName) + "\",\"ingredients\":\"" + encodeURI(ingredients) + "\",\"utensils\":\"" + encodeURI(utensils) + "\",\"directions\":\""+ encodeURI(directions)  + "\"}";

    $.ajax({
        type: "POST",
        url: webMethod,
        data: parameters,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            /*if (msg.d !== null) {
                var recipeID = msg.d;*/
              /*  window.open("ViewRecipe.html?id="+ msg.d, "_self");*/
            window.open("ViewRecipe.html", "_self");
            
        },
        error: function (e) {
            alert("boo...");
        }





    });
}
