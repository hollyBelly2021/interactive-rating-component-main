const ratingContainer = document.querySelector(".rating-container");

// select the rating buttons
const ratingButtons = document.querySelectorAll(".icon-circle");

const submitButton = document.querySelector(".button");
//calculate the length of each button
const ratingButtonsLength = ratingButtons.length;
//add eventlistener in to each buttons using for loop

for (let i = 0; i < ratingButtonsLength; i++) {
  ratingButtons[i].addEventListener("click", function () {
    submitRating(this.innerHTML);
  });
}
//will receive rating and submit it triggers the other html
function submitRating(rating) {
  //add an eventlistener to submit button and then modify the innerHTML of rating container.
  submitButton.addEventListener("click", function () {
    ratingContainer.innerHTML = `<section class="greeting-container">
    <img
      class="greeting-image"
      src="./images/illustration-thank-you.svg"
      alt=""
    />
    <div class="long-bubble">You selected ${rating} out of 5</div>
    <div class="greeting-desc">
      <h1>Thank you!</h1>
      <p class="text">
        We appreciate you taking the time to give a rating. If you ever
        need more support, don’t hesitate to get in touch!
      </p>
    </div>
  </section>`;
  });
}
