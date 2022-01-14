const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".section_two", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
// t1.from('section_two ', {duration: 1, y:30, opacity: 0, delay: 1.4});

tl.from(".section_two", {opacity: 0, duration: 1, x: "100%", stagger:0.6, ease: 'Power2.easeInOut'});
tl.from(".big-text", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'});
tl.from(".section_one", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'});
tl.from(".btn-signin", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'});

tl.from(".platform-title", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'});
tl.from(".card", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'});


tl.from(".feature-image_1", {opacity: 0, duration: 1, y: "50%", stagger:0.6, ease: 'Power2.easeInOut'});
tl.from(".feature_one", {opacity: 0, duration: 1, y: "50%", stagger:0.6, ease: 'Power2.easeInOut'});


tl.from(".feature-image_2", {opacity: 0, duration: 1, y: "50%", stagger:0.6, ease: 'Power2.easeInOut'});
tl.from(".feature_two", {opacity: 0, duration: 1, y: "50%", stagger:0.6, ease: 'Power2.easeInOut'});



tl.from(".feature-image_3", {opacity: 0, duration: 1, y: "50%", stagger:0.6, ease: 'Power2.easeInOut'});
tl.from(".feature_three", {opacity: 0, duration: 1, y: "50%", stagger:0.6, ease: 'Power2.easeInOut'});


tl.from(".contact-form", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'});

tl.from(".footer", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'});


// tl.fromTo(".section_one", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
// t1.from('button', {opacity: 0, duration: 1, y: -50, delay: 0.6, ease: 'Power2.easeInOut'});
// t1.from('p', {opacity: 0, duration: 1, y: -50, delay: 1.8, ease: 'Power2.easeInOut'});
// t1.from('img ', {duration: 1, y:30, opacity: 0, delay: 1.4});

// t1.from('anim1', {opacity: 0, duration: 1, y: -50, stagger:0.6});


//using timeline
t1.from("anim", {y: -50, stagger: .6, opacity: 0})
      .to(rule, {duration: 1.8, cssRule: {scaleY: 0}}, "-=2.2")
      .from("aside", {backgroundPosition: '200px 0px', opacity: 0}, "-=1.5" )
      .from("img", {y: 50, opacity: 0},)