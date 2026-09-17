/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }, 500);

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navMenu =
    document.querySelector(".nav-menu");

const navLinks =
    document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon =
        menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   TYPING ANIMATION
========================================================= */

const typingText =
    document.getElementById("typing-text");

const roles = [
    "Web Developer",
    "Python Developer",
    "React Developer",
    "Full Stack Developer"
];

let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) %
                roles.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (
            elementTop <
            windowHeight - 80
        ) {

            element.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute("href") ===
                    `#${sectionId}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =========================================================
   SKILL PROGRESS ANIMATION
========================================================= */

const skillSection =
    document.getElementById("skills");

const progressBars =
    document.querySelectorAll(".progress-bar");

let skillsAnimated = false;


function animateSkills() {

    if (skillsAnimated) return;

    const sectionTop =
        skillSection.getBoundingClientRect().top;

    if (
        sectionTop <
        window.innerHeight - 100
    ) {

        progressBars.forEach(bar => {

            const width =
                bar.getAttribute(
                    "data-width"
                );

            bar.style.width = width;

        });

        skillsAnimated = true;

    }

}


window.addEventListener(
    "scroll",
    animateSkills
);


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;


function animateCounters() {

    if (countersStarted) return;

    const statsSection =
        document.querySelector(
            ".stats-section"
        );

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (
        sectionTop <
        window.innerHeight - 100
    ) {

        counters.forEach(counter => {

            const target =
                Number(
                    counter.getAttribute(
                        "data-target"
                    )
                );

            let current = 0;

            const increment =
                target / 40;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.textContent =
                        Math.ceil(current);

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.textContent =
                        target;

                }

            };

            updateCounter();

        });

        countersStarted = true;

    }

}


window.addEventListener(
    "scroll",
    animateCounters
);


/* =========================================================
   THEME TOGGLE
========================================================= */

const themeToggle =
    document.getElementById(
        "theme-toggle"
    );


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-theme"
    );

    themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';

}


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-theme"
        );

        const isLight =
            document.body.classList.contains(
                "light-theme"
            );

        if (isLight) {

            themeToggle.innerHTML =
                '<i class="fas fa-sun"></i>';

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            themeToggle.innerHTML =
                '<i class="fas fa-moon"></i>';

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    }
);


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById(
        "back-to-top"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contact-form"
    );


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const name =
            document.getElementById(
                "name"
            ).value.trim();

        const email =
            document.getElementById(
                "email"
            ).value.trim();

        const subject =
            document.getElementById(
                "subject"
            ).value.trim();

        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            alert(
                "Please fill in all fields."
            );

            return;

        }


        const mailSubject =
            encodeURIComponent(
                subject
            );

        const mailBody =
            encodeURIComponent(
                `Hello Poovarasan,\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`
            );


        window.location.href =
            `mailto:poovarasanr12012002@gmail.com` +
            `?subject=${mailSubject}` +
            `&body=${mailBody}`;


        contactForm.reset();

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* =========================================================
   3D PROJECT CARD EFFECT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) /
                    centerY) *
                -3;

            const rotateY =
                ((x - centerX) /
                    centerX) *
                3;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});