// Function to toggle the mobile menu (open/close)
function toggleMenu() {
    const links = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    const icon = document.querySelector('.menu-icon');
    const expanded = links.classList.toggle('show');
    overlay.classList.toggle('show');
    icon.setAttribute('aria-expanded', expanded);
  }
  
  // Event listener for scroll to handle nav bar styles and back to top button
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const backToTop = document.getElementById('backToTop');
    
    // Change nav bar style and show back to top button after scrolling
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
      backToTop.style.display = 'block';
    } else {
      nav.classList.remove('scrolled');
      backToTop.style.display = 'none';
    }
  
    // Active link highlight on scroll
    const sections = document.querySelectorAll('section.menu');
    const navLinks = document.querySelectorAll('nav ul li a');
    let current = '';
    
    // Loop through each section and determine the current section based on scroll position
    sections.forEach(sec => {
      const top = window.scrollY + 80;  // Account for any padding/margin
      if (top >= sec.offsetTop) current = sec.getAttribute('id');
    });
    
    // Loop through nav links and highlight the active link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
  });
  
  // Event listener for back to top button
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Smooth scroll to the section when navigation link is clicked
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();  // Prevent default anchor behavior
      
      // Get the target section id and scroll to that section
      const targetId = this.getAttribute('href').substring(1); // Get the target section id (without '#')
      const targetSection = document.getElementById(targetId);
  
      // Scroll to the section smoothly
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  
      // Close the mobile menu after clicking the link
      const links = document.getElementById('nav-links');
      const overlay = document.getElementById('overlay');
      const icon = document.querySelector('.menu-icon');
      
      // Remove show class to close the menu
      links.classList.remove('show');
      overlay.classList.remove('show');
      
      // Update aria-expanded for accessibility
      icon.setAttribute('aria-expanded', 'false');
    });
  });
  