const positions = [
    { top: "0%", left: "0%" },
    { top: "0%", left: "10%" },
    { top: "0%", left: "60%" },
    { top: "15%", left: "15%" },
    { top: "15%", left: "40%" },
    { top: "15%", left: "90%" },
    { top: "70%", left: "20%" },
    { top: "32%", left: "75%" },
    { top: "48%", left: "0%" },
    { top: "64%", left: "30%" },
    { top: "64%", left: "60%" },
    { top: "64%", left: "90%" },
    { top: "70%", left: "70%" },
    { top: "32%", left: "50%" },
];

const images = document.querySelectorAll(".img");

gsap.set(".img", {
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
});

gsap.from("p", {
    scale: 0,
    ease: "power4.inOut",
    duration: 1,
    stagger: {
        amount: 0.15,
    },
    delay: 0.5,
});

gsap.to(".img", {
    scale: 1,
    width: "300px",
    height: "400px",
    stagger: 0.15,
    duration: 0.75,
    ease: "power2.out",
    delay: 1,
    onComplete: () => {
        gsap.to(".img", {
            top: (i) => positions[i].top,
            left: (i) => positions[i].left,
            transform: "none",
            width: "150px",
            height: "200px",
            stagger: 0.075,
            duration: 0.75,
            ease: "power2.out",
        });
    },
});

gsap.to("p", {
    scale: 0,
    ease: "power4.inOut",
    duration: 1,
    stagger: {
        amount: 0.15,
    },
    delay: 3,
    onComplete: () => {
        document.querySelector(".header").remove();
    },
});

gsap.from("a", {
    y: 20,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    stagger: {
        amount: 0.15,
    },
    delay: 4,
});
