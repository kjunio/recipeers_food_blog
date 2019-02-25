using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Data;


namespace recipemanager
{
    /// <summary>
    /// Summary description for RecipeServices
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class RecipeServices : System.Web.Services.WebService
    {
        [WebMethod(EnableSession = true)]

        public bool LogOn(string uid, string pass)
        {
            //we return a flag to tell the user if they are logged in or not
            bool success = false;

            //connection string
            string sqlConnectString = System.Configuration.ConfigurationManager.ConnectionStrings["myDB"].ConnectionString;
            //sql query
            string sqlSelect = "SELECT userID, admin FROM user WHERE username=@idValue and password=@passValue";

            //set up connection object to be ready to use our connection string
            MySqlConnection sqlConnection = new MySqlConnection(sqlConnectString);
            //set up our command object to use our connection and our query
            MySqlCommand sqlCommand = new MySqlCommand(sqlSelect, sqlConnection);

            //tell command to replace the @parameters with real values
            //decode them because they came to use via the web so they were encoded
            sqlCommand.Parameters.AddWithValue("@idValue", HttpUtility.UrlDecode(uid));
            sqlCommand.Parameters.AddWithValue("@passValue", HttpUtility.UrlDecode(pass));


            //data adapter acts like a bridge between our command object 
            //and the data we are trying to get back and put in a table object
            MySqlDataAdapter sqlDa = new MySqlDataAdapter(sqlCommand);
            //Here's the table we want to fill with the results from our query
            DataTable sqlDt = new DataTable();
            sqlDa.Fill(sqlDt);
            //check to see if any rows are returned. If they were, it means it's a legit account
            //return sqlDt.Rows.Count;
            if (sqlDt.Rows.Count > 0)
            {
                //if we found an account, store the id and admin status in the session
                //so we can check those values later on other method calls to see if they
                //are 1) logged in at all, and 2) and admin or not
                Session["userID"] = sqlDt.Rows[0]["userID"];
                Session["admin"] = sqlDt.Rows[0]["admin"];
                success = true;
                //return true;
            }

            return success;
        }

        [WebMethod(EnableSession = true)]
        //validates usernames
        public bool ValidateUsername(string username)
        {
            //we return a flag to tell the user if they are logged in or not
            bool success = false;

            //connection string
            string sqlConnectString = System.Configuration.ConfigurationManager.ConnectionStrings["myDB"].ConnectionString;
            //sql query
            string sqlSelect = "SELECT * FROM user WHERE username=@usernameValue ";

            //set up connection object to be ready to use our connection string
            MySqlConnection sqlConnection = new MySqlConnection(sqlConnectString);
            //set up our command object to use our connection and our query
            MySqlCommand sqlCommand = new MySqlCommand(sqlSelect, sqlConnection);

            //tell command to replace the @parameters with real values
            //decode them because they came to use via the web so they were encoded
            sqlCommand.Parameters.AddWithValue("@usernameValue", HttpUtility.UrlDecode(username));
      


            //data adapter acts like a bridge between our command object 
            //and the data we are trying to get back and put in a table object
            MySqlDataAdapter sqlDa = new MySqlDataAdapter(sqlCommand);
            //Here's the table we want to fill with the results from our query
            DataTable sqlDt = new DataTable();
            sqlDa.Fill(sqlDt);
            //check to see if any rows are returned. If they were, it means it's a legit account
            //return sqlDt.Rows.Count;
            if (sqlDt.Rows.Count > 0)
            {
                
                success = true;
                //return true;
            }

            return success;
        }

        [WebMethod(EnableSession = true)]
        public void RequestAccount(string pass, string username, string email)
        {
            string sqlConnectString = System.Configuration.ConfigurationManager.ConnectionStrings["myDB"].ConnectionString;

            //select statement
            string sqlSelect = "insert into user (password, username, email)" +
                "values(@passValue, @usernameValue, @emailValue);";

            MySqlConnection sqlConnection = new MySqlConnection(sqlConnectString);
            MySqlCommand sqlCommand = new MySqlCommand(sqlSelect, sqlConnection);

            sqlCommand.Parameters.AddWithValue("@passValue", HttpUtility.UrlDecode(pass));
            sqlCommand.Parameters.AddWithValue("@usernameValue", HttpUtility.UrlDecode(username));
            sqlCommand.Parameters.AddWithValue("@emailValue", HttpUtility.UrlDecode(email));

            //open the connection
            sqlConnection.Open();
            sqlCommand.ExecuteScalar();

            sqlConnection.Close();
        }

        //Allows the user to create a new recipe and insert it into the d 
        [WebMethod(EnableSession = true)]
        public void RequestRecipe(string recipeName, string ingredients, string description, string utensilDescription)
        {
            string sqlConnectString = System.Configuration.ConfigurationManager.ConnectionStrings["myDB"].ConnectionString;

            //select statement
            string sqlSelect = "insert into recipe (recipeName, ingredients, description, utensilDescription)" +
                "values(@recipeNameValue, @ingredientsValue, @descriptionValue, @utensilDescriptionValue);";

            MySqlConnection sqlConnection = new MySqlConnection(sqlConnectString);
            MySqlCommand sqlCommand = new MySqlCommand(sqlSelect, sqlConnection);

            sqlCommand.Parameters.AddWithValue("@recipeNameValue", HttpUtility.UrlDecode(recipeName));
            sqlCommand.Parameters.AddWithValue("@ingredientsValue", HttpUtility.UrlDecode(ingredients));
            sqlCommand.Parameters.AddWithValue("@descriptionValue", HttpUtility.UrlDecode(description));
            sqlCommand.Parameters.AddWithValue("@utensilDescriptionValue", HttpUtility.UrlDecode(utensilDescription));


            //open the connection
            sqlConnection.Open();
            sqlCommand.ExecuteScalar();

            sqlConnection.Close();
        }




    }
}
