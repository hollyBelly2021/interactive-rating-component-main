$(".icon-circle").on("click", function () {
  submitRating(this.innerHTML);
});
function submitRating(rating) {
  $(".button").on("click", function () {
    $(".rating-container").html(`<section class="greeting-container">
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
  </section>`);
  });
}
