document.addEventListener('DOMContentLoaded', (event) => {
  // Get the reviews container
  const reviewsContainer = document.getElementById('reviews-container');

  // Loop through each review in the reviews array
  window.reviews.forEach((review) => {
    // Create a new div for each review
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';

    // Initialize the stars string
    let stars = '';

    // Loop 5 times to generate the full or empty stars
    for(let i = 1; i <= 5; i++) {
        if(i <= review.rating) {
            // Add a full star if i is less than or equal to the rating
            stars += '<i class="fas fa-star"></i>';
        } else {
            // Add an empty star if i is greater than the rating
            stars += '<i class="far fa-star"></i>';
        }
    }

    // Add the review name, date, rating, and description
    reviewDiv.innerHTML = `
    <div class="testimonial-box">
    <!-- top -->
    <div class="box-top">
      <div class="profile">
        <div class="profile-image">
          <img src="../gallery/pp.png" alt="default pic">
        </div>
        <div class="name-user">
          <strong>${review.name}</strong>
          <span>${review.date}</span>
        </div>
      </div>
      <!-- stars -->
      <div class="reviews">
          ${stars}
      </div>
    </div>
    <!-- Bottom (Comments) -->
    <div class="client-comments">
      <p>${review.description}</p>
    </div>
  </div>`;

  // Append the reviewDiv to the reviewsContainer
  reviewsContainer.appendChild(reviewDiv);
})})

