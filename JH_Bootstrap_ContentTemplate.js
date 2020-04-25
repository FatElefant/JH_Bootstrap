document.addEventListener('DOMContentLoaded',()=>{

  // Navbar1 Content
  document.getElementById('navbar1').innerHTML='This is going to be navbar1';

  // Navbar2 Content
  let item1 = document.createElement('div');
  document.getElementById('navbar2').appendChild(item1);
  item1.className='navbar2_link';
  item1.innerHTML='Item 1';

  let item2 = document.createElement('div');
  document.getElementById('navbar2').appendChild(item2);
  item2.className='navbar2_link';
  item2.innerHTML='Item 2';

  let item3 = document.createElement('div');
  document.getElementById('navbar2').appendChild(item3);
  item3.className='navbar2_link';
  item3.innerHTML='Item 3';

  // Navbarleft Content
  document.getElementById('navbarleft').innerHTML='This is going to be navbarleft';

  // Site Content
  document.getElementById('sitecontentcontainer').innerHTML='This is going to be the container for the site content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const exampleimg = document.createElement('img');
  exampleimg.src = 'ExampleImg.png';
  exampleimg.style.height = '450px';
  document.getElementById('sitecontentcontainer').appendChild(exampleimg);
  const somemoretext = document.createElement('div');
  somemoretext.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  document.getElementById('sitecontentcontainer').appendChild(somemoretext);

  // Navbarright Content
  document.getElementById('navbarright').innerHTML='This is going to be navbarright';

  // Footer1 Content
  document.getElementById('footer1').innerHTML='This is going to be footer1';

  // Footer2 Content
  document.getElementById('footer2').innerHTML='This is going to be footer2';

// This ends the DOMContentLoaded listener
})
