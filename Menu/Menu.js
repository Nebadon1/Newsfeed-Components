/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/
 let  theHeader = document.querySelector('.header');

 let theArray = menuItems;

  
 theHeader.appendChild(theGreatMenu(theArray));

  
function theGreatMenu (){

 let theMenu = document.createElement('div');
 theMenu.setAttribute('class', 'menu');

 let listMenu = document.createElement('ul');

 let students = document.createElement('li');
 let faculty = document.createElement('li');
 let whatsNew = document.createElement('li');
 let techTrends = document.createElement('li');
 let music = document.createElement('li');
 let logOut = document.createElement('li');

 //Appends
 theHeader.appendChild(theMenu);
 theMenu.appendChild(listMenu);
 listMenu.appendChild(students);
 listMenu.appendChild(faculty);
 listMenu.appendChild(whatsNew);
 listMenu.appendChild(techTrends);
 listMenu.appendChild(music);
 listMenu.appendChild(logOut);

 //set text content
 students.textContent = theArray[0];
 faculty.textContent = theArray[1];
 whatsNew.textContent = theArray[2];
 techTrends.textContent = theArray[3];
 music.textContent = theArray[4];
 logOut.textContent = theArray[5];



 return theMenu;
}
 
const menu = document.querySelector(".menu");

const toggleMenu = (event) => {
 
  menu.classList.toggle("menu--open");
  
}

const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener( "click", toggleMenu );

/*
  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
