gsap.registerPlugin(ScrollTrigger);
    
ScrollTrigger.matchMedia({
"(min-width: 960px)": function() {
  const sections = gsap.utils.toArray(".first-year-section");
  let maxWidth = 0;
  
  const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
      maxWidth += section.offsetWidth;
    });
  };
  getMaxWidth();
  ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
  
  gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-wrapper",
      pin: true,
      scrub: 0.1,
      snap: 1 / (sections.length - 1),
      end: () => `+=${maxWidth}`,
      invalidateOnRefresh: true
    }
  });}
}); 



