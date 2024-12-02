// Gallery Section
const galleryGrid = document.querySelector('.gallery-grid');
const galleryModal = document.querySelector('.gallery-modal');
const galleryImage = document.querySelector('.gallery-modal .modal-image');
const prevBtn = document.querySelector('.gallery-modal .prev-btn');
const nextBtn = document.querySelector('.gallery-modal .next-btn');
const stickyHeader = document.querySelector('.sticky-header');
let currentIndex = 0;
const images = [
  'assets/img/thumbnail1.webp',
  'assets/img/thumbnail2.webp',
  'assets/img/thumbnail3.webp',
  'assets/img/thumbnail5.webp',
  'assets/img/thumbnail4.webp'
];

// Populate the gallery grid
images.forEach((img, index) => {
  const thumbnail = document.createElement('img');
  thumbnail.src = img;
  thumbnail.classList.add('gallery-thumbnail');
  thumbnail.addEventListener('click', () => openModal(index));
  galleryGrid.appendChild(thumbnail);
});

// Open the gallery modal
function openModal(index) {
  currentIndex = index;
  galleryImage.src = images[index];
  galleryModal.classList.add('open');
  document.body.classList.add('modal-open');
  stickyHeader.classList.add('hidden');

  // Add modal open animation
  galleryModal.animate([
    { opacity: 0, transform: 'scale(0.95)' },
    { opacity: 1, transform: 'scale(1)' }
  ], {
    duration: 300,
    easing: 'ease-out'
  });

  // Show the navigation buttons
  prevBtn.style.display = 'block';
  nextBtn.style.display = 'block';
}

// Close the gallery modal
galleryModal.addEventListener('click', (event) => {
  if (event.target === galleryModal || event.target.classList.contains('close-btn')) {
    closeModal();
  }
});

function closeModal() {
  galleryModal.classList.remove('open');
  document.body.classList.remove('modal-open');
  stickyHeader.classList.remove('hidden');

  // Hide the navigation buttons
  prevBtn.style.display = 'none';
  nextBtn.style.display = 'none';
}

// Navigate through gallery images
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  galleryImage.src = images[currentIndex];
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  galleryImage.src = images[currentIndex];
});