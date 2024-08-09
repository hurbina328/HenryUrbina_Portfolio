// Strict Mode Enabled
"use strict";

//Variables used in Javascript

// Button Variabls to grab cart div
let btn1 = document.getElementById('pn1');
let btn2 = document.getElementById('pn2');
let btn3 = document.getElementById('pn3');
let btn4 = document.getElementById('pn4');
let btn5 = document.getElementById('pn5');
let btn6 = document.getElementById('pn6');
let btn7 = document.getElementById('pn7');
let btn8 = document.getElementById('pn8');
let btn9 = document.getElementById('pn9');
let btn10 = document.getElementById('pn10');
let btn11 = document.getElementById('pn11');
let btn12 = document.getElementById('pn12');
let btn13 = document.getElementById('pn13');
let btn14 = document.getElementById('pn14');
let btn15 = document.getElementById('pn15');
let btn16 = document.getElementById('pn16');
let btn17 = document.getElementById('pn17');
let btn18 = document.getElementById('pn18');
let btn19 = document.getElementById('pn19');

let btnDark = document.getElementById('dark-mode')
let btnSubmit = document.getElementById('btn-submit')
// Counter Variables for cost
const checkout = document.getElementById("checkout1");
let counter = -1;
let subtotal = 0;
let totalCost = 0;

function validateForm(e){
    e.preventDefault();
    
    // Here were going to check that all input is valid and give user an error message if it is not.
    // First Name Check
    let fNameInput = document.getElementById("firstName");
    
    let errorSpan = fNameInput.previousElementSibling;
	// the paragraph where we'll display a message to the user
	// TO DO
	let outputP = document.getElementById("defaultOutput");
	// clear out any past error messages and output
	// TO DO
	errorSpan.innerHTML = "";
	outputP.innerHTML = "";
	// if the input is blank, display an error message to the user
	// TO DO
	if(fNameInput.value === ""){
		errorSpan.innerHTML = "Please enter your First name";
	}

    // Last Name Check
    let lNameInput = document.getElementById("lastName");
    
    let errorSpan2 = lNameInput.previousElementSibling;
	// the paragraph where we'll display a message to the user
	// TO DO
	let outputP2 = document.getElementById("defaultOutput2");
	// clear out any past error messages and output
	// TO DO
	errorSpan2.innerHTML = "";
	outputP2.innerHTML = "";
	// if the input is blank, display an error message to the user
	// TO DO
	if(lNameInput.value === ""){
		errorSpan2.innerHTML = "Please enter your Last name";
	}

    // Email Check
    let email = document.getElementById("email");
    
    let errorSpan3 = email.previousElementSibling;
	// the paragraph where we'll display a message to the user
	// TO DO
	let outputP3 = document.getElementById("defaultOutput3");
	// clear out any past error messages and output
	// 
    errorSpan3.innerHTML = "";
	outputP3.innerHTML = "";
    //Check for empty values
    if(email.value === ""){
		errorSpan3.innerHTML = "Please enter your Email Address";
	}
    // Phone Check
    let phone = document.getElementById("phone");
    
    let errorSpan4 = phone.previousElementSibling;
	// the paragraph where we'll display a message to the user
	// 
	let outputP4 = document.getElementById("defaultOutput4");
	// clear out any past error messages and output
	// 
	errorSpan4.innerHTML = "";
	outputP4.innerHTML = "";
	// if the input is blank, display an error message to the user
	// 
	let phonenum = /^\d{10}$/;
    if((phone.value.match(phonenum))){
        return true;
    }else if (phone.value === "") {
        errorSpan4.innerHTML = "Please enter your Phone Number";
    }
    {
        return false;
    }
}

function darkMode(){
    let element = document.body;
   element.classList.toggle("dark-mode");
//    Toggles css styles that manage the dark mode function
}
function submit(){
    alert("Thank you filling out this form. We will get back to you shortly.");
    window.location.reload();
    // Refreshes page upon submission
}

function handleClick() {
    
    if(counter != -1){
        alert("Thank You For Shopping with Us Today. Your Total cost was " + parseFloat(totalCost).toFixed(2));
        window.location.reload();
        // Displays total and thanks user for shopping 
    }
    else{
        alert("Please add items to your cart before attempting to checkout.");
    }
    // Refresh webpage on click
}

function display(number, string) {
    let product = string;
    let price = number;  
    counter++;
    // Counter keeps track of number of items
    let ul = document.getElementById("itemsList1");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(product));
    ul.appendChild(li);
    // Adds list item to the cart displaying the item
    calculate(number, counter);
}
function calculate(number, counter){
    const subtotalArray = [];
    subtotalArray[counter] = number;
    console.log(subtotalArray[counter])
    console.log(counter);
    
    let taxPrice = 0.10;
    let shippingCost = 9.99;
    
    subtotal = (subtotal + subtotalArray[counter]);
    console.log("This is the subtotal " + parseInt(subtotal));
    //Displays subtotal with only 2 decimal points

    let cartUpdate = document.getElementById("cart");
    let span = document.getElementById("subtotal1");
    let total = document.getElementById("total1");
    let tax = document.getElementById("tax1");
    let shipping = document.getElementById("shipping1");

    totalCost = ((subtotal * taxPrice) + shippingCost + subtotal); 
    //Calculates total cost
    cartUpdate.innerText = "";
    span.innerText = "Subtotal :$" + parseFloat(subtotal).toFixed(2);
    tax.innerText = "Tax: " + taxPrice + "%";
    shipping.innerText = "Shipping : $" + shippingCost;
    total.innerText = "Total: $" + parseFloat(totalCost).toFixed(2);
    // Updates cart to display totals
}


// addToList functions send product name and prodcut cost to the display function to add them to our cart.
// UFC Venum Collection
function addToList(){
    let total = {
        title: "UFC Venum",
        product: {
           name: "Men's Black UFC 298 Anaheim Service Jacket",
           cost: "$149.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Black UFC 298 Anaheim Service Jacket $149.99"
     let name = total.getProductName();
     let cost = 149.99;
     console.log(name);
     display(cost, name);
}

function addToList2(){
    let total = {
        title: "UFC Venum",
        product: {
           name: "Men's Under Armour White UFC Project Rock Training Shoes",
           cost: "$99.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Black UFC 298 Anaheim Service Jacket $149.99"
     let name = total.getProductName();
     let cost = 99.99
     console.log(name);
     display(cost, name);
}
function addToList3(){
    let total = {
        title: "UFC Venum",
        product: {
           name: "UFC Legacy Championship Replica Belt",
           cost: "$849.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "UFC Legacy Championship Replica Belt"
     let name = total.getProductName();
     let cost = 849.99
     console.log(name);
     display(cost, name);
}
function addToList4(){
    let total = {
        title: "UFC Venum",
        product: {
           name: "Dricus Du Plessis Shirt",
           cost: "$49.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Black UFC 298 Anaheim Service Jacket $149.99"
     let name = total.getProductName();
     let cost = 49.99
     console.log(name);
     display(cost, name);
}
function addToList5(){
    let total = {
        title: "UFC Venum",
        product: {
           name: "Authentic Fight Night Champion Walkout Jersey",
           cost: "$74.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Black UFC 298 Anaheim Service Jacket $149.99"
     let name = total.getProductName();
     let cost = 74.99
     console.log(name);
     display(cost, name);
}
function addToList6(){
    let total = {
        title: "UFC Venum",
        product: {
           name: "Men's Venum Olive UFC Fight Week Full-Zip Hoodie",
           cost: "$89.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Black UFC 298 Anaheim Service Jacket $149.99"
     let name = total.getProductName();
     let cost = 89.99
     console.log(name);
     display(cost, name);
}

// Fighter Collection
function addToList7(){
    let total = {
        title: "Fighters",
        product: {
           name: "Men's Ilia Topuria Shirt",
           cost: "$49.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Black UFC 298 Anaheim Service Jacket $149.99"
     let name = total.getProductName();
     let cost = 49.99
     console.log(name);
     display(cost, name);
}
function addToList8(){
    let total = {
        title: "Fighters",
        product: {
           name: "Men's Jon Jones Shirt",
           cost: "$49.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Black UFC 298 Anaheim Service Jacket $149.99"
     let name = total.getProductName();
     let cost = 49.99
     console.log(name);
     display(cost, name);
}

// Events Section 
function addToList9(){
    let total = {
        title: "Events",
        product: {
           name: "Men's UFC Mexico City Shirt",
           cost: "$49.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's UFC Mexico City Shirt"
     let name = total.getProductName();
     let cost = 49.99
     console.log(name);
     display(cost, name);
}
function addToList10(){
    let total = {
        title: "Events",
        product: {
           name: "Men's Fanatics Branded Black UFC 300 Logo T-Shirt",
           cost: "$49.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Black UFC 298 Anaheim Service Jacket $149.99"
     let name = total.getProductName();
     let cost = 49.99
     console.log(name);
     display(cost, name);
}

// Apparel Section
function addToList11(){
    let total = {
        title: "Apparel",
        product: {
           name: "Men's Under Armour Green UFC 30th Anniversary Project Rock Training Shoes",
           cost: "$99.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Under Armour Green UFC 30th Anniversary Project Rock Training Shoes"
     let name = total.getProductName();
     let cost = 99.99
     console.log(name);
     display(cost, name);
}
function addToList12(){
    let total = {
        title: "Apparel",
        product: {
           name: "Men's Olive UFC Octagon Globe T-Shirt",
           cost: "$32.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Olive UFC Octagon Globe T-Shirt"
     let name = total.getProductName();
     let cost = 32.99
     console.log(name);
     display(cost, name);
}
function addToList13(){
    let total = {
        title: "Apparel",
        product: {
           name: "Men's Adrenaline By Venum Black/Gold UFC Authentic Fight Night Champion Walkout Jogger Pants",
           cost: "$79.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Black UFC 298 Anaheim Service Jacket $149.99"
     let name = total.getProductName();
     let cost = 79.99
     console.log(name);
     display(cost, name);
}

// Equipment Section
function addToList14(){
    let total = {
        title: "Equipment",
        product: {
           name: "Men's UFC Black Official Pro Fight Gloves",
           cost: "$199.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's UFC Black Official Pro Fight Gloves"
     let name = total.getProductName();
     let cost = 199.99
     console.log(name);
     display(cost, name);
}
function addToList15(){
    let total = {
        title: "Equipment",
        product: {
           name: "Unisex Opro Black/Gold UFC Self-Fit Mouthguard",
           cost: "$19.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Unisex Opro Black/Gold UFC Self-Fit Mouthguard"
     let name = total.getProductName();
     let cost = 19.99
     console.log(name);
     display(cost, name);
}
function addToList16(){
    let total = {
        title: "Accessories",
        product: {
           name: "UFC 1 Inch Official Glove Keychain",
           cost: "$11.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "UFC 1 Inch Official Glove Keychain"
     let name = total.getProductName();
     let cost = 11.99
     console.log(name);
     display(cost, name);
}
function addToList17(){
    let total = {
        title: "Accessories",
        product: {
           name: "Adrenaline By Venum UFC Fight Week Convertible Duffle Bag",
           cost: "$199.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Men's Black UFC 298 Anaheim Service Jacket $149.99"
     let name = total.getProductName();
     let cost = 199.99
     console.log(name);
     display(cost, name);
}

// Collectibles Section
function addToList18(){
    let total = {
        title: "Collectibles",
        product: {
           name: "Big League Pillows Conor McGregor Fight Kit Big Shots Pillow",
           cost: "$59.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Big League Pillows Conor McGregor Fight Kit Big Shots Pillow"
     let name = total.getProductName();
     let cost = 59.99
     console.log(name);
     display(cost, name);
}
function addToList19(){
    let total = {
        title: "Collectibles",
        product: {
           name: "Big League Pillows UFC Legacy Championship Belt Pillow",
           cost: "$49.99"
        },
     
        // Define a method
        getProductName: function() {
           return this.product.name;
        }
     };
     
     // Call a method that returns "Big League Pillows UFC Legacy Championship Belt Pillow"
     let name = total.getProductName();
     let cost = 99.99
     console.log(name);
     display(cost, name);
}
// End of our Add to List functions

// event listeners for buttons
btn1.addEventListener('click', addToList);
btn2.addEventListener('click', addToList2);
btn3.addEventListener('click', addToList3);
btn4.addEventListener('click', addToList4);
btn5.addEventListener('click', addToList5);
btn6.addEventListener('click', addToList6);
btn7.addEventListener('click', addToList7);
btn8.addEventListener('click', addToList8);
btn9.addEventListener('click', addToList9);
btn10.addEventListener('click', addToList10);
btn11.addEventListener('click', addToList11);
btn12.addEventListener('click', addToList12);
btn13.addEventListener('click', addToList13);
btn14.addEventListener('click', addToList14);
btn15.addEventListener('click', addToList15);
btn16.addEventListener('click', addToList16);
btn17.addEventListener('click', addToList17);
btn18.addEventListener('click', addToList18);
btn19.addEventListener('click', addToList19);
// Buttons 1- 19 for all products on the webpage
document.getElementById("btn-submit").addEventListener("click", validateForm);
checkout.addEventListener("click", handleClick);
btnDark.addEventListener("click", darkMode)
btnSubmit.addEventListener("click", submit);
//More event listeners for buttons