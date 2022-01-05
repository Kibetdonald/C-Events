const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");


tl.from(".big-text", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'});
tl.from(".section_one", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'});
tl.from(".btn-signin", {opacity: 0, duration: 1, y: "100%", delay: 0.1,stagger:0.6, ease: 'Power2.easeInOut'});
// tl.fromTo(".section_one", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
// t1.from('button', {opacity: 0, duration: 1, y: -50, delay: 0.6, ease: 'Power2.easeInOut'});
// t1.from('p', {opacity: 0, duration: 1, y: -50, delay: 1.8, ease: 'Power2.easeInOut'});
// t1.from('img ', {duration: 1, y:30, opacity: 0, delay: 1.4});

// t1.from('anim1', {opacity: 0, duration: 1, y: -50, stagger:0.6});