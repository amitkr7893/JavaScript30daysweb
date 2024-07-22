// Day 10: Event Handling
// Tasks/Activities:
// Activity 1: Basic Event Handling
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const btn = document.querySelector("button");
const p = document.querySelector("p");
btn.addEventListener('click',()=>{
  p.textContent = "sdfsdgs";
})


// • Task 2: Add a double-click event listener to an image that toggles its visibility.
const img = document.querySelector("img");

img.addEventListener("dblclick",()=>{
  img.style.visibility = "hidden";
})





// Activity 2: Mouse Events
// • Task 3: Add a mouseover event listener to an element that changes its background color.

p.addEventListener("mouseover",()=>{
  p.style.background = "red";
})


// • Task 4: Add a mouseout event listener to an element that resets its background color.

p.addEventListener("mouseout",()=>{
  p.style.background = "initial";
})





// Activity 3: Keyboard Events
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const inp = document.getElementById("text");

inp.addEventListener("keydown",(e)=>{
  // console.log(e.key);
})

// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

inp.addEventListener("keyup",(e)=>{
  // console.log(inp.value);
})






// Activity 4: Form Events
// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const fm = document.querySelector("form");
fm.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log(inp.value);
})

// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const sl = document.querySelector("select");

sl.addEventListener("change",()=>{
  if(sl.value != 'select') //this is default
  p.textContent = p.textContent +" "+ sl.value ;
})






// Activity 5: Event Delegation
// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const ul = document.querySelector("ul");
ul.addEventListener("click",(e)=>{
  if(e.target.tagName == "LI")
    console.log(e.target.textContent);
})


// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.


ul.addEventListener("click",(e)=>{
  if (e.target.matches('LI, LI *')) // matches the element is a part of list or not
    console.log(e.target.textContent);
})


const x = document.createElement("li");
x.appendChild(document.createTextNode("sdjkfsfd"));
ul.appendChild(x);