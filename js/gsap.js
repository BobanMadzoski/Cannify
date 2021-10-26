
window.onload = function() {


gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.batch("h2, h3, h4, h5, h6", {onEnter: batch => gsap.from(batch, {  duration:1 , opacity: 0, x:100, stagger: 0.1, ease: " power4.out" })});


const sections = gsap.utils.toArray(".panel");
const container = document.querySelector('body');

    gsap.from("h1 span>span", {
      duration: 1.5,
      delay: 1.5,
      y: 200,
      autoAlpha: 0,
      ease: Power3.out,
      stagger: 0.3
    })

  



    gsap.fromTo(".header-breakline", { delay: 1.7,  duration: 0.7, opacity: 0, width: 0}, { delay: 1.7,duration: 0.7, opacity: 1, width: '100%', ease: "slow (0.3 , 0.4, false)"})

    gsap.fromTo(".navbar-brand", { delay: 2,  duration: 0.5, opacity: 0 ,stagger: 0.03, y: 50, ease: "slow (0.9 , 4, false)" }, { delay: 2,duration: 0.5, opacity: 1, y: 0,stagger: 0.03,  ease: "slow (0.9 , 4, false)"})

    gsap.fromTo(".header-contact > span", { delay: 2,  duration: 0.5, opacity: 0 ,stagger: 0.03, ease: "slow (0.9 , 4, false)" }, { delay: 2,duration: 0.5, opacity: 1,stagger: 0.03,  ease: "slow (0.9 , 4, false)"})

    gsap.fromTo(".header-buttons > button", { delay: 1.9,  duration: 0.3, opacity: 0 ,stagger: 0.1, ease: "slow (0.9 , 4, false)" }, { delay: 1.9,duration: 0.3, opacity: 1,stagger: 0.1,  ease: "slow (0.9 , 4, false)"})
     

    ScrollTrigger.batch(".reveal", {onEnter: batch => gsap.to(batch, {  duration:1 , height: 0, stagger: 0.3 })});

    ScrollTrigger.batch(".breakline", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, width: 0,ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, width: '100%', ease: "slow (0.3 , 0.4, false)"})})
    ScrollTrigger.batch(".news-breakline", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, width: 0,ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, width: '100%', ease: "slow (0.3 , 0.4, false)"})})
    ScrollTrigger.batch(".black-breakline", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, width: 0,ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, width: '100%', ease: "slow (0.3 , 0.4, false)"})})
    ScrollTrigger.batch(".news>div", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, y: 50, stagger: 0.5, ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, y: 0, stagger: 0.5, ease: "slow (0.3 , 0.4, false)"})})
    ScrollTrigger.batch(".first-col>div", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, y: 50, stagger: 0.1, ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, y: 0, stagger: 0.1, ease: "slow (0.3 , 0.4, false)"})})
    ScrollTrigger.batch(".cannify-partners>div", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, y: 50, stagger: 0.4, ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, y: 0, stagger: 0.4, ease: "slow (0.3 , 0.4, false)"})})

} 
