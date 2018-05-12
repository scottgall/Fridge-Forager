# FridgeForager
Fridge Forager allows users to access and filter the million plus recipes on Yummly.com, without having to sign up for an account.  Our search functionality provides users the ability to customize results based on specified parameters.

Our app simplifies Yummly’s built-in search by focusing on 3 essential search parameters: 
*diet
*allergies
*ingredients (included & excluded)

Fridge Forager’s clean & intuitive UI will benefit those who may not be google gurus like us, or just anyone who wants to quickly and easily search for recipes based on what’s in their fridge. 

# Search page
Users can restrict search results to only include recipes that comply with their diet by selecting it in the diet parameter.

Users can select multiple food-allergies, which will ensure that all results are safe for those with the specified allergies.

Users can add ingredients to the included & excluded ingredients sections, which will restrict results to recipes that contain & don’t contain said ingredients.

When the user clicks on the ‘search recipes’ button, a custom call is made to the Yummly Search Recipes API , and 12 recipes that agree with the designated parameters are displayed.  Each time the user clicks on the ‘more results’ button, 12 additional recipes will be displayed.

When the user clicks on a recipe’s thumbnail, the name of the recipe is stored in Firebase under a branch for the current date.  The clicked recipe’s ID is also stored in localStorage, and the ‘recipe details’ page is opened in a new tab.

# Details page
When the details page is loaded, the recipe ID is grabbed from local storage and used to make a Yummly Get Recipe API call, which responds with additional information about the recipe.  Information about the recipe is displayed for the user, and ‘full recipe’ button links the user to the full recipe & instructions on yummly.com.

# Technologies Used
Javascript, Jquery, AJAX, Materialize, Firebase, and two different API's provided by Yummly.com

# Paths for future development
-Additional search parameters (max prep/cook time, course, cuisine, etc...)
-Using the data stored in firebase to display most popular recipes and recently viewed recipes.
-Adding authentication to display active user’s most popular recipes and recently viewed recipes.
-Functionality for adding recipes to a ‘favorites’ section, which would be displayed when a user signs in.
-Creating public user profiles, so users can follow what other’s have favorited or rated specific recipes.
-Because the Get Recipe API doesn’t give us cooking instructions, functionality to scrape the full recipe page to get & display those functions.
-Functionality to add ingredients to a shopping list, which creates a prime-pantry or other service’s online grocery cart.
-Utilizing the nutritional stats in accordance with other API’s like MyFitnessPal to calculate daily allowances/intake.

# You can view the web page at:
https://joannelee1990.github.io/FridgeForager/
