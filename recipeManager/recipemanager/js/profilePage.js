window.onload = function isUserLoggedIn() {
    var webMethod = "../RecipeServices.asmx/GetProfile";
    var profile
    $.ajax({
        type: "GET",
        url: webMethod,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            alert("success");
            profile = msg.d;
        }
    });
    if (profile.session == "none") {
        alert("Please login to view Profile.");
        //window.open("Signin.html","_self")
        return;
    }
    let userId = profile.userId;
    let email = profile.email;
    updateUserInfo(userId, email);
    getUserRecipes(userId);
}
function updateUserInfo(userId, email) {
    document.getElementById("userInfo").innerHTML = "<b>" + userId + "<br>" + email + "</b></h3>";
}
function getUserRecipes(userId) {
    var webMethod = "../RecipeServices.asmx/GetProfileRecipes";
    var parameters = "{\"username\":\"" + encodeURI(username) + "\"}";
    $.ajax({
        type: "POST",
        url: webMethod,
        data: parameters,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {            
            var recipes = msg.d;
        }
    });
    if (recipes.recipeId != Null) {
        let recipeId = recipes.recipeId;
        let recipeName = recipes.recipeName;
        document.getElementById("userRecipes").innerHTML = "<li>" + recipeName + "</li>";
    }
}