"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Maria De Jesus Rizo
   Date:   4.9.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
// The line below states that the setupcart function will be run upon the page loading in the browser.
window.onload = setupCart;
// The line below creates a function with the nme of setupCart. This functions is not passed any parameters.
function setupCart() {
      // The line below creates a variable with the name of addButtons. This varaible is assigned the value of the HTML element with a class of addButton.
      var addButtons = document.getElementsByClassName("addButton");
      // The code blcok below states that the line within will continue to be looped as long as the varaible i value is less than the length of the addButtons value
      for (var i = 0; i < addButtons.length; i++) {
            //The line below states that when an item in the addButtons variable is clicked by the user, the addItem function is run. 
            addButtons[i].onclick = addItem;
      }
}
//The code block below creates a function with the name of addItem. This function is passed the parameter of e. 
function addItem(e) {
      // The line below creates a variable with the name of foodItem which is then assigned the value of the next element sibling of the e parameter. 
      var foodItem = e.target.nextElementSibling;
      //The line below creates a variable with the name of foodID which is assigned the value of the id attribute of the foodID variable.
      var foodID = foodItem.getAttribute("id");
      //The line below creates a variable with the name of foodDescription. This variable is assigned the value of a copy of the foodItem node. 
      var foodDescription = foodItem.cloneNode(true);
      //The line below creates a variable with the name of cartBox and is then assigned the value of the HTMl element with an id of cart. 
      var cartBox = document.getElementById("cart");
      //The line below creates a varaible with the name of duplicateOrder which is then assigned the value of the boolean false.
      var duplicateOrder = false;
      //The code block below states that the code within will continue to be looped as long as the value of the n variable is not the value of null.
      for (var n = cartBox.firstChild; n !== null; n = n.nextElementSibling) {
            //The block below creates an if statement which tests whether the the n id attribute is set to foodID. If it is the code within will run.
            if (n.id === foodID) {
                  //This states that the duplicateOrder variable will now be assigned the value of true. 
                  duplicateOrder = true;
                  //The line below states that the text content of the first elemet child of the n variable will be increased by a value of one. 
                  n.firstElementChild.textContent++;
                  //This states that the code will now break out of the for loop.
                  break;
            }
      }
      //This block below creates a if statement which tests whether the duplicateOrder variable has the value of false. If it does then the lines within will be run. 
      if (duplicateOrder === false) {
            //The line below creates a variable with the name of orderCount. Thsi variable is then given the value of a new span element created in the document. 
            var orderCount = document.createElement("span");
            //The line below states that the text content of the orderCount variable will be set to 1.
            orderCount.textContent = "1";
            //This inserts the value of the orderCount variable as the first child of the foddDescriprion variable.
            foodDescription.insertBefore(orderCount, foodDescription.firstChild);
            // The line below states that the value of the foodDescription varaible is appended to the cartBox variable.
            cartBox.appendChild(foodDescription);
      }
}