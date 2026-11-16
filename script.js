// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    const open = navLinks.classList.toggle('active');
    mobileMenu.setAttribute('aria-expanded', String(open));
});

// Smooth scrolling for in-page navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();

        navLinks.classList.remove('active');
        mobileMenu.setAttribute('aria-expanded', 'false');

        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// The contact form posts natively to Formspree (see the form's action attribute).

// Architecture diagram lightbox (native <dialog>)
const diagramDialog = document.getElementById('diagram-dialog');
const openDiagram = document.getElementById('open-diagram');
if (diagramDialog && openDiagram && typeof diagramDialog.showModal === 'function') {
    openDiagram.addEventListener('click', () => diagramDialog.showModal());
    diagramDialog.addEventListener('click', (e) => {
        if (e.target === diagramDialog) diagramDialog.close();
    });
}
