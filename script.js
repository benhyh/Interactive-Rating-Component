const ratingButtons = document.querySelectorAll('.rating-button');
const ratingContainer = document.querySelector('.rating-container');
const rating = document.getElementById('rating');
const thankYouContainer = document.querySelector('.thank-you');
const submitButton = document.querySelector('.submit-button');

ratingButtons.forEach(button => {
  button.addEventListener('click', function() {
    ratingButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
});

submitButton.addEventListener('click', function() {
    const ratingButtonActive = document.querySelector('.rating-button.active');  
    if (ratingButtonActive) {
      thankYouContainer.classList.remove("hidden");
      ratingContainer.style.display = "none";
    } else {
      window.alert('Please select a rating before submitting!');
    }
});

ratingButtons.forEach((ratingButton) => {
    ratingButton.addEventListener('click', () => {
        rating.innerHTML = ratingButton.innerHTML;
    });
});