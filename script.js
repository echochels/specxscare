document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 3. Strategy Tab switcher (Index page)
    const tabButtons = document.querySelectorAll('.strat-tab-btn');
    const tabPanels = document.querySelectorAll('.strat-panel');

    if (tabButtons.length > 0 && tabPanels.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                
                // Remove active classes
                tabButtons.forEach(b => b.classList.remove('active'));
                tabPanels.forEach(p => p.classList.remove('active'));

                // Add active classes
                btn.classList.add('active');
                const activePanel = document.getElementById(targetTab);
                if (activePanel) {
                    activePanel.classList.add('active');
                }
            });
        });
    }

    // 4. Clinical Trials Chart Animation (Product page)
    const chartBars = document.querySelectorAll('.chart-bar-fill');
    if (chartBars.length > 0) {
        const animateCharts = () => {
            chartBars.forEach(bar => {
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = percentage + '%';
            });
        };

        // Trigger animation either on scroll or immediately if visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCharts();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        const dashboard = document.querySelector('.dashboard-grid');
        if (dashboard) {
            observer.observe(dashboard);
        } else {
            // Fallback if not on product page
            animateCharts();
        }
    }

    // 5. Contact Form Validation and Success Mockup (Contact page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert('Please fill in all the fields.');
                return;
            }

            // Success feedback
            const formCard = document.querySelector('.contact-card-wrapper');
            if (formCard) {
                formCard.innerHTML = `
                    <div style="text-align: center; padding: 40px 20px; animation: fadeIn 0.5s ease;">
                        <div style="font-size: 4rem; color: var(--accent-red); margin-bottom: 20px;">✓</div>
                        <h3 style="margin-bottom: 12px; font-size: 1.6rem; color: var(--primary-navy-dark)">Message Sent Successfully!</h3>
                        <p style="color: var(--text-muted); margin-bottom: 24px;">Thank you for contacting Specxs Care Limited. We will review your message and get back to you shortly.</p>
                        <button class="btn btn-primary" onclick="window.location.reload()">Send Another Message</button>
                    </div>
                `;
            }
        });
    }

    // 6. Media Video Play Button Mockup (Media page)
    const playBtn = document.querySelector('.video-play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            alert('Loading the Specxs Smart Bladder clinical video presentation...');
        });
    }
});
