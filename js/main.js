//this is JavaScript module syntax
//IIFE (this is the technical name)
(() => {
  //stub
  console.log('js is linked! Hooray!');

  let icon = document.querySelector(".icon-holder");
    theIcons = document.querySelector(".icons");

  function logClick() {
    console.log('This is a cool cat icon! Much icon, very cat.')
  }

  icon.addEventListener('click', logClick);
  theIcons.forEach(icon => icon.addEventListener('click', logclick));
})();
