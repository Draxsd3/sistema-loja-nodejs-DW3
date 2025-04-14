document.addEventListener('DOMContentLoaded', function() {
  // Add a pulsing effect to progress steps
  const activeSteps = document.querySelectorAll('.progress-step.active .step-icon');
  
  activeSteps.forEach(step => {
    setInterval(() => {
      step.style.transform = 'scale(1.1)';
      setTimeout(() => {
        step.style.transform = 'scale(1)';
      }, 500);
    }, 2000);
  });
  
  // Make pedido cards interactive
  const pedidoCards = document.querySelectorAll('.pedido-card');
  
  pedidoCards.forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('expanded');
      
      if (this.classList.contains('expanded')) {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
      } else {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      }
    });
  });
});