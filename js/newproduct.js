
/* //--------- initialize the object properties of elements  ---------*/
const buttonElements = {
  'four-box': {
      element: document.getElementById('four-box'),
      content: document.getElementsByClassName('first-order')[0],
      originalColor: document.getElementById('four-box').style.color
  },
  'six-box': {
      element: document.getElementById('six-box'),
      content: document.getElementsByClassName('second-order')[0],
      originalColor: document.getElementById('six-box').style.color
  },
  'burger': {
      element: document.getElementById('burger'),
      content: document.getElementsByClassName('third-order')[0],
      originalColor: document.getElementById('burger').style.color
  },
  'one-box': {
      element: document.getElementById('one-box'),
      content: document.getElementsByClassName('fourth-order')[0],
      originalColor: document.getElementById('one-box').style.color
  }
};


/* //--------- reset the colors and visibility of all buttons except the clicked one ---------*/
function resetColorsAndVisibility(clickedButtonId) {
  Object.values(buttonElements).forEach(button => {
      button.element.style.color = button.element.id !== clickedButtonId ? button.originalColor : "gray";
      button.content.classList.add('hidden');
  });



/* //--------- make the clicked button visible ---------*/
  buttonElements[clickedButtonId].content.classList.remove('hidden');
}

Object.keys(buttonElements).forEach(buttonId => {
  buttonElements[buttonId].element.addEventListener('click', () => {
      resetColorsAndVisibility(buttonId);
  });
});