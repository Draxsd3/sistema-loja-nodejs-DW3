document.addEventListener('DOMContentLoaded', function() {
  // Product filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      productItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
          }, 10);
        } else {
          item.style.opacity = 0;
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // Add hover effect to product cards
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('.product-image').style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('.product-image').style.transform = 'scale(1)';
    });
  });
});