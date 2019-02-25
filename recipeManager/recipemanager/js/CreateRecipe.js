
"use strict";
var intergredientButton = document.getElementById('addIngredient');
intergredientButton.onclick = addIntegredient;
var addUtensilbtn = document.getElementById('addUtensil');
addUtensilbtn.onclick = addUtensil;
var addDirectionbtn = document.getElementById('addStep');
addDirectionbtn.onclick = addDirection;



 function addIntegredient()//adds new item to ingredient list
{
    var ul = document.getElementById('ingredientList')
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
};

            

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
 
};

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
 
};

function PassCreateRecipeValues() {
    var recipeName = $("#recipeNameInput").val();//stores name
    var ingredientArray = [];//will be loaded with each ingredient
    var utensilArray = [];//will store utensil list
    var stepArray = [];//stores entered directions
    //the following .each functions will loop through each list in the form and add the elements to an array defined earlier
    $(".ingredientListItem").each(function () { ingredientArray.push($(this).text()) });
    $(".utensilListItem").each(function () { utensilArray.push($(this).text()) });
    $(".stepListItem").each(function () { stepArray.push($(this).text()) });

    CreateRecipe(recipeName, ingredientArray, utensilArray, stepArray);
}
function CreateRecipe(recipeName, ingredients, utensils, directions) {
    var webMethod = "../RecipeServices.asmx/RequestRecipe";
    var parameters = "{\"recipeName\":\"" + encodeURI(recipeName) + "\",\"ingredients\":\"" + encodeURI(ingredients) + "\",\"description\":\"" + encodeURI(description) + "\",\"amountUsed\":\""+ encodeURI(amountUsed) + "\",\"utensilDescription\":\"" + "\"}";

    $.ajax({
        type: "POST",
        url: webMethod,
        data: parameters,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg.d != null) {
                var recipeID = msg.d;
                window.open("ViewRecipe.html?id="+ msg.d, "_self");
            }
        },
        error: function (e) {
            alert("boo...");
        }





    });
}
