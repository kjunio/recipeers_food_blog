function validateEntries(){
	let username, email, password, passwordConf;
	username = $("#username").val();
	email = $("#email").val();
	password = $("#password").val();
	passwordConf = $("#passwordConfirm").val();

	if (password != passwordConf)
	{
		alert("Passwords do not match.");
		return;
	}
	if (password.length < 8)
	{
		alert("Password must be eight characters or more.");
		return;
	}
	if (username.length < 4)
	{
		alert("Username must be four characters or more.");
		return;
	}
	if (!email.includes("@"))
	{
		alert("Please use valid email address.")
		return;
	}
	
	createJSON(username, email, password);
}
function createJSON(user, email, pass){
	accountInfo = {
		"name":user,
		"email":email,
		"password":pass
	}
}