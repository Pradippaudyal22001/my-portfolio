// Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Set current year in footer
//     document.getElementById('current-year').textContent = new Date().getFullYear();
    
//     // Mobile navigation toggle
//     const hamburger = document.querySelector('.hamburger');
//     const navLinks = document.querySelector('.nav-links');
    
//     if (hamburger) {
//         hamburger.addEventListener('click', function() {
//             this.classList.toggle('active');
//             navLinks.classList.toggle('active');
//         });
//     }
    
//     // Close mobile menu when clicking a nav link
//     const navItems = document.querySelectorAll('.nav-links a');
//     navItems.forEach(item => {
//         item.addEventListener('click', function() {
//             hamburger.classList.remove('active');
//             navLinks.classList.remove('active');
//         });
//     });
    
//     // Tabs functionality
//     const tabBtns = document.querySelectorAll('.tab-btn');
    
//     tabBtns.forEach(btn => {
//         btn.addEventListener('click', function() {
//             // Remove active class from all buttons and panes
//             tabBtns.forEach(b => b.classList.remove('active'));
//             document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            
//             // Add active class to clicked button
//             this.classList.add('active');
            
//             // Show corresponding tab pane
//             const tabId = this.getAttribute('data-tab');
//             document.getElementById(tabId).classList.add('active');
//         });
//     });
    
//     // Gallery tabs functionality
//     const galleryTabBtns = document.querySelectorAll('.gallery-tab-btn');
    
//     galleryTabBtns.forEach(btn => {
//         btn.addEventListener('click', function() {
//             // Remove active class from all buttons and panes
//             galleryTabBtns.forEach(b => b.classList.remove('active'));
//             document.querySelectorAll('.gallery-tab-pane').forEach(pane => pane.classList.remove('active'));
            
//             // Add active class to clicked button
//             this.classList.add('active');
            
//             // Show corresponding tab pane
//             const tabId = this.getAttribute('data-tab') + '-content';
//             document.getElementById(tabId).classList.add('active');
//         });
//     });
    
//     // Lightbox functionality
//     const galleryItems = document.querySelectorAll('.gallery-item');
//     const lightbox = document.querySelector('.lightbox');
//     const lightboxImg = document.querySelector('.lightbox-img');
//     const lightboxClose = document.querySelector('.lightbox-close');
    
//     if (galleryItems.length > 0 && lightbox && lightboxImg && lightboxClose) {
//         galleryItems.forEach(item => {
//             item.addEventListener('click', function() {
//                 const imgSrc = this.getAttribute('data-src');
//                 lightboxImg.setAttribute('src', imgSrc);
//                 lightbox.style.display = 'flex';
//                 document.body.style.overflow = 'hidden';
//             });
//         });
        
//         lightboxClose.addEventListener('click', function() {
//             lightbox.style.display = 'none';
//             document.body.style.overflow = 'auto';
//         });
        
//         lightbox.addEventListener('click', function(e) {
//             if (e.target === lightbox) {
//                 lightbox.style.display = 'none';
//                 document.body.style.overflow = 'auto';
//             }
//         });
//     }
    
//     // Scroll reveal animation
//     function revealElements() {
//         const elements = document.querySelectorAll('.reveal-element');
//         const windowHeight = window.innerHeight;
        
//         elements.forEach(element => {
//             const elementTop = element.getBoundingClientRect().top;
//             const elementVisible = 150;
            
//             if (elementTop < windowHeight - elementVisible) {
//                 element.classList.add('active');
//             }
//         });
//     }
    
//     // Initial check for elements in view
//     revealElements();
    
//     // Check for elements on scroll
//     window.addEventListener('scroll', revealElements);
    
//     // Header scroll effect
//     const header = document.querySelector('header');
    
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) {
//             header.classList.add('scrolled');
//         } else {
//             header.classList.remove('scrolled');
//         }
//     });
    
//     // Form submission
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Get form values
//             const name = document.getElementById('name').value;
//             const email = document.getElementById('email').value;
//             const message = document.getElementById('message').value;
            
//             // Here you would typically send the form data to a server
//             // For this example, we'll just show a success message
            
//             // Clear form
//             contactForm.reset();
            
//             // Show success message
//             alert('Thank you for your message, ' + name + '! I will get back to you soon.');
//         });
//     }
// });


// document.getElementById("contact-form").addEventListener("submit", async function (event) {
//     event.preventDefault(); // Prevent default form submission

//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let message = document.getElementById("message").value.trim();
//     let formMessage = document.getElementById("form-message");

//     // Email validation
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         formMessage.style.color = "red";
//         formMessage.textContent = "Please enter a valid email.";
//         return;
//     }

//     // Send data to backend
//     let response = await fetch("contact.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, message }),
//     });

//     let result = await response.json();
//     if (result.success) {
//         formMessage.style.color = "green";
//         formMessage.textContent = "Message sent successfully!";
//         document.getElementById("contact-form").reset(); // Clear form
//     } else {
//         formMessage.style.color = "red";
//         formMessage.textContent = "Failed to send message. Try again.";
//     }
// });


// document.querySelector(".hamburger").addEventListener("click", function() {
//     document.querySelector(".nav-links").classList.toggle("active");
// });


// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("current-year").textContent = new Date().getFullYear();

//     // Mobile navigation toggle
//     const hamburger = document.querySelector(".hamburger");
//     const navLinks = document.querySelector(".nav-links");

//     if (hamburger) {
//         hamburger.addEventListener("click", function () {
//             this.classList.toggle("active");
//             navLinks.classList.toggle("active");
//         });
//     }

//     // Close mobile menu when clicking a nav link
//     document.querySelectorAll(".nav-links a").forEach(item => {
//         item.addEventListener("click", function () {
//             hamburger.classList.remove("active");
//             navLinks.classList.remove("active");
//         });
//     });

//     // Tabs functionality
//     document.querySelectorAll(".tab-btn").forEach(btn => {
//         btn.addEventListener("click", function () {
//             document.querySelectorAll(".tab-btn, .tab-pane").forEach(el => el.classList.remove("active"));
//             this.classList.add("active");
//             document.getElementById(this.getAttribute("data-tab")).classList.add("active");
//         });
//     });

//     // Lightbox functionality
//     const lightbox = document.querySelector(".lightbox");
//     const lightboxImg = document.querySelector(".lightbox-img");

//     if (lightbox && lightboxImg) {
//         document.querySelectorAll(".gallery-item").forEach(item => {
//             item.addEventListener("click", function () {
//                 lightboxImg.setAttribute("src", this.getAttribute("data-src"));
//                 lightbox.style.display = "flex";
//                 document.body.style.overflow = "hidden";
//             });
//         });

//         document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
//         lightbox.addEventListener("click", e => {
//             if (e.target === lightbox) closeLightbox();
//         });
//     }

//     function closeLightbox() {
//         lightbox.style.display = "none";
//         document.body.style.overflow = "auto";
//     }

//     // Scroll reveal animation
//     function revealElements() {
//         document.querySelectorAll(".reveal-element").forEach(el => {
//             if (el.getBoundingClientRect().top < window.innerHeight - 150) {
//                 el.classList.add("active");
//             }
//         });
//     }
//     revealElements();
//     window.addEventListener("scroll", revealElements);

//     // Header scroll effect
//     window.addEventListener("scroll", function () {
//         document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
//     });

//     // Contact form submission
//     const contactForm = document.getElementById("contactForm"); // Fix: Corrected form ID
//     const formMessage = document.getElementById("form-message");

//     if (contactForm) {
//         contactForm.addEventListener("submit", async function (event) {
//             event.preventDefault();

//             let name = document.getElementById("name").value.trim();
//             let email = document.getElementById("email").value.trim();
//             let message = document.getElementById("message").value.trim();
//             let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//             // Validate form fields
//             if (!name || !email || !message) {
//                 formMessage.textContent = "All fields are required.";
//                 formMessage.classList.remove("success");
//                 formMessage.classList.add("error");
//                 return;
//             }

//             if (!emailRegex.test(email)) {
//                 formMessage.textContent = "Please enter a valid email.";
//                 formMessage.classList.remove("success");
//                 formMessage.classList.add("error");
//                 return;
//             }

//             try {
//                 const response = await fetch("contact.php", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({ name, email, message }),
//                 });

//                 const result = await response.json();

//                 if (result.success) {
//                     formMessage.textContent = "Message sent successfully!";
//                     formMessage.classList.remove("error");
//                     formMessage.classList.add("success");
//                     contactForm.reset();
//                 } else {
//                     formMessage.textContent = "Failed to send message. Try again.";
//                     formMessage.classList.remove("success");
//                     formMessage.classList.add("error");
//                 }
//             } catch (error) {
//                 formMessage.textContent = "An error occurred. Please try again.";
//                 formMessage.classList.remove("success");
//                 formMessage.classList.add("error");
//             }
//         });
//     }
// });

// document.getElementById("contactForm").addEventListener("submit", async function (event) {
//     event.preventDefault();

//     let formData = new FormData(this);

//     let response = await fetch("send_email.php", {
//         method: "POST",
//         body: formData,
//     });

//     let result = await response.text();
//     document.getElementById("form-message").textContent = result;
// });


// fetch("http://localhost:8000/contact.php", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, email, message }),
// })


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Mobile navigation toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
    }

    // Close mobile menu when clicking a nav link
    document.querySelectorAll(".nav-links a").forEach(item => {
        item.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    // Tabs functionality
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".tab-btn, .tab-pane").forEach(el => el.classList.remove("active"));
            this.classList.add("active");
            document.getElementById(this.getAttribute("data-tab")).classList.add("active");
        });
    });

    // Lightbox functionality
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");

    if (lightbox && lightboxImg) {
        document.querySelectorAll(".gallery-item").forEach(item => {
            item.addEventListener("click", function () {
                lightboxImg.setAttribute("src", this.getAttribute("data-src"));
                lightbox.style.display = "flex";
                document.body.style.overflow = "hidden";
            });
        });

        document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", e => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    function closeLightbox() {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Scroll reveal animation
    function revealElements() {
        document.querySelectorAll(".reveal-element").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 150) {
                el.classList.add("active");
            }
        });
    }
    revealElements();
    window.addEventListener("scroll", revealElements);

    // Header scroll effect
    window.addEventListener("scroll", function () {
        document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
    });

    // Contact form submission using FormSubmit.co
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("form-message");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            // No need to prevent default because FormSubmit handles it
            formMessage.textContent = "Sending message...";
            formMessage.classList.add("info");

            // Clear message after a delay
            setTimeout(() => {
                formMessage.textContent = "";
                formMessage.classList.remove("info");
            }, 3000);
        });
    }
});


