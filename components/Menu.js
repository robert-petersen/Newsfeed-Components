// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


  // Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as an <li>}
  //   </ul>
  // </div>

  // The 'menuMaker' takes an array of menu items as its only argument.

  function menuMaker(array){

    let elmenu = document.createElement("div");
    elmenu.classList.add("menu");
    let list = document.createElement("ul");
    elmenu.appendChild(list);

    // Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
    // Add those items to the <ul>

    array.forEach((index)=> {
      let tag = document.createElement("li");
      tag.textContent = index;
      list.appendChild(tag);
    });

    // Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

    let menuButton = document.querySelector(".menubutton");

    // Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

    menuButton.addEventListener("click", (event) => {
      elmenu.classList.toggle("menu-open");
    });

    // Step 5: Don't forget to return your div.menu.
    return elmenu;
  }

  // Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.

  let theHeader = document.querySelector(".header");

  menuItems.forEach( (index) => {
    theHeader.appendChild(menuMaker(index));
  });

