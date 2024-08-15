const submitBtn = document.querySelector('.SubmitBtn');
const numButtons = document.querySelectorAll('.Num');
const bodyContent = document.querySelector('.body');
const thankYouState = document.querySelector('.thank-you');
const selectedRatingSpan = document.querySelector('#selectedRating');

let selectedRating = null;

// Add event listener to each number button
numButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the rating value from the data-value attribute
    selectedRating = this.getAttribute('data-value');

    // Enable the submit button
    submitBtn.disabled = false;
    submitBtn.classList.add('enabled');

    // Change background color of the selected button and reset others
    numButtons.forEach(btn => btn.classList.remove('selected', 'highlight'));
    this.classList.add('selected', 'highlight');
  });
});

// Add event listener to the submit button
submitBtn.addEventListener('click', function() {
  if (selectedRating) {
    // Hide the body content and show the thank you state
    bodyContent.style.display = 'none';
    thankYouState.style.display = 'block';

    // Display the selected rating in the thank you section
    selectedRatingSpan.textContent = selectedRating;
  }
});
