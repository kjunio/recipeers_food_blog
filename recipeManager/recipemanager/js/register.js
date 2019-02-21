function validateEntries() {
    let username, email, password, passwordConf;
    username = $("#username").val();
    email = $("#email").val();
    password = $("#password").val();
    passwordConf = $("#passwordConfirm").val();

    if (password != passwordConf) {
        alert("Passwords do not match.");
        return;
    }
    if (password.length < 8) {
        alert("Password must be eight characters or more.");
        return;
    }
    if (username.length < 4) {
        alert("Username must be four characters or more.");
        return;
    }
    if (!email.includes("@")) {
        alert("Please use valid email address.")
        return;
    }
    else
        PassCreateAccountValues();
}

    var pass;
    var username;
    var email;

    function PassCreateAccountValues() {
        pass = document.getElementById("password").value;
        username = document.getElementById("username").value;
        email = document.getElementById("email").value;

        CreateAccount(pass, username, email);
    }

    function CreateAccount(pass, username, email) {
        var webMethod = "../RecipeServices.asmx/RequestAccount";
        var parameters = "{\"pass\":\"" + encodeURI(pass) + "\",\"username\":\"" + encodeURI(username) + "\",\"email\":\"" + encodeURI(email) + "\"}";

        $.ajax({
            type: "POST",
            url: webMethod,
            data: parameters,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                //showPanel('logonPanel');
                window.open("splashPage.html", "_self");
            },
            error: function (e) {
                alert("boo...");
            }





        });
    }

    

	
    //LogOnUser();




