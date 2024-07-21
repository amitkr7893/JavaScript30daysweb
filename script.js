// Day 9: DOM Manipulation
// Tasks/Activities:
// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.

const ele = document.getElementById("heading");
ele.innerHTML = "Bye World";

// • Task 2: Select an HTML element by its class and change its background color.

const ele2 = document.getElementsByClassName("heading");
ele2[0].style.backgroundColor = "red";




// Activity 2: Creating and Appending Elements
// • Task 3: Create a new div element with some text content and append it to the body.

const h2 = document.createElement("div");

h2.appendChild(document.createTextNode("Im a new element")); //prefered
// or
// h2.innerHTML = " kndskjcda";
document.body.appendChild(h2);

// • Task 4: Create a new li element and add it to an existing ul list.

const ul = document.querySelector('ul');

const li = document.createElement("li");
li.appendChild(document.createTextNode("list item 2"));
ul.appendChild(li);

const li2 = document.createElement("li");
li2.appendChild(document.createTextNode("list item 3"));
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.appendChild(document.createTextNode("list item 4"));
ul.appendChild(li3);

// let i = 1;
// for(let i=0;i<5;i++){
// const it1 = setInterval(() => {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(`list item ${i + 1}`));
//   ul.appendChild(li);
//   i++;
//   if (i == 5) clearInterval(it1);
// }, 2000);




// Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.

ul.removeChild(ul.children[0]); //remove oth = item 1


// • Task 6: Remove the last child of a specific HTML element.

ul.removeChild(ul.lastElementChild); // remove item 4





// Activity 4: Modifying Attributes and Classes
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

document.querySelector('img').setAttribute('src', 'https://www.w3schools.com/js/pic_bulbon.gif')

// • Task 8: Add and remove a CSS class to/from an HTML element.

ele.classList.remove("heading");
ul.children[0].classList.add("c1");





// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.

let p = document.querySelector('p');
let btn = document.querySelector('button');
let f=1;
btn.addEventListener("click",()=>{
  if(f){
    p.innerHTML = "Thats not ture :)";
    f=0;
  }
  else{
    p.innerHTML = "Hi i'm a super hero";
    f=1;
  }
});

// • Task 10: Add a mouseover event listener to an element that changes its border color.

p.addEventListener("mouseover", (e)=>{
    e.target.style.border = "2px solid red";
});