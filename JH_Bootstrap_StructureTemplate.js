document.addEventListener('DOMContentLoaded',()=>{
  // Create and inject navbar1
  let navbar1 = document.createElement('div');
  document.body.appendChild(navbar1);
  navbar1.id='navbar1';
  navbar1.innerHTML='This is going to be navbar1';

  // Create and inject navbar2 and create its unordered list of links
  let navbar2 = document.createElement('div');
  document.body.appendChild(navbar2);
  navbar2.id='navbar2';

  // script to help navbar 2 stick to the top of the screen when scrolling
  window.onscroll = () => {
    if(window.scrollY >= 100) {
      document.getElementById('navbar2').style.position = 'fixed';}
    else {document.getElementById('navbar2').style.position = 'static';};
  };

  // Create and inject navbarleft
  let navbarleft = document.createElement('div');
  document.body.appendChild(navbarleft);
  navbarleft.id='navbarleft';
  navbarleft.innerHTML='This is going to be navbarleft';

  // Create and inject a space to hold the site content, then a container for your site content that can itself be a grid
  let sitecontentspace = document.createElement('div');
  document.body.appendChild(sitecontentspace);
  sitecontentspace.id='sitecontentspace';
  let sitecontentcontainer = document.createElement('div');
  document.getElementById('sitecontentspace').appendChild(sitecontentcontainer);
  sitecontentcontainer.id='sitecontentcontainer';
  sitecontentcontainer.innerHTML='This is going to be the container for the site content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  // Create and inject navbarright
  let navbarright = document.createElement('div');
  document.body.appendChild(navbarright);
  navbarright.id='navbarright';
  navbarright.innerHTML='This is going to be navbarright';

  // Create and inject footer1
  let footer1 = document.createElement('div');
  document.body.appendChild(footer1);
  footer1.id='footer1';
  footer1.innerHTML='This is going to be footer1';

  // Create and inject footer2
  let footer2 = document.createElement('div');
  document.body.appendChild(footer2);
  footer2.id='footer2';
  footer2.innerHTML='This is going to be footer2';


// This ends the DOMContentLoaded listener
})
