"use strict";

$(document).ready(function(){
	var pageURL = window.location.href;
    var recipeID = parseURLParams(pageURL);	
    console.log(recipeID);
});

//funvction to pull apart a URL that has had some variable placed within it to pass data
function parseURLParams(url) {
	//finds where attribute starts
    var queryStart = url.indexOf("?") + 1;
    //finds end
    var queryEnd   = url.indexOf("#") + 1 || url.length + 1;
        //pulls out name:value pair
    var query = url.slice(queryStart, queryEnd - 1);
        //sets up pairs and replaces delimiters with " "
    var pairs = query.replace(/\+/g, " ").split("&");
        //creates parameter object, index, name, value, and name:value pair placeholders
    var parms = {}, i, n, v, nv;
    //only works if 
    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    //returns object {name = "value"}
    return parms;
};

//function to unpack the recipe
function recipeUnpacker(recipeID) {
    //calls function to pull recipe from db
    var webMethod = "../RecipeServices.asmx/ViewRecipe";
    $.ajax({
        type: "POST",
        url: webMethod,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            //creates and sets recipe object equal to returned datat object
            var recipe = msg.d;
        }
    });
    //set variables equal to recipe properties
    var userID = recipe.userID;
    var ingredients = recipe.ingredients.split(",");
    var utensils = recipe.utensils.split(",");
    var directions = recipe.directions.split(",");
    //fill in page elements
};


