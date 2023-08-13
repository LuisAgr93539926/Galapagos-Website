// Reviews (reviews.html)
const { reviews } = window;

console.log({reviews}, "Data");

document.addEventListener('DOMContentLoaded', (event) => {
  // Get the reviews container
  const reviewsContainer = document.getElementById('reviews-container');

  // Loop through each review in the reviews array
  window.reviews.forEach((review) => {
      // Create a new div for each review
      const reviewDiv = document.createElement('div');
      reviewDiv.className = 'review';

      // Add the review name, date, rating, and description
      reviewDiv.innerHTML = `
          <h2>${review.name}</h2>
          <p>${new Date(review.date).toLocaleDateString()}</p>
          <p>Rating: ${'⭐'.repeat(review.rating)}</p>
          <p>${review.description}</p>
      `;

      // Create a link for the review
      const reviewLink = document.createElement('a');
      reviewLink.href = review.link[0].url;
      reviewLink.textContent = review.link[0].urlName;
      reviewLink.target = '_blank';
      reviewLink.rel = 'noopener';

      // Add the link to the review div
      reviewDiv.appendChild(reviewLink);

      // Add the review div to the reviews container
      reviewsContainer.appendChild(reviewDiv);

      console.log(review.name);
  });
});

// Home (index.html)
var images = Array.from(document.querySelectorAll('.carousel__image'));
var currentIndex = 0;

document.querySelector('.carousel__button--prev').addEventListener('click', function() {
    images[currentIndex].style.display = 'none';
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    images[currentIndex].style.display = 'block';
});

document.querySelector('.carousel__button--next').addEventListener('click', function() {
    images[currentIndex].style.display = 'none';
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    images[currentIndex].style.display = 'block';
});