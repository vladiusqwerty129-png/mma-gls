document.addEventListener('DOMContentLoaded', () => {

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  
  mobileToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    mobileToggle.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileToggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Contact form submission
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const phone = form.querySelector('#phone').value;

    console.log('Lead captured:', { name, email, phone });

    form.style.display = 'none';
    success.classList.add('show');
  });

  // Scroll-triggered fade-in animations
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.program-card, .testimonial-card, .team-card, .about-grid, .contact-grid, .mission-box').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });


  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

});
