var pass;
var username;
var email;
var errorMessage;


function validateEntries() {
    let username, email, password, passwordConf;
    username = $("#username").val();
    email = $("#email").val();
    password = $("#password").val();
    passwordConf = $("#passwordConfirm").val();

    if (password !== passwordConf) {
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
        alert("Please use valid email address.");
        return;
    }
    else {
        username = document.getElementById("username").value;
        ValidateUsername(username);
    }
        
}

   
    function PassCreateAccountValues() {
        pass = document.getElementById("password").value;
        username = document.getElementById("username").value;
        email = document.getElementById("email").value;

        CreateAccount(pass, username, email);
    }

    function ValidateUsername(username) {
    var webMethod = "../RecipeServices.asmx/ValidateUsername";
    var parameters = "{\"username\":\"" + encodeURI(username) +  "\"}";
    //jQuery ajax method
    $.ajax({
        
        type: "POST",
        //the url is set to the string we created above
        url: webMethod,
        //same with the data
        data: parameters,
        //these next two key/value pairs say we intend to talk in JSON format
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //jQuery sends the data and asynchronously waits for a response.  when it
        //gets a response, it calls the function mapped to the success key here
        success: function (msg) {
           
            if (msg.d) {
                //server replied true, so show the accounts panel
                
                alert("Username already exists. Please pick a different one and try again!");
                document.getElementById("username").value = "";
                document.getElementById("password").value = "";
                document.getElementById("email").value = "";
                document.getElementById("passwordConfirm").value = "";
            }
            else {
                //server replied false, so let the user know
                //the logon failed
                PassCreateAccountValues();
            }
        },
        error: function (e) {
            //if something goes wrong in the mechanics of delivering the
            //message to the server or the server processing that message,
            //then this function mapped to the error key is executed rather
            //than the one mapped to the success key.  This is just a garbage
            //alert becaue I'm lazy
           
        }
    });
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




