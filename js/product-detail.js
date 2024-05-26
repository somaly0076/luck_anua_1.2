// *********** progress bar **********//
document.querySelectorAll(".progress").forEach((element) => {
  // data value
  const value = parseInt(element.getAttribute('aria-valuenow'));
  const maxVal = parseInt(element.getAttribute('aria-valuemax'));
  const minVal = parseInt(element.getAttribute('aria-valuemin'));
  
  // set progress bar width
  element.querySelector('.progress-bar').style.width =  value / maxVal * 100 + "%";
});

// *********** timeline **************/
// select timeline navigator button container
const timelineNav = document.querySelector(".timeline-navigation");
// loop for all navigator buttons
timelineNav.querySelectorAll(".navigator").forEach(element => {
  const target = element.getAttribute('data-target');
  element.addEventListener('click', () => {
    // remove class .active from all navigator buttons
    timelineNav.querySelectorAll(".navigator").forEach(element => {
      element.classList.remove("active");
    });
    // add class .active to clicked navigator buttons
    element.classList.add('active');
    // select timeline itme
    document.querySelectorAll(".timeline-item").forEach((element) => {
      // check timeline item correspone to each navigator button
      if (element.classList.contains(target)){
        // add class selected to this timeline item
        element.classList.add("selected");
      }else{
        // remove class selected from else timeline item
        element.classList.remove("selected");
      }
    });
  });
  
});

/********************* review tab function */
// select review tab
const review_tab = document.getElementById("review-tab");
// select quetion tab
const question_tab = document.getElementById("question-tab");
// select review button
const review_button = document.getElementById("review-button");
// select question button
const question_button = document.getElementById("question-button");

review_button.addEventListener("click", () => {
  // add class active to review button
  review_button.classList.add("active");
  // remvoe class active from quetion button
  question_button.classList.remove("active");
  // hide question tab
  question_tab.classList.add("visually-hidden");
  // show review tab
  review_tab.classList.remove("visually-hidden");
});

question_button.addEventListener("click", () => {
  // add class active to question button
  question_button.classList.add("active");
  // remvoe class active from review button
  review_button.classList.remove("active");
  // hide review tab
  review_tab.classList.add("visually-hidden");
  // show question tab
  question_tab.classList.remove("visually-hidden");
});
/********************* end review tab function*/

/******************** show more function */
// select show more button
const show_more_button = document.getElementById("show-more-button");
// add event click
show_more_button.addEventListener("click", () => {
  // show loading in the button
  show_more_button.classList.add("loading");
  // disable button
  show_more_button.disabled = true;
  setTimeout(() => {
    // remove loading from button after a period
    show_more_button.classList.remove("loading");
    // enable button
    show_more_button.disabled = false;
    // insert one more review
    addOneItem();
  }, 1000);
});

// add one review
function addOneItem() {
  // select review container
  const review_container = document.getElementById("review-container");
  // clone exist review item
  const item = review_container.querySelectorAll("#item-01")[0];
  // add cloned review item
  review_container.appendChild(item.cloneNode(true));
}
/******************** end show more function */

/******************** filter function */
const filter_button = document.getElementById("filter-button");
const filter_option = document.getElementById("filter-option");
filter_button.addEventListener("click", () => {
  // activate/deactivate filter button
  filter_button.classList.toggle("active");
  // show/hide filter option
  filter_option.classList.toggle("show");
});
/******************** end filter function */
