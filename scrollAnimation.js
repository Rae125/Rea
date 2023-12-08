gsap.registerPlugin(ScrollTrigger);

// Haal de opgeslagen scrollpositie op uit localStorage
const storedScrollPosition = localStorage.getItem('scrollPosition');
const initialScrollPosition = storedScrollPosition ? parseInt(storedScrollPosition) : 0;

// Stel de initiële scrollpositie in
window.scrollTo(0, initialScrollPosition);

// Sla de huidige scrollpositie op in localStorage wanneer de gebruiker scrolt
document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Controleer of de scrollpositie bovenaan de pagina is
  if (scrollPosition < window.innerHeight) {
    localStorage.setItem('scrollPosition', scrollPosition);
  }
});

/* Header animation */
let headerTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.zwartevlak',
    start: 'top top',
    end: '+=100%',
    scrub: true,
    onUpdate: self => {
      // Bereken de blur op basis van de grootte van het logo
      const blurValue = 13.5 - (self.progress * 10); // Verander dit om de gewenste blur-aanpassing te regelen
      gsap.set('.BigRae', { filter: `blur(${blurValue}px)` });
    }
  }
});

headerTl.fromTo('header', {
  height: '100vh',
  padding: '2.3rem 0 0.5rem'
}, {
  height: '50px',
  padding: '1.3rem 0 0.5rem',
  duration: 1
});

/* Logo to header animation for Rae */
let logoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.zwartevlak',
    start: 'top top',
    end: '+=100%',
    scrub: true
  }
});

logoTl.fromTo('.BigRae img', {
  top: '50%',  // Hier kun je de verticale positie aanpassen als het logo groot is
  left: '50%', // Hier kun je de horizontale positie aanpassen als het logo groot is
  yPercent: -50,
  xPercent: -50,
  scale: 8,     // Hier kun je de grootte aanpassen als het logo groot is
}, {
  top: '50%',  // Hier kun je de verticale positie aanpassen als het logo klein is
  left: '50%', // Hier kun je de horizontale positie aanpassen als het logo klein is
  yPercent: 0,
  xPercent: -50,
  scale: 1,     // Hier kun je de grootte aanpassen als het logo klein is
  duration: 0.8
});

/* That's all Folks animation */
let endTl = gsap.timeline({
  repeat: -1,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.end',
    start: 'bottom 100%-=50px'
  }
});

gsap.set('.end', {
  opacity: 0
});

gsap.to('.end', {
  opacity: 1,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.end',
    start: 'bottom 100%-=50px',
    once: true
  }
});
