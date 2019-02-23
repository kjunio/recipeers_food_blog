using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace recipemanager
{
    public class Recipe
    {
        public int recipeID;
        public int userID;
        //have to pull arrays as string because they are stored as strings
        //will need to be split using JS into multiple strings and placed in an array
        public string ingredients;
        public string utensils;
        public string directions;
    }
}