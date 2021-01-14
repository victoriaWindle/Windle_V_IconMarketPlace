//this is JavaScript module syntax
//IIFE (this is the technical name)
(() => {
  //stub
  console.log('js is linked! Hooray!');

  let theButton = document.querySelector(".icon-button");
    theIcons = document.querySelector(".icon");

  function logClick() {
    console.log('clicked the button (or icon)!')
  }

  theButton.addEventListener('click', logClick);
  theIcon.forEach(icon => icon.addEventListener('click', logclick));
})();
