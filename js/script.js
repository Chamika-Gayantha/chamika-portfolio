document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Loader Animation ---
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            // Trigger hero animations after loader hides
            document.querySelectorAll(".hero .animate-element").forEach(el => {
                el.classList.add("animated");
            });
        }, 500);
    }, 1500); // 1.5 seconds loading time

    // --- 2. Custom Cursor ---
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    
    // Check if device supports hover
    const isHoverSupported = window.matchMedia('(hover: hover)').matches;

    if (isHoverSupported && cursorDot && cursorOutline) {
        window.addEventListener("mousemove", (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            // Add a slight delay for the outline
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add hover effects for links and buttons
        const hoverElements = document.querySelectorAll("a, button, .project-card");
        hoverElements.forEach(el => {
            el.addEventListener("mouseenter", () => {
                cursorOutline.style.width = "60px";
                cursorOutline.style.height = "60px";
                cursorOutline.style.backgroundColor = "rgba(99, 102, 241, 0.1)";
            });
            el.addEventListener("mouseleave", () => {
                cursorOutline.style.width = "40px";
                cursorOutline.style.height = "40px";
                cursorOutline.style.backgroundColor = "transparent";
            });
        });
    }

    // --- 3. Typing Animation ---
    const typingText = document.querySelector(".typing-text");
    const textArray = ["ICT Undergraduate", "Software Developer", "Web Developer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textArray[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            typingSpeed = 500; // Pause before new word
        }

        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start typing effect
    if(typingText) {
        setTimeout(typeEffect, 2500); // Start after loader and hero enter
    }

    // --- 4. Navigation Menu (Mobile) ---
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLinks = document.querySelectorAll(".nav-link");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
        });
    }

    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    }

    navLinks.forEach(n => n.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    }));

    // --- 5. Scroll Header and Back to Top ---
    function scrollHeader() {
        const header = document.getElementById("header");
        if (this.scrollY >= 50) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    }
    window.addEventListener("scroll", scrollHeader);

    function scrollUp() {
        const backToTop = document.getElementById("back-to-top");
        if (this.scrollY >= 350) backToTop.classList.add("show");
        else backToTop.classList.remove("show");
    }
    window.addEventListener("scroll", scrollUp);

    // --- 6. Active Link Section Highlighting ---
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute("id");
            const navLink = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add("active");
                } else {
                    navLink.classList.remove("active");
                }
            }
        });
    }
    window.addEventListener("scroll", scrollActive);

    // --- 7. Scroll Reveal Animation using IntersectionObserver ---
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- 8. Project Modals ---
    const modalBtns = document.querySelectorAll(".view-details-btn");
    const closeBtns = document.querySelectorAll(".close-modal");
    const modals = document.querySelectorAll(".modal");

    modalBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const modalId = btn.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add("active");
                document.body.style.overflow = "hidden"; // Prevent background scrolling
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modals.forEach(modal => {
                modal.classList.remove("active");
            });
            document.body.style.overflow = "auto";
        });
    });

    // Close on outside click
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            e.target.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

    // --- 9. 3D Tilt Effect (Vanilla JS) ---
    const tiltElements = document.querySelectorAll("[data-tilt]");
    
    if(isHoverSupported) {
        tiltElements.forEach(el => {
            el.addEventListener("mousemove", (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10; // Max rotation
                const rotateY = ((x - centerX) / centerX) * 10;
                
                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            
            el.addEventListener("mouseleave", () => {
                el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });
    }

    // --- 10. Magnetic Button Effect ---
    const magneticBtns = document.querySelectorAll(".magnetic-btn");
    
    if(isHoverSupported) {
        magneticBtns.forEach(btn => {
            btn.addEventListener("mousemove", (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            btn.addEventListener("mouseleave", () => {
                btn.style.transform = `translate(0px, 0px)`;
            });
        });
    }

    // --- 11. Hero Background Particles (Simple implementation) ---
    function createParticles() {
        const particlesContainer = document.getElementById("particles");
        if (!particlesContainer) return;
        
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            
            // Random properties
            const size = Math.random() * 5 + 2; // 2px to 7px
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 20 + 10; // 10s to 30s
            const delay = Math.random() * 5;
            
            particle.style.position = "absolute";
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            particle.style.borderRadius = "50%";
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            
            // Add animation via standard JS since we don't want to clutter CSS with 20 keyframes
            particle.animate([
                { transform: `translate(0, 0) scale(1)`, opacity: 0 },
                { transform: `translate(${Math.random()*100 - 50}px, ${Math.random()*100 - 50}px) scale(${Math.random() + 0.5})`, opacity: 0.5, offset: 0.5 },
                { transform: `translate(${Math.random()*200 - 100}px, ${Math.random()*200 - 100}px) scale(1)`, opacity: 0 }
            ], {
                duration: duration * 1000,
                delay: delay * 1000,
                iterations: Infinity,
                easing: "ease-in-out"
            });
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Only create particles if user prefers motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        createParticles();
    }
});
